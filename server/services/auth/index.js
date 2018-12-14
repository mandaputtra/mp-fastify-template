"use strict";

const AuthController = require("./controller");

module.exports = async function(fastify, opts) {
  fastify.route({
    method: "GET",
    url: "/login",
    handler: AuthController.login
  });

  fastify.route({
    method: "GET",
    url: "/register",
    handler: (req, res) => {
      fastify.someSupport();
    }
  });
};
