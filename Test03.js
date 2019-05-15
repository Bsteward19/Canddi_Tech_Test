var Knwl = require("C:/Users/brend/.node_modules_global/node_modules/knwl.js");
knwlInstance.register('dates', require('C:/Users/brend/.node_modules_global/node_modules/knwl.js/default_plugins/dates'));
var request = require('C:/Users/brend/.node_modules_global/node_modules/request');
var cheerios = require('C:/Users/brend/.node_modules_global/node_modules/cheerio');
console.log('We made it here before cheerios');
request('https://www.randomlists.com/uk-addresses', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    console.log(html);
  }
});
console.log('We made it here after cheerios');
knwlInstance.init(html); //currently not working. need to work out how to pass html to knwl
var dates = knwlInstance.get('dates');
var phone = knwlInstance.get('phones');
var links = knwlInstance.get('links');
var emails = knwlInstance.get('emails');
var places = knwlInstance.get('places');
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
