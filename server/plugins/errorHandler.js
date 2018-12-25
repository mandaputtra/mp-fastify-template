const { to } = require('await-to-js');
const pe = require('parse-error');

module.exports.to = (promise) => {
  let err, res;
  [err, res] = await to(promise);
  if(err) return [pe(err)];
  return [null, res];
};