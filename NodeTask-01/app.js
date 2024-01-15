const crypto = require('crypto'); 
const fs = require('fs');

const requestTypes = ['GET', 'PUT', 'POST']; 

const randomWords = ['apple', 'pineapple', 'banana'];

let uri = `https://sdfasfafasf.com/${randomWords[Math.floor(Math.random() * (randomWords.length - 0) + 0)]}/${crypto.randomBytes(32).toString('hex')}`


let lines = 1000000;

let curr = 1; 

while(curr != lines){
    let line = `${requestTypes[Math.floor(Math.random() * (requestTypes.length - 0) + 0)]} ` + `${uri} ` + `${Math.floor(Math.random() * (12000 - 0) + 0)}\n`
    fs.appendFileSync('abc.txt', line)
    curr++; 
}