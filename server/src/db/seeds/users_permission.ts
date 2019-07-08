/* eslint-disable @typescript-eslint/camelcase */
import * as Knex from 'knex'

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex('users_permission').del()
    .then(() => {
      // Inserts seed entries
      return knex('users_permission').insert([
        { id: 1, role_id: 1, menu_id: 1 },
        { id: 2, role_id: 1, menu_id: 2 },
        { id: 3, role_id: 1, menu_id: 3 },
        { id: 4, role_id: 1, menu_id: 4 },
        { id: 5, role_id: 1, menu_id: 5 },
        { id: 6, role_id: 1, menu_id: 6 },
        { id: 7, role_id: 1, menu_id: 7 },
        { id: 8, role_id: 1, menu_id: 8 },
        { id: 9, role_id: 1, menu_id: 9 },
      ])
    })
}
