/* eslint-disable @typescript-eslint/camelcase */
import { Model } from 'objection'
import { RolesModel } from '../roles/index'
import { join } from 'path'
import { servicePath } from '../../utils'

export default class Users extends Model {

  private readonly id!: number
  private email?: string
  private first_name?: string
  private last_name?: string
  private password?: string
  private role?: number
  private created_at?: Date
  private updated_at?: Date

  // Eager Relationships
  static personRole?: RolesModel

  public static tableName = 'users'

  public static jsonSchema = {
    type: 'object',
    required: ['email', 'password', 'first_name', 'last_name'],
    properties: {
      id: { type: 'integer' },
      email: { type: 'string', minLength: 1, maxLength: 255 },
      password: { type: 'string', minLength: 1, maxLength: 255 },
      first_name: { type: 'string', minLength: 1, maxLength: 255 },
      last_name: { type: 'string', minLength: 1, maxLength: 255 },
      updated_at: { type: 'date' },
      created_at: { type: 'date' },
      role: { type: ['integer', 'null'] }
    }
  }

  public static relationMappings = {
    owner: {
      relation: Model.BelongsToOneRelation,
      // The related model. This can be either a Model subclass constructor or an
      // absolute file path to a module that exports one. We use the file path version
      // here to prevent require loops.
      modelClass: join(servicePath, 'users/users.model.ts'),
      join: {
        from: 'users.role',
        to: 'roles.id'
      }
    }
  }
}
