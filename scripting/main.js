var html = require('./https-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

html.getHTML(requestOptions, html.printHTML);