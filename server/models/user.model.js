const mongoose = require("mongoose");

let UsersSchema = mongoose.Schema(
  {
    name: { type: String, required: true }
  },
  { timestamps: true }
);

let User = module.exports = mongoose.model("Users", UsersSchema);
