const fs = require('fs');
const fspromise = require('fs').promises;
const path = require('path');


fs.readFile(path.join(__dirname, './password.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Read existing file data ');
    console.log(data);
});

fs.writeFile(path.join(__dirname, 'newfile.txt'), 'hello, I am from new file', (err) => {
    if (err) throw err;
    console.log('Write new file through Write method');
});

fs.rename(path.join(__dirname, 'newfile.txt'), path.join(__dirname, 'file.txt'), (err) => {
    if (err) throw err;
    console.log("File name changed");
});


fs.appendFile(path.join(__dirname, 'creatfile.txt',), 'I am creating new file through append method', (err) => {
    if (err) throw err;
    console.log('Append complete');
});

process.on('unCaughtException', (err) => {
    console.log('we are facing :' + err)
});




//with FsPromises
const filepromise = async () => {

    try {
        const writefile = await fspromise.writeFile(path.join(__dirname, 'PromiseWriteFile.txt'), 'hello BILAL you added me through writefile method');
        console.log('Creation of file Completed');

        const readfile = await fspromise.readFile(path.join(__dirname, 'PromiseWriteFile.txt'), 'utf8');
        console.log('Reading File :', readfile);

        const AppendData = await fspromise.appendFile(path.join(__dirname, 'PromiseWriteFile.txt'), '\n\n here you use append to add data in the file');
        console.log('Append Data Process Completed');

    } catch (err) {
        console.log(err)
    }
}

filepromise();


const readstream = fs.createReadStream(path.join(__dirname, 'PromiseWriteFile.txt'), 'utf8');
const writestream = fs.createWriteStream(path.join(__dirname, 'newstream'),);

// readstream.on('data',(filedata)=>{
//     writestream.write(filedata);
// } );

readstream.pipe(writestream);


//for making Directory
if (!fs.existsSync('./NewDirectory')) {
    fs.mkdir('./NewDirectory', (err) => {
        if (err) throw err;
        console.log('new file created');
    });
}

// for removing directory
if (fs.existsSync('./NewDirectory')) {
    fs.rmdir('./NewDirectory', (err) => {
        if (err) throw err;
        console.log('Directory Removed');
    });
}

