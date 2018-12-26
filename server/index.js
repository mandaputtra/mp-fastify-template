// TODO: some can be change to env varibles
const fastify = require("fastify")({
  logger: {
    prettyPrint: true,
    prettifier: require('pino-pretty')
  }
});

fastify.register(require('fastify-cors'), {
  origin: true
})
// Database registrastion
fastify.register(require("./plugins/db"), {
  url: "mongodb://localhost:27017/vfcms"
});
fastify.register(require('fastify-jwt'), {
  secret: 'supersecret',
  decode: { complete: true },
  sign: { algorithm: 'HS384' },
  maxAge: 100000,
})

// Route register here
// you can had all you routes at one file or separate
// its up to you
fastify.register(require("./services/root"));
fastify.register(require("./services/user"));

fastify.listen(3000, function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
