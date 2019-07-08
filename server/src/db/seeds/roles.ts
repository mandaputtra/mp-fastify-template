import * as Knex from 'knex'

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export async function seed(knex: Knex): Promise < any > {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(() => {
      // Inserts seed entries
      return knex('roles').insert([{
        id: 1,
        name: 'admin'
      },
      {
        id: 2,
        name: 'ussual_user'
      },
      {
        id: 3,
        name: 'visitor'
      }
      ])
    })
}
