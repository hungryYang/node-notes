const EventEmitter = require('events')
a = new EventEmitter()

a.on('event',function (){
  console.log('event called')
})

a.emit('event')