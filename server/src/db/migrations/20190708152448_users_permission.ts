import * as Knex from 'knex'

function up(knex: Knex) {
  return knex.schema.createTable('users_permission', (table) => {
    table.increments()
    table.integer('role_id').notNullable().references('id').inTable('roles')
    table.integer('menu_id').notNullable().references('id').inTable('menus')
  })
}

function down(knex: Knex) {
  return knex.schema.dropTable('users_permission')
}

exports.up = (knex: Knex) => up(knex)
exports.down = (knex: Knex) => down(knex)
