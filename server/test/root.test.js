/* eslint-disable no-undef */
const tap = require('tap')
const buildFastify = require('../www')

tap.test('Get / root instance', t => {
  const fastify = buildFastify()
  t.tearDown(() => fastify.close())
  fastify.inject(
    {
      method: 'GET',
      url: '/'
    },
    (err, response) => {
      t.error(err)
      t.strictEqual(response.statusCode, 200)
      t.strictEqual(
        response.headers['content-type'],
        'application/json; charset=utf-8'
      )
      t.deepEqual(JSON.parse(response.payload), { api: 'ready' })
    }
  )
})
