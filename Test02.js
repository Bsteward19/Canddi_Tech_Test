var Knwl = require("C:/Users/brend/.node_modules_global/node_modules/knwl.js");
var knwlInstance = new Knwl('english');
knwlInstance.register('dates', require('C:/Users/brend/.node_modules_global/node_modules/knwl.js/default_plugins/dates'));
knwlInstance.init("This is a long string. Written on the 2nd of June, of 2015. Sent from Test@Gmail.com, John@yahoo.com. Found at Google.com. Contact on 07814 91214. Company located near 24 Caddi street, Liverpool, Lancashire. LA9 187 ");
var dates = knwlInstance.get('dates');
var phone = knwlInstance.get('phones');
var links = knwlInstance.get('links');
var emails = knwlInstance.get('emails');
var places = knwlInstance.get('places');
knwlInstance.init("This is a long string. Written on the 2nd of June, of 2015. Sent from Test@Gmail.com, John@yahoo.com. Found at Google.com. Contact on 07814 91214. Company located near 24 Caddi street, Liverpool, Lancashire. LA9 187 ");
knwlInstance.get('dates');
knwlInstance.get('phones');
knwlInstance.get('links');
knwlInstance.get('emails');
knwlInstance.get('places');
console.log(dates);
console.log(phone);
console.log(links);
console.log(emails);
console.log(places);
