import * as Knex from 'knex'

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex('menus').del()
    .then(() => {
      // Inserts seed entries
      return knex('menus').insert([
        { id: 1, name: 'VIEW_DASHBOARD' },
        { id: 2, name: 'VIEW_USER' },
        { id: 3, name: 'ADD_USER' },
        { id: 4, name: 'DELETE_USER' },
        { id: 5, name: 'EDIT_USER' },
        { id: 6, name: 'VIEW_PERMISSION' },
        { id: 7, name: 'ADD_PERMISSION' },
        { id: 8, name: 'DELETE_PERMISSION' },
        { id: 9, name: 'EDIT_PERMISSION' }
      ])
    })
}
