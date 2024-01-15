const logevent = require('./mainlog.js');
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('log', (message) => logevent(message));

setTimeout(() => {
    myEmitter.emit('log', 'My logevent Emitted');
}, 2000);
