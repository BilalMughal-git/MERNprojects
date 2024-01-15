const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const FsPromises = require('fs').promises;
const EventEmitter = require('events');
const path = require('path');

const logevent = async (message,logname) => {
    
    const DateTime = format(new Date(), 'yyyyMMdd\thhmmss');
    const logitem = `${DateTime}\t${uuid()}\t${message}`;
 

    try {
        if(!fs.existsSync(path.join(__dirname,'logs'))){
await FsPromises.mkdir(path.join(__dirname,'logs'));
        }
        await FsPromises.appendFile(path.join(__dirname, 'logs',logname),logitem);
    } catch (err) {
        console.log(err);
    }
}

// const logger=(req,res,next){
// logevents()
// }

module.exports= logevent;
