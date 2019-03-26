const mongoose = require('mongoose')
// eslint-disable-next-line new-cap
const UsersSchema = mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true, index: true, lowercase: true, trim: true},
  password: {type: String, required: true},
  role: [
    {roleName: String},
    {roleNumber: String}
  ]},
{timestamps: true})

module.exports = mongoose.model('Users', UsersSchema)