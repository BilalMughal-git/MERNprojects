
////showing right now date and Event emitter

const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const FsPromises = require('fs').promises;
const EventEmitter = require('events');
const path = require('path');

const logevent = async (message) => {
    
    const DateTime = format(new Date(), 'yyyyMMdd\thhmmss');
    const logitem = `${DateTime}\t${uuid()}\t${message}`;
    console.log(logitem);
    try {
        await FsPromises.appendFile(path.join(__dirname, 'NewFileAppend.txt'),logitem);
    } catch (err) {
        console.log(err);
    }
}

// logevent();
module.exports= logevent;
// const Right_Now_Date_Time =format(new Date(),'yyyyMMdd\thh:mm:ss');
// console.log(Right_Now_Date_Time );
// console.log(uuid());




