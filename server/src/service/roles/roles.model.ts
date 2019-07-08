import { Model } from 'objection'

export default class Roles extends Model {

  private readonly id!: number
  private name?: string

  // table name
  public static tableName = 'roles'

  public static jsonSchema = {
    type: 'object',
    required: ['name'],
    properties: {
      id: { type: 'integer' },
      name: { type: 'string', minLength: 1, maxLength: 255 }
    }
  }
}
