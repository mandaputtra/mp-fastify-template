const mongoose = require('mongoose')
// eslint-disable-next-line new-cap
const RoleSchema = mongoose.Schema({
  roleName: {type: String, required: true, index: true},
  roleScope: [] // 1: get 2: update 3: delete 4: { up to you }
}, {timestamp: true})

module.exports = mongoose.model('Users', RoleSchema)

/* Depends on what you set a role can access on what menu :

imagine like this :

USER_DELETE_MENU: 1
USER_ADD_MENU: 2
DELETE_ALL_USER: 4

and your role can be like this.

role_name: ussual_user
role_scope: [1, 4]

*/
