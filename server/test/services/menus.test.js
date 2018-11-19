const assert = require('assert');
const app = require('../../src/app');

describe('\'menus\' service', () => {
  it('registered the service', () => {
    const service = app.service('menus');

    assert.ok(service, 'Registered the service');
  });
});
