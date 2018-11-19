// menus-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const menus = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    menu_roles: [{
      roles_id: { type: Schema.Types.ObjectId, ref : 'Roles' },
      roles_name: { type:  String },
      create: { type: Boolean },
      delete: { type: Boolean },
      update: { type: Boolean },
      read: { tye: Boolean },
    }]
  }, {
    timestamps: true
  });

  return mongooseClient.model('menus', menus);
};
