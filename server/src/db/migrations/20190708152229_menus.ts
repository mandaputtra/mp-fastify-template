import * as Knex from 'knex'

function up(knex: Knex) {
  return knex.schema.createTable('menus', (table) => {
    table.increments()
    table.string('name').notNullable()
  })
}

function down(knex: Knex) {
  return knex.schema.dropTable('menus')
}

exports.up = (knex: Knex) => up(knex)
exports.down = (knex: Knex) => down(knex)
