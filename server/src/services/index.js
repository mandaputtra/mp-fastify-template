const users = require('./users/users.service.js');
const roles = require('./roles/roles.service.js');
const menus = require('./menus/menus.service.js');
const manage = require('./manage/manage.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(roles);
  app.configure(menus);
  app.configure(manage);
};
