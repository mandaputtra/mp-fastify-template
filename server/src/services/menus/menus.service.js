// Initializes the `menus` service on path `/menus`
const createService = require('feathers-mongoose');
const createModel = require('../../models/menus.model');
const hooks = require('./menus.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/menus', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('menus');

  service.hooks(hooks);
};
