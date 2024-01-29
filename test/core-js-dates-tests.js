const assert = require('assert');
const tasks = require('../src/core-js-dates-tasks');
const forbidden = require('../extensions/forbidden');
it.optional = require('../extensions/it-optional');

describe('core-js-dates', () => {
  it.optional(
    'dateToTimestamp should return a initial date in milliseconds timestamp',
    () => {
      assert.equal(tasks.dateToTimestamp('01 Jan 1970 00:00:00 GMT'), 0);
      assert.equal(
        tasks.dateToTimestamp('04 Dec 1995 00:12:00 GMT'),
        818035920000
      );
      assert.equal(
        forbidden.isCommented(tasks.dateToTimestamp),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );
});
