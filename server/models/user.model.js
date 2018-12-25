const mongoose = require("mongoose");

let UsersSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: [
      { roleName: String },
      { roleNumber: String },
    ]
  },
  { timestamps: true }
);

let User = module.exports = mongoose.model("Users", UsersSchema);