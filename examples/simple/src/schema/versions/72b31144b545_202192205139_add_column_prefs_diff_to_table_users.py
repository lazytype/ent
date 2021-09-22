# Code generated by github.com/lolopinto/ent/ent, DO NOT edit.

"""add column prefs_diff to table users

Revision ID: 72b31144b545
Revises: 157e5cd0c749
Create Date: 2021-09-22 00:51:39.867008+00:00

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '72b31144b545'
down_revision = '157e5cd0c749'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column(
        'prefs_diff', postgresql.JSON(astext_type=sa.Text()), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'prefs_diff')
    # ### end Alembic commands ###
