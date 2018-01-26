const fs = require('fs')

const stream = fs.createReadStream('file.txt',{start:10,end:60})

// fs.readFile('file.txt',(err,contents)=>{
//
// })
let data = ''
stream.on('data',(chunk)=>{
  data += chunk.toString()
  console.log(data)
})

stream.on('end',()=>{
  console.log(data)
})