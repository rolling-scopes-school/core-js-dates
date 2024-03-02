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
        tasks.dateToTimestamp('04 May 1980 00:12:00 UTC'),
        326247120000
      );
      assert.equal(
        tasks.dateToTimestamp('04 Jun 1975 23:15:00 UTC'),
        171155700000
      );
      assert.equal(
        tasks.dateToTimestamp('04 Aug 1998 18:12:30 UTC'),
        902254350000
      );
      assert.equal(
        tasks.dateToTimestamp('01 Jan 1900 00:00:00 UTC'),
        -2208988800000
      );
      assert.equal(
        tasks.dateToTimestamp('01 Dec 2500 00:00:00 UTC'),
        16754083200000
      );
      assert.equal(
        forbidden.isCommented(tasks.dateToTimestamp),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );

  it.optional(
    'getTime should returns the time in hh:mm:ss format from the received date',
    () => {
      assert.equal(tasks.getTime(new Date(2023, 5, 1, 8, 20, 55)), '08:20:55');
      assert.equal(
        tasks.getTime(new Date(2015, 10, 20, 23, 15, 1)),
        '23:15:01'
      );
      assert.equal(tasks.getTime(new Date(2023, 1, 1, 1, 20, 55)), '01:20:55');
      assert.equal(tasks.getTime(new Date(2022, 2, 4, 10, 35, 55)), '10:35:55');
      assert.equal(tasks.getTime(new Date(2021, 3, 6, 11, 20, 30)), '11:20:30');
      assert.equal(tasks.getTime(new Date(2020, 4, 11, 23, 0, 0)), '23:00:00');
      assert.equal(tasks.getTime(new Date(2010, 5, 12, 12, 0, 15)), '12:00:15');
      assert.equal(tasks.getTime(new Date(2001, 6, 19, 8, 6, 45)), '08:06:45');
      assert.equal(tasks.getTime(new Date(2005, 7, 23, 3, 4, 5)), '03:04:05');
      assert.equal(tasks.getTime(new Date(1970, 8, 26, 0, 0, 0)), '00:00:00');
      assert.equal(
        forbidden.isCommented(tasks.getTime),
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
      assert.equal(tasks.getDayName('2024-01-30T00:10:40.000Z'), 'Tuesday');
      assert.equal(tasks.getDayName('2023-05-30T05:20:30.000Z'), 'Tuesday');
      assert.equal(tasks.getDayName('2022-07-30T10:30:20.000Z'), 'Saturday');
      assert.equal(tasks.getDayName('2021-12-30T15:40:10.000Z'), 'Thursday');
      assert.equal(tasks.getDayName('01 Jan 1970 05:50:00 UTC'), 'Thursday');
      assert.equal(tasks.getDayName('15 Feb 1980 10:40:10 UTC'), 'Friday');
      assert.equal(tasks.getDayName('20 May 1990 05:30:15 UTC'), 'Sunday');
      assert.equal(tasks.getDayName('25 Jun 2030 20:20:35 UTC'), 'Tuesday');
      assert.equal(
        forbidden.isCommented(tasks.getDayName),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );

  it.optional(
    'getNextFriday should return the date of the next Friday from a given date',
    () => {
      assert.deepEqual(
        tasks.getNextFriday(new Date('2024-02-03T00:00:00Z')),
        new Date('2024-02-09T00:00:00Z')
      );
      assert.deepEqual(
        tasks.getNextFriday(new Date('2024-02-13T00:00:00Z')),
        new Date('2024-02-16T00:00:00Z')
      );
      assert.deepEqual(
        tasks.getNextFriday(new Date('2024-02-16T00:00:00Z')),
        new Date('2024-02-23T00:00:00Z')
      );
      assert.equal(
        forbidden.isCommented(tasks.getNextFriday),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );

  it.optional(
    'getCountDaysInMonth should returns the number of days in a given month and year',
    () => {
      assert.deepEqual(tasks.getCountDaysInMonth(1, 2024), 31);
      assert.deepEqual(tasks.getCountDaysInMonth(2, 2024), 29);
      assert.deepEqual(tasks.getCountDaysInMonth(3, 2023), 31);
      assert.deepEqual(tasks.getCountDaysInMonth(4, 2023), 30);
      assert.deepEqual(tasks.getCountDaysInMonth(5, 2022), 31);
      assert.deepEqual(tasks.getCountDaysInMonth(6, 2022), 30);
      assert.deepEqual(tasks.getCountDaysInMonth(7, 2021), 31);
      assert.deepEqual(tasks.getCountDaysInMonth(8, 2021), 31);
      assert.equal(
        forbidden.isCommented(tasks.getCountDaysInMonth),
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
          '2024-02-02T00:00:00.000Z'
        ),
        45
      );
      assert.equal(
        forbidden.isCommented(tasks.getCountDaysOnPeriod),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );

  it.optional(
    'isDateInPeriod should returns true if the date is within the range',
    () => {
      assert.equal(
        tasks.isDateInPeriod('2024-02-01', {
          start: '2024-02-02',
          end: '2024-03-02',
        }),
        false,
        '2024-02-01 is not within the range of 2024-02-02 to 2024-03-02'
      );
      assert.equal(
        tasks.isDateInPeriod('2023-01-01', {
          start: '2021-02-02',
          end: '2022-01-02',
        }),
        false,
        '2023-01-01 is not within the range of 2021-02-02 to 2022-01-02'
      );
      assert.equal(
        tasks.isDateInPeriod('2000-05-01', {
          start: '2015-01-01',
          end: '2023-01-01',
        }),
        false,
        '2000-05-01 is not within the range of 2015-01-01 to 2023-01-01'
      );
      assert.equal(
        tasks.isDateInPeriod('1960-01-01', {
          start: '1965-01-01',
          end: '1985-01-01',
        }),
        false,
        ' is not within the range of  to '
      );
      assert.equal(
        tasks.isDateInPeriod('2024-02-02', {
          start: '2024-02-02',
          end: '2024-03-02',
        }),
        true,
        '2024-02-02 is within the range of 2024-02-02 to 2024-03-02'
      );
      assert.equal(
        tasks.isDateInPeriod('2024-02-10', {
          start: '2024-02-02',
          end: '2024-03-02',
        }),
        true,
        '2024-02-10 is within the range of 2024-02-02 to 2024-03-02'
      );
      assert.equal(
        tasks.isDateInPeriod('1999-12-31', {
          start: '1998-12-31',
          end: '2000-01-01',
        }),
        true,
        '1999-12-31 is within the range of 1998-12-31 to 2000-01-01'
      );
      assert.equal(
        tasks.isDateInPeriod('1970-01-01', {
          start: '1969-01-01',
          end: '1971-01-01',
        }),
        true,
        '1970-01-01 is within the range of 1969-01-01 to 1971-01-01'
      );
      assert.equal(
        tasks.isDateInPeriod('1900-01-01', {
          start: '1899-12-31',
          end: '1900-01-02',
        }),
        true,
        '1900-01-01 is within the range of 1899-12-31 to 1900-01-02'
      );
      assert.equal(
        forbidden.isCommented(tasks.isDateInPeriod),
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
        '2/1/2024, 3:00:00 PM'
      );
      assert.equal(
        tasks.formatDate('1999-01-05T02:20:00.000Z'),
        '1/5/1999, 2:20:00 AM'
      );
      assert.equal(
        tasks.formatDate('2010-12-15T22:59:00.000Z'),
        '12/15/2010, 10:59:00 PM'
      );
      assert.equal(
        tasks.formatDate('1970-12-14T05:30:05.000Z'),
        '12/14/1970, 5:30:05 AM'
      );
      assert.equal(
        tasks.formatDate('1980-05-08T12:59:59.000Z'),
        '5/8/1980, 12:59:59 PM'
      );
      assert.equal(
        tasks.formatDate('2030-01-01T23:59:59.000Z'),
        '1/1/2030, 11:59:59 PM'
      );
      assert.equal(
        forbidden.isCommented(tasks.formatDate),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );

  it.optional(
    'getCountWeekendsInMonth should returns the number of days off (weekends) in the month',
    () => {
      assert.equal(tasks.getCountWeekendsInMonth(5, 2022), 9);
      assert.equal(tasks.getCountWeekendsInMonth(12, 2023), 10);
      assert.equal(tasks.getCountWeekendsInMonth(1, 2024), 8);
      assert.equal(tasks.getCountWeekendsInMonth(5, 2024), 8);
      assert.equal(tasks.getCountWeekendsInMonth(6, 2023), 8);
      assert.equal(tasks.getCountWeekendsInMonth(7, 2023), 10);
      assert.equal(tasks.getCountWeekendsInMonth(8, 2020), 10);
      assert.equal(tasks.getCountWeekendsInMonth(9, 2020), 8);
      assert.equal(tasks.getCountWeekendsInMonth(10, 2015), 9);
      assert.equal(tasks.getCountWeekendsInMonth(11, 2000), 8);
      assert.equal(tasks.getCountWeekendsInMonth(12, 1990), 10);
      assert.equal(
        forbidden.isCommented(tasks.getCountWeekendsInMonth),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );

  it.optional(
    'getWeekNumberByDate should return the week number of the year by date',
    () => {
      assert.equal(tasks.getWeekNumberByDate(new Date(2024, 0, 3)), 1);
      assert.equal(tasks.getWeekNumberByDate(new Date(2024, 0, 31)), 5);
      assert.equal(tasks.getWeekNumberByDate(new Date(2024, 1, 23)), 8);
      assert.equal(tasks.getWeekNumberByDate(new Date(2023, 1, 23)), 9);
      assert.equal(tasks.getWeekNumberByDate(new Date(2022, 2, 22)), 13);
      assert.equal(tasks.getWeekNumberByDate(new Date(2021, 3, 21)), 17);
      assert.equal(tasks.getWeekNumberByDate(new Date(2020, 4, 20)), 21);
      assert.equal(tasks.getWeekNumberByDate(new Date(2019, 5, 23)), 25);
      assert.equal(tasks.getWeekNumberByDate(new Date(2018, 6, 22)), 29);
      assert.equal(tasks.getWeekNumberByDate(new Date(2017, 7, 21)), 35);
      assert.equal(tasks.getWeekNumberByDate(new Date(2016, 8, 20)), 39);
      assert.equal(tasks.getWeekNumberByDate(new Date(2015, 9, 23)), 43);
      assert.equal(tasks.getWeekNumberByDate(new Date(1950, 10, 22)), 48);
      assert.equal(
        forbidden.isCommented(tasks.getWeekNumberByDate),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );

  it.optional(
    'getNextFridayThe13th should return the date of the next Friday the 13th from a given date',
    () => {
      assert.deepEqual(
        tasks.getNextFridayThe13th(new Date(2024, 0, 1)),
        new Date(2024, 8, 13)
      );
      assert.deepEqual(
        tasks.getNextFridayThe13th(new Date(2023, 0, 1)),
        new Date(2023, 0, 13)
      );
      assert.deepEqual(
        tasks.getNextFridayThe13th(new Date(2022, 0, 1)),
        new Date(2022, 4, 13)
      );
      assert.deepEqual(
        tasks.getNextFridayThe13th(new Date(2021, 0, 1)),
        new Date(2021, 7, 13)
      );
      assert.equal(
        forbidden.isCommented(tasks.getNextFridayThe13th),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );

  it.optional(
    'getQuarter should return the neighborhood in which the specified data is located',
    () => {
      assert.equal(tasks.getQuarter(new Date(2024, 1, 13)), 1);
      assert.equal(tasks.getQuarter(new Date(2024, 5, 1)), 2);
      assert.equal(tasks.getQuarter(new Date(2024, 10, 10)), 4);
      assert.equal(tasks.getQuarter(new Date(2024, 12, 10)), 1);
      assert.equal(
        forbidden.isCommented(tasks.getQuarter),
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
        ['01-01-2024', '05-01-2024', '09-01-2024', '13-01-2024']
      );
      assert.deepEqual(
        tasks.getWorkSchedule({ start: '01-01-2024', end: '10-01-2024' }, 1, 1),
        ['01-01-2024', '03-01-2024', '05-01-2024', '07-01-2024', '09-01-2024']
      );
      assert.deepEqual(
        tasks.getWorkSchedule({ start: '01-01-2024', end: '29-02-2024' }, 2, 2),
        [
          '01-01-2024',
          '02-01-2024',
          '05-01-2024',
          '06-01-2024',
          '09-01-2024',
          '10-01-2024',
          '13-01-2024',
          '14-01-2024',
          '17-01-2024',
          '18-01-2024',
          '21-01-2024',
          '22-01-2024',
          '25-01-2024',
          '26-01-2024',
          '29-01-2024',
          '30-01-2024',
          '02-02-2024',
          '03-02-2024',
          '06-02-2024',
          '07-02-2024',
          '10-02-2024',
          '11-02-2024',
          '14-02-2024',
          '15-02-2024',
          '18-02-2024',
          '19-02-2024',
          '22-02-2024',
          '23-02-2024',
          '26-02-2024',
          '27-02-2024',
        ]
      );
      assert.deepEqual(
        tasks.getWorkSchedule({ start: '01-01-2024', end: '31-03-2024' }, 3, 2),
        [
          '01-01-2024',
          '02-01-2024',
          '03-01-2024',
          '06-01-2024',
          '07-01-2024',
          '08-01-2024',
          '11-01-2024',
          '12-01-2024',
          '13-01-2024',
          '16-01-2024',
          '17-01-2024',
          '18-01-2024',
          '21-01-2024',
          '22-01-2024',
          '23-01-2024',
          '26-01-2024',
          '27-01-2024',
          '28-01-2024',
          '31-01-2024',
          '01-02-2024',
          '02-02-2024',
          '05-02-2024',
          '06-02-2024',
          '07-02-2024',
          '10-02-2024',
          '11-02-2024',
          '12-02-2024',
          '15-02-2024',
          '16-02-2024',
          '17-02-2024',
          '20-02-2024',
          '21-02-2024',
          '22-02-2024',
          '25-02-2024',
          '26-02-2024',
          '27-02-2024',
          '01-03-2024',
          '02-03-2024',
          '03-03-2024',
          '06-03-2024',
          '07-03-2024',
          '08-03-2024',
          '11-03-2024',
          '12-03-2024',
          '13-03-2024',
          '16-03-2024',
          '17-03-2024',
          '18-03-2024',
          '21-03-2024',
          '22-03-2024',
          '23-03-2024',
          '26-03-2024',
          '27-03-2024',
          '28-03-2024',
          '31-03-2024',
        ]
      );
      assert.equal(
        forbidden.isCommented(tasks.getWorkSchedule),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );

  it.optional(
    'isLeapYear should return whether the year in the passed date is a leap year',
    () => {
      assert.equal(
        tasks.isLeapYear(new Date(2024, 2, 1)),
        true,
        '2024 is a leap year'
      );
      assert.equal(
        tasks.isLeapYear(new Date(2022, 2, 1)),
        false,
        '2022 is not a leap year'
      );
      assert.equal(
        tasks.isLeapYear(new Date(2020, 2, 1)),
        true,
        '2020 is a leap year'
      );
      assert.equal(
        tasks.isLeapYear(new Date(1904, 2, 1)),
        true,
        '1904 is a leap year'
      );
      assert.equal(
        tasks.isLeapYear(new Date(1960, 2, 1)),
        true,
        '1960 is a leap year'
      );
      assert.equal(
        tasks.isLeapYear(new Date(1980, 2, 1)),
        true,
        '1980 is a leap year'
      );
      assert.equal(
        tasks.isLeapYear(new Date(2000, 2, 1)),
        true,
        '2000 is a leap year'
      );
      assert.equal(
        tasks.isLeapYear(new Date(1915, 2, 1)),
        false,
        '1915 is not a leap year'
      );
      assert.equal(
        tasks.isLeapYear(new Date(1965, 2, 1)),
        false,
        '1965 is not a leap year'
      );
      assert.equal(
        tasks.isLeapYear(new Date(1998, 2, 1)),
        false,
        '1998 is not a leap year'
      );
      assert.equal(
        tasks.isLeapYear(new Date(2010, 2, 1)),
        false,
        '2010 is not a leap year'
      );
      assert.equal(
        forbidden.isCommented(tasks.isLeapYear),
        false,
        `Be sure to remove comments from the final solution`
      );
    }
  );
});
