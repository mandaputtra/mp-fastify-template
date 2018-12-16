"use strict";

const path = require("path");
const AutoLoad = require("fastify-autoload");
const mongoose = require("mongoose");

module.exports = function(fastify, opts, next) {
  // Place here your custom code!

  fastify.register(require("fastify-cors"));

  // connect and get options to databse
  mongoose.connect(
    "mongodb://localhost:27017/vfcms",
    {
      useNewUrlParser: true
    }
  );
  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts)
  });

  // This loads all plugins defined in services
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "services"),
    options: Object.assign({}, opts)
  });

  // Make sure to call next when done
  next();
};
