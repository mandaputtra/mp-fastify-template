
/* eslint-disable prefer-const */
/* eslint-disable max-statements-per-line */

const {to} = require('await-to-js')
const pe = require('parse-error')

module.exports.to = async promise => {
  let err; let res;
  [err, res] = await to(promise)
  if (err) {
    return [pe(err)]
  }

  return [null, res]
}
