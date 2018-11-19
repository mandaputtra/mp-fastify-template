const assert = require('assert');
const app = require('../../src/app');

describe('\'manage\' service', () => {
  it('registered the service', () => {
    const service = app.service('manage');

    assert.ok(service, 'Registered the service');
  });
});
