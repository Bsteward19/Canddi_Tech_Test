var Knwl = require("C:/Users/brend/.node_modules_global/node_modules/knwl.js");
var knwlInstance = new Knwl('english');
knwlInstance.register('dates', require('C:/Users/brend/.node_modules_global/node_modules/knwl.js/default_plugins/dates'));
knwlInstance.init("This is a long string. Written on the 2nd of June, of 2015.");
var dates = knwlInstance.get('dates');
knwlInstance.init("This is a long string. Written on the 2nd of June, of 2015.");
knwlInstance.get('dates');
console.log(dates);
