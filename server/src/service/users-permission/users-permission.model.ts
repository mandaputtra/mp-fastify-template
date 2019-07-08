import { Model } from 'objection'
import { RolesModel } from '../roles'
import { MenusModel } from '../menus'
import { join } from 'path'
import { servicePath } from '../../utils'

export default class Menu extends Model {

  private readonly id!: number
  private role_id?: number
  private menu_id?: number

  private role?: RolesModel[]
  private menu?: MenusModel[]

  // table name
  public static tableName = 'menus'

  // json schema only for validation
  public static jsonSchema = {
    type: 'object',
    required: ['name'],
    properties: {
      id: { type: 'integer' },
      name: { type: 'string', minLength: 1, maxLength: 255 }
    }
  }

  // eager relationship
  public static relationMappings = {
    role: {
      relation: Model.BelongsToOneRelation,
      modelClass: join(servicePath, 'roles/roles.model.ts'),
      join: {
        from: 'menus.role_id',
        to: 'roles.id'
      }
    },
    menu: {
      relation: Model.BelongsToOneRelation,
      modelClass: join(servicePath, 'menus/menus.model.ts'),
      join: {
        from: 'menus.menu_id',
        to: 'menus.id'
      }
    }
  }
}
