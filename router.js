
// call fs for file handling
const fs = require('fs');
const url = require('url');

function renderHTML(file, path, res){
  fs.readFile(path+file, function(error, data){
    if(error){
      res.writeHead(404);
      res.write('Error: ' + file + ' Not Found');
    }else{
      res.write(data);
    }
    res.end();
  })
}


exports.requestListener = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  var route = req.url;
  console.log(route);
  switch(route){
    case '/':
      renderHTML('index.html' , 'pages/', res);
      break;
    case '/about':
      renderHTML('about.html' , 'pages/', res);
      break;
    default:
      res.writeHead(404);
      res.write('Route not defined');
      res.end();
  }//switch
}//requestListener
