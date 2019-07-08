/* eslint-disable @typescript-eslint/camelcase */
import * as Knex from 'knex'
import * as Argon from 'argon2'

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(async () => {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          email: 'vfcms-github@admin.com',
          password: await Argon.hash('vfcms-github@admin.com'),
          first_name:  'VF',
          last_name: 'CMS',
          role: 1
        },
      ])
    })
}
