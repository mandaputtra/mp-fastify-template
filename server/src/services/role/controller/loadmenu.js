const menu = require('../menu')

async function loadmenu(req, reply) {
  reply.code(200).send(menu)
}

module.exports.loadmenu = loadmenu
