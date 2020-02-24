// Code generated by github.com/lolopinto/ent/ent, DO NOT EDIT.

package address

import (
	"github.com/lolopinto/ent/ent"
	"github.com/lolopinto/ent/ent/actions"
	"github.com/lolopinto/ent/ent/viewer"
	"github.com/lolopinto/ent/internal/test_schema/models"
	"github.com/lolopinto/ent/internal/test_schema/models/configs"
)

type AddressMutationBuilder struct {
	requiredFields []string
	builder        *actions.EntMutationBuilder
	address        *models.Address
	city           *string
	country        *string
	residentNames  *[]string
	state          *string
	streetAddress  *string
	zip            *string
}

func NewMutationBuilder(
	v viewer.ViewerContext,
	operation ent.WriteOperation,
	requiredFields []string,
	opts ...func(*actions.EntMutationBuilder),
) *AddressMutationBuilder {
	address := models.NewAddressLoader(v).GetNewAddress()

	ret := &AddressMutationBuilder{
		requiredFields: requiredFields,
		address:        address,
	}
	opts = append(opts, actions.BuildFields(ret.buildFields))
	b := actions.NewMutationBuilder(
		v,
		operation,
		address,
		&configs.AddressConfig{},
		opts...,
	)
	ret.builder = b
	return ret
}

func (b *AddressMutationBuilder) SetCity(city string) *AddressMutationBuilder {
	b.city = &city
	return b
}

func (b *AddressMutationBuilder) SetCountry(country string) *AddressMutationBuilder {
	b.country = &country
	return b
}

func (b *AddressMutationBuilder) SetResidentNames(residentNames []string) *AddressMutationBuilder {
	b.residentNames = &residentNames
	return b
}

func (b *AddressMutationBuilder) SetState(state string) *AddressMutationBuilder {
	b.state = &state
	return b
}

func (b *AddressMutationBuilder) SetStreetAddress(streetAddress string) *AddressMutationBuilder {
	b.streetAddress = &streetAddress
	return b
}

func (b *AddressMutationBuilder) SetZip(zip string) *AddressMutationBuilder {
	b.zip = &zip
	return b
}

func (b *AddressMutationBuilder) GetCity() string {
	if b.city == nil {
		return ""
	}
	return *b.city
}

func (b *AddressMutationBuilder) GetCountry() string {
	if b.country == nil {
		return ""
	}
	return *b.country
}

func (b *AddressMutationBuilder) GetResidentNames() []string {
	if b.residentNames == nil {
		return nil
	}
	return *b.residentNames
}

func (b *AddressMutationBuilder) GetState() string {
	if b.state == nil {
		return ""
	}
	return *b.state
}

func (b *AddressMutationBuilder) GetStreetAddress() string {
	if b.streetAddress == nil {
		return ""
	}
	return *b.streetAddress
}

func (b *AddressMutationBuilder) GetZip() string {
	if b.zip == nil {
		return ""
	}
	return *b.zip
}

func (b *AddressMutationBuilder) GetViewer() viewer.ViewerContext {
	return b.builder.GetViewer()
}

func (b *AddressMutationBuilder) GetAddress() *models.Address {
	return b.address
}

// TODO rename from GetChangeset to Build()
// A Builder builds.
func (b *AddressMutationBuilder) GetChangeset() (ent.Changeset, error) {
	return b.builder.GetChangeset()
}

// Call Validate (should be Valid) at any point to validate that builder is valid
func (b *AddressMutationBuilder) Validate() error {
	return b.builder.Validate()
}

func (b *AddressMutationBuilder) buildFields() actions.FieldMap {
	m := make(map[string]bool)
	for _, f := range b.requiredFields {
		m[f] = true
	}

	fieldMap := b.GetFields()
	fields := make(actions.FieldMap)
	addField := func(key string, val interface{}) {
		fields[key] = &actions.FieldInfo{
			Field: fieldMap[key],
			Value: val,
		}
	}

	// Need to have Id fields be fine with Builder

	// if required, field is not nil or field explicitly set to nil, add the field
	if b.city != nil {
		addField("City", *b.city)
	} else if m["City"] { // nil but required
		addField("City", nil)
	}
	if b.country != nil {
		addField("Country", *b.country)
	} else if m["Country"] { // nil but required
		addField("Country", nil)
	}
	if b.residentNames != nil {
		addField("ResidentNames", *b.residentNames)
	} else if m["ResidentNames"] { // nil but required
		addField("ResidentNames", nil)
	}
	if b.state != nil {
		addField("State", *b.state)
	} else if m["State"] { // nil but required
		addField("State", nil)
	}
	if b.streetAddress != nil {
		addField("StreetAddress", *b.streetAddress)
	} else if m["StreetAddress"] { // nil but required
		addField("StreetAddress", nil)
	}
	if b.zip != nil {
		addField("Zip", *b.zip)
	} else if m["Zip"] { // nil but required
		addField("Zip", nil)
	}
	return fields
}

func (b *AddressMutationBuilder) ExistingEnt() ent.Entity {
	return b.builder.ExistingEnt()
}

func (b *AddressMutationBuilder) Entity() ent.Entity {
	return b.builder.Entity()
}

func (b *AddressMutationBuilder) GetOperation() ent.WriteOperation {
	return b.builder.GetOperation()
}

func (b *AddressMutationBuilder) GetPlaceholderID() string {
	return b.builder.GetPlaceholderID()
}

// GetFields returns the field configuration for this mutation builder
func (b *AddressMutationBuilder) GetFields() ent.FieldMap {
	return (&configs.AddressConfig{}).GetFields()
}

var _ ent.MutationBuilder = &AddressMutationBuilder{}

func (b *AddressMutationBuilder) setBuilder(v interface{}) {
	callback, ok := v.(AddressCallbackWithBuilder)
	if ok {
		callback.SetBuilder(b)
	}
}

// SetTriggers sets the builder on the triggers.
func (b *AddressMutationBuilder) SetTriggers(triggers []actions.Trigger) {
	b.builder.SetTriggers(triggers)
	for _, t := range triggers {
		b.setBuilder(t)
	}
}

// SetObservers sets the builder on the observers.
func (b *AddressMutationBuilder) SetObservers(observers []actions.Observer) {
	b.builder.SetObservers(observers)
	for _, o := range observers {
		b.setBuilder(o)
	}
}

// SetValidators sets the builder on validators.
func (b *AddressMutationBuilder) SetValidators(validators []actions.Validator) {
	b.builder.SetValidators(validators)
	for _, v := range validators {
		b.setBuilder(v)
	}
}

type AddressCallbackWithBuilder interface {
	SetBuilder(*AddressMutationBuilder)
}

type AddressMutationCallback struct {
	Builder *AddressMutationBuilder
}

func (callback *AddressMutationCallback) SetBuilder(b *AddressMutationBuilder) {
	callback.Builder = b
}
