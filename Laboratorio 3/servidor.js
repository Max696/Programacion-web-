var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  var t1 = url.parse(req.url, true);
  
  var name = t1.pathname.split("/")
  
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({ hello: name[2] }));
    res.end();
  
  res.end();
}).listen(8080);