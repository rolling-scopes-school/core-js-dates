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
function hasDateInPeriod(/* date, period */) {
  throw new Error('Not implemented');
}

/**
 * Returns the date formatted in 'dd/MM/YY, hh:mm:ss'.
 *
 * @param {string} date - date of the period.
 * @return {string} formatted date.
 *
 * @example:
 * '2024-02-01T15:00:00.000Z' => '01/02/24, 15:00:00'
 * '1999-01-05T02:20:00.000Z' => '05/01/99, 02:20:00'
 * '2010-12-15T22:59:00.000Z' => '15/12/10, 22:59:00'
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
 * Returns the employee's work schedule according to the specified parameters.
 * If the date falls on a weekend day, it should be moved to Monday.
 * Start and end dates inclusive.
 *
 * @typedef {{
 * start: string,
 * end: string
 * }} DatePeriod
 *
 * @param {DatePeriod} period - source year.
 * @param {number} countWorkDays - number of working days.
 * @param {number} countOffDays - number of days off.
 * @return {Array<Date>} work schedule.
 *
 * @example:
 * { start: '01-01-2024', end: '15-01-2024' }, 1, 3 => ['01-01-2024', '05-01-2024', '09-01-2024', '15-01-2024']
 */
function getWorkSchedule(/* period, countWorkDays, countOffDays */) {
  throw new Error('Not implemented');
}

module.exports = {
  dateToTimestamp,
  getDayName,
  getCountDaysOnPeriod,
  hasDateInPeriod,
  formatDate,
  getCountWeekendsInMonth,
  getWorkSchedule,
};
