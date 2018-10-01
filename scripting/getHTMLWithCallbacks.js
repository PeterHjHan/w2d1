var https = require('https');


function getHTML (options, callback) {

  var bufferingData = [];

  https.get(options, function (response) {
    
    response.setEncoding('utf8');

    response.on('data', function (data) {
  
      bufferingData.push((`Chunk data in Buffering, ${data}`));
      
      bufferingData.forEach(function (element){
        callback(element);
      })

    });

    response.on('end', function () {
      // console.log(callback(bufferingData));
      console.log('Response stream complete.');
    });

  });

}

function printHTML (html) {
  console.log(`Hello ${html}`) ;
}

function testing(string) {
  return string;
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
