var https = require('https')

function getAndPrintHTML (options) {

  var bufferingData = [];

  https.get(options, function (response) {
    
    response.setEncoding('utf8');

    response.on('data', function (data) {
  
      bufferingData.push((`Chunk data in Buffering, ${data}`));
      
      bufferingData.forEach(function (element){
        console.log(element);
      })

    });
  
    response.on('end', function () {
      console.log('Response stream complete.');
    });

  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);