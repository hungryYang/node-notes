const http = require('http')
const fs = require('fs')
// http.createServer((req,res)=>{
//   res.writeHead(200,{'Content-Type':'text/html'})
//   res.write('Hello')
//
//   setTimeout(()=>{
//     res.end('<b>world<b>')
//   },3000)
// }).listen(3000)

http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'image/png'})
  var stream = fs.createReadStream('image.png')
  stream.on('data',(data)=>{
    console.log(data)
    res.write(data)
  })

  stream.on('end',()=>{
    res.end()
  })
}).listen(3000)