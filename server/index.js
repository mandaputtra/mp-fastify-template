const fastify = require("fastify")({
  logger: {
    prettyPrint: true,
    prettifier: require('pino-pretty')
  }
});

fastify.register(require("./plugins/db"), {
  url: "mongodb://localhost:27017/vfcms"
});

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
