// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient
  const users = new mongooseClient.Schema({

    email: {type: String, unique: true, lowercase: true},
    password: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    roles: { type: Schema.Types.ObjectId, ref : 'Roles' },

  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
