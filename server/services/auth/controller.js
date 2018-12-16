"use strict";

// Remember to check post or get request, always look
// at the routes in index

async function login(request, reply) {
  return this.someSupport();
}
module.exports.login = login;

async function register(request, reply) {
  reply.send({ hello: "world" });
}
module.exports.register = register;
