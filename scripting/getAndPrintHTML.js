var https = require('https');

function getAndPrintHTML() {

  const bufferingData = [];

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    
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

getAndPrintHTML();