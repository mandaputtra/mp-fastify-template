// Validation for this are done in schema,
// you sure can double check all validation in model too, but i think that
//  not resource wise.

const mongoose = require('mongoose')
// eslint-disable-next-line new-cap
const UsersSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      lowercase: true,
      trim: true
    },
    password: { type: String, required: true, minLength: 8 },
    role: { type: String, default: 'ussual_user' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Users', UsersSchema)
