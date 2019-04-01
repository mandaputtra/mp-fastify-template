const menu = require('../menu')
const {to} = require('../../../plugins')
// Models
const {User} = require('../../../models')
const {Role} = require('../../../models')
const {getMenuName} = require('../../../utils')

async function loadmenu(req, reply) {
  // Get user role and appropriate user menu
  const token = req.session.jwt
  let uid = this.jwt.decode(token)
  uid = uid.payload.userId
  const [errUser, user] = await to(User.findOne({_id: uid}))
  if (errUser) {
    return reply.code(500).send({msg: 'User Not Found!'})
  }

  const [errRole, role] = await to(Role.findOne({name: user.role}))
  if (errRole || role.role.length === 0) {
    return reply.code(500).send({msg: 'Role Not Found!'})
  }

  if (user.role === 'superadmin') {
    return reply.code(200).send({
      msg: {
        allMenu: menu,
        menuName: getMenuName(Object.keys(menu))
      }
    })
  }

  const userScope = role.role
  const userMenu = {}
  // Lest calculate role here!
  for (let i = 0; i < Object.keys(menu).length; i++) {
    // I+1 indicates the menu number cause ya know our menu start at 1
    // not 0
    const key = Object.keys(menu)[Object.values(menu).indexOf(i + 1)]
    for (let j = 0; j < userScope.length; j++) {
      const element = userScope[j]
      if (element === i + 1) {
        userMenu[key] = i + 1
      }
    }
  }

  reply.code(200).send({
    msg: {
      allMenu: userMenu,
      menuName: getMenuName(Object.keys(userMenu))
    }
  })
}

module.exports.loadmenu = loadmenu
