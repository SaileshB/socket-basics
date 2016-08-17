var moment = require('moment');
var now = moment();


console.log(now.format('LT'));

console.log(now.format('X'));
console.log(now.valueOf());


var timestamp = 1471433766852;
var timestampmoment = moment.utc(timestamp);
console.log(timestampmoment.local().format('LT'));

//console.log(now.format( 'MMM Do YYYY, '+'LT'));