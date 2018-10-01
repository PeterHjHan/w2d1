var html = require('./https-functions');
var uppercase = require ('./functions/capticalcase');
var lowercase = require('./functions/lowercase')
var reverse = require('./functions/reverse')


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

// html.getHTML(requestOptions, uppercase.makeItUppercase);
// html.getHTML(requestOptions, lowercase.makeItLowerCase);
html.getHTML(requestOptions,reverse.makeItReverse);