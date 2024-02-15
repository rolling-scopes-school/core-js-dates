/** ********************************************************************************************
 *                                                                                             *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date       *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#date_object *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl       *
 *                                                                                             *
 ********************************************************************************************* */

/**
 * By the passed date returns the number of seconds elapsed since 00:00 01.01.1970.
 *
 * @param {string} date - date and time.
 * @return {number} milliseconds in timestamp.
 *
 * @example:
 * '01 Jan 1970 00:00:00 UTC' => 0
 * '04 Dec 1995 00:12:00 UTC' => 818035920000
 */
function dateToTimestamp(/* date */) {
  throw new Error('Not implemented');
}

/**
 * Returns the time in hh:mm:ss format from the received date.
 *
 * @param {Date} date - date.
 * @return {string} name of the day of the week.
 *
 * @example:
 * Date(2023, 5, 1, 8, 20, 55) => '08:20:55'
 * Date(2015, 10, 20, 23, 15, 1) => '23:15:01'
 */
function getTime(/* date */) {
  throw new Error('Not implemented');
}

/**
 * Returns the name of the day of the week for the passed date.
 *
 * @param {string} date - date and time.
 * @return {string} name of the day of the week.
 *
 * @example:
 * '01 Jan 1970 00:00:00 UTC' => 'Thursday'
 * '03 Dec 1995 00:12:00 UTC' => 'Sunday'
 * '2024-01-30T00:00:00.000Z' => 'Tuesday'
 */
function getDayName(/* date */) {
  throw new Error('Not implemented');
}

/**
 * Returns the date of the next Friday from a given date.
 *
 * @param {Date} date
 * @return {Date}
 *
 * @example:
 * Date('2024-02-03T00:00:00Z') => Date('2024-02-09T00:00:00Z')
 * Date('2024-02-13T00:00:00Z') => Date('2024-02-16T00:00:00Z')
 * Date('2024-02-16T00:00:00Z') => Date('2024-02-23T00:00:00Z')
 */
function getNextFriday(/* date */) {
  throw new Error('Not implemented');
}

/**
 * Returns the number of days in a given month and year.
 *
 * @param {number} month
 * @param {number} year
 * @return {number}
 *
 * @example:
 * 1, 2024 => 31
 * 2, 2024 => 29
 */
function getCountDaysInMonth(/* month, year */) {
  throw new Error('Not implemented');
}

/**
 * Returns the number of days between the start and end dates inclusive.
 *
 * @param {string} dateStart - start date of the period.
 * @param {string} dateEnd - end date of the period.
 * @return {number} count of days.
 *
 * @example:
 * '2024-02-01T00:00:00.000Z', '2024-02-02T00:00:00.000Z'  => 2
 * '2024-02-01T00:00:00.000Z', '2024-02-12T00:00:00.000Z'  => 12
 */
function getCountDaysOnPeriod(/* dateStart, dateEnd */) {
  throw new Error('Not implemented');
}

/**
 * Returns true if the date is within the range. Start and end dates inclusive.
 *
 * @typedef {{
 * start: string,
 * end: string
 * }} DatePeriod
 *
 * @param {string} date - date.
 * @param {DatePeriod} period - period.
 * @return {boolean} date is within the range.
 *
 * @example:
 * '2024-02-01', { start: '2024-02-02', end: '2024-03-02' } => false
 * '2024-02-02', { start: '2024-02-02', end: '2024-03-02' } => true
 * '2024-02-10', { start: '2024-02-02', end: '2024-03-02' } => true
 */
function isDateInPeriod(/* date, period */) {
  throw new Error('Not implemented');
}

/**
 * Returns the date formatted in 'dd/MM/YY, hh:mm:ss'.
 *
 * @param {string} date - date of the period.
 * @return {string} formatted date.
 *
 * @example:
 * '2024-02-01T15:00:00.000Z' => '2/1/2024, 3:00:00 PM'
 * '1999-01-05T02:20:00.000Z' => '1/5/1999, 2:20:00 AM'
 * '2010-12-15T22:59:00.000Z' => '12/15/2010, 10:59:00 PM'
 */
function formatDate(/* date */) {
  throw new Error('Not implemented');
}

/**
 * Returns the number of days off (weekends) in the month.
 *
 * @param {number} month - source month.
 * @param {number} year - source year.
 * @return {number} count weekends.
 *
 * @example:
 * 5, 2022 => 9
 * 12, 2023 => 10
 * 1, 2024 => 8
 */
function getCountWeekendsInMonth(/* month, year */) {
  throw new Error('Not implemented');
}

/**
 * Returns the week number of the year by date.
 *
 * @param {Date} date - date.
 * @return {number} week number.
 *
 * @example:
 * Date(2024, 0, 3) => 1
 * Date(2024, 0, 31) => 5
 * Date(2024, 1, 23) => 8
 */
function getWeekNumberByDate(/* date */) {
  throw new Error('Not implemented');
}

/**
 * Returns the date of the next Friday the 13th from a given date.
 * Friday the 13th is considered an unlucky day in some cultures.
 *
 * @param {Date} date
 * @return {Date}
 *
 * @example:
 * Date(2024, 0, 13) => Date(2024, 8, 13)
 * Date(2023, 1, 1) => Date(2023, 9, 13)
 */
function getNextFridayThe13th(/* date */) {
  throw new Error('Not implemented');
}

/**
 * Returns the neighborhood in which the specified data is located.
 *
 * @param {Date} date
 * @return {Date}
 *
 * @example:
 * Date(2024, 1, 13) => 1
 * Date(2024, 5, 1) => 2
 * Date(2024, 10, 10) => 4
 */
function getQuarter(/* date */) {
  throw new Error('Not implemented');
}

/**
 * Returns the employee's work schedule according to the specified parameters.
 * Start and end dates inclusive.
 *
 * @typedef {{
 * start: string,
 * end: string
 * }} DatePeriod
 *
 * @param {DatePeriod} period - dates start and end repiod.
 * @param {number} countWorkDays - number of working days.
 * @param {number} countOffDays - number of days off.
 * @return {Array<Date>} work schedule.
 *
 * @example:
 * { start: '01-01-2024', end: '15-01-2024' }, 1, 3 => ['01-01-2024', '05-01-2024', '09-01-2024', '13-01-2024']
 * { start: '01-01-2024', end: '10-01-2024' }, 1, 1 => ['01-01-2024', '03-01-2024', '05-01-2024', '07-01-2024', '09-01-2024']
 */
function getWorkSchedule(/* period, countWorkDays, countOffDays */) {
  throw new Error('Not implemented');
}

/**
 * Returns whether the year in the passed date is a leap year.
 * A leap year is a year that is divisible by 4, except if it is also divisible by 100 and not divisible by 400.
 *
 * @param {Date} date
 * @return {boolean}
 *
 * @example:
 * Date(2024, 2, 1) => true
 * Date(2022, 2, 1) => false
 * Date(2020, 2, 1) => true
 */
function isLeapYear(/* date */) {
  throw new Error('Not implemented');
}

module.exports = {
  dateToTimestamp,
  getTime,
  getDayName,
  getNextFriday,
  getCountDaysInMonth,
  getCountDaysOnPeriod,
  isDateInPeriod,
  formatDate,
  getCountWeekendsInMonth,
  getWeekNumberByDate,
  getNextFridayThe13th,
  getQuarter,
  getWorkSchedule,
  isLeapYear,
};
