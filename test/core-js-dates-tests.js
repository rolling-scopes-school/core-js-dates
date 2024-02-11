const assert = require('assert');
const tasks = require('../src/core-js-dates-tasks');
const forbidden = require('../extensions/forbidden');
it.optional = require('../extensions/it-optional');

describe('core-js-dates', () => {
  it.optional(
    'dateToTimestamp should return a initial date in milliseconds timestamp',
    () => {
      assert.equal(tasks.dateToTimestamp('01 Jan 1970 00:00:00 UTC'), 0);
      assert.equal(
        tasks.dateToTimestamp('04 Dec 1995 00:12:00 UTC'),
        818035920000
      );
      assert.equal(
        forbidden.isCommented(tasks.dateToTimestamp),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );

  it.optional(
    'getDayName should returns the name of the day of the week for the passed date',
    () => {
      assert.equal(tasks.getDayName('01 Jan 1970 00:00:00 UTC'), 'Thursday');
      assert.equal(tasks.getDayName('03 Dec 1995 00:12:00 UTC'), 'Sunday');
      assert.equal(tasks.getDayName('2024-01-30T00:00:00.000Z'), 'Tuesday');
      assert.equal(
        forbidden.isCommented(tasks.getDayName),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );

  it.optional(
    'getCountDaysOnPeriod should the number of days between the start and end dates inclusive',
    () => {
      assert.equal(
        tasks.getCountDaysOnPeriod(
          '2024-02-01T00:00:00.000Z',
          '2024-02-02T00:00:00.000Z'
        ),
        2
      );
      assert.equal(
        tasks.getCountDaysOnPeriod(
          '2024-02-01T00:00:00.000Z',
          '2024-02-12T00:00:00.000Z'
        ),
        12
      );
      assert.equal(
        tasks.getCountDaysOnPeriod(
          '2024-02-01T00:00:00.000Z',
          '2024-03-01T00:00:00.000Z'
        ),
        30
      );
      assert.equal(
        tasks.getCountDaysOnPeriod(
          '2023-12-20T00:00:00.000Z',
          '2024-02-01T00:00:00.000Z'
        ),
        44
      );
      assert.equal(
        forbidden.isCommented(tasks.getCountDaysOnPeriod),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );

  it.optional(
    'hasDateInPeriod should returns true if the date is within the range',
    () => {
      assert.equal(
        tasks.hasDateInPeriod('2024-02-01', {
          start: '2024-02-02',
          end: '2024-03-02',
        }),
        false,
        '2024-02-01 is not within the range of 2024-02-02 to 2024-03-02'
      );
      assert.equal(
        tasks.hasDateInPeriod('2024-02-02', {
          start: '2024-02-02',
          end: '2024-03-02',
        }),
        true,
        '2024-02-02 is within the range of 2024-02-02 to 2024-03-02'
      );
      assert.equal(
        tasks.hasDateInPeriod('2024-02-10', {
          start: '2024-02-02',
          end: '2024-03-02',
        }),
        true,
        '2024-02-10 is within the range of 2024-02-02 to 2024-03-02'
      );
      assert.equal(
        forbidden.isCommented(tasks.hasDateInPeriod),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );

  it.optional(
    "formatDate should return the date formatted in 'dd/MM/YY, hh:mm:ss'",
    () => {
      assert.equal(
        tasks.formatDate('2024-02-01T15:00:00.000Z'),
        '01/02/24 15:00:00'
      );
      assert.equal(
        tasks.formatDate('1999-01-05T02:20:00.000Z'),
        '05/01/99 02:20:00'
      );
      assert.equal(
        tasks.formatDate('2010-12-15T22:59:00.000Z'),
        '15/12/10 22:59:00'
      );
      assert.equal(
        forbidden.isCommented(tasks.formatDate),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );

  it.optional(
    'formatDate should returns the number of days off (weekends) in the month',
    () => {
      assert.equal(tasks.getCountWeekendsInMonth(5, 2022), 9);
      assert.equal(tasks.getCountWeekendsInMonth(12, 2023), 10);
      assert.equal(tasks.getCountWeekendsInMonth(1, 2024), 8);
      assert.equal(
        forbidden.isCommented(tasks.getCountWeekendsInMonth),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );

  it.optional(
    'getWorkSchedule should returns work schedule according to the specified parameters',
    () => {
      assert.deepEqual(
        tasks.getWorkSchedule({ start: '01-01-2024', end: '15-01-2024' }, 1, 3),
        ['01-01-2024', '05-01-2024', '09-01-2024', '15-01-2024']
      );
      assert.equal(
        forbidden.isCommented(tasks.getWorkSchedule),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );
});
