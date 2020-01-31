package httptest

import (
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gorilla/mux"
	"github.com/lolopinto/ent/internal/logutil"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestServer(
	t *testing.T,
	handler http.HandlerFunc,
	expectedBody string,
	fn func(*mux.Router, *http.Request),
	orderedLogs ...[]string,
) {
	l := logutil.CaptureLogger{}
	l.Capture()
	defer l.Reset()

	r := mux.NewRouter()
	r.Handle("/query", handler)

	server := httptest.NewServer(r)
	defer server.Close()

	req, err := http.NewRequest("GET", server.URL+"/query", nil)
	require.Nil(t, err)

	fn(r, req)

	resp, err := server.Client().Do(req)

	require.Nil(t, err)

	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)

	require.Nil(t, err)

	assert.Equal(t, []byte(expectedBody), body)

	for _, lines := range orderedLogs {
		assert.True(t, l.ContainsInOrder(lines))
	}
}
