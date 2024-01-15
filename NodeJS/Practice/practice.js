
//NESTED FUNCTION
//// function outerFunction(innerFunction, x) {
//     let result = innerFunction(x);

// const { startSession } = require("../FileUpload/model/userModel")

//     let modifiedResult = result + 10;

//     console.log("Modified Result:", modifiedResult);
// }

// function square(y) {
//     return y * y;
// }

// outerFunction(square, 4);





// function operation(randomfunction,a){
//     return randomfunction(a)
// }

// function square(y){
// return y*y
// }

// const res = operation(square,4);
// console.log(res);


// const fs = require('fs');
// const http=require('http');

// const filepath = 'abc.txt';

// const server =http.createServer((req,res) => {

//     const readstream = fs.readstream(filepath,'utf8');

//     const writeStreams = {

//         GET: fs.createWriteStream('get1.txt',{flags: 'a'}),
//         PUT: fs.createWriteStream('put1.txt',{flags: 'a'}),
//        POST : fs.createWriteStream('post1.txt',{flags:'a'})

//     };

//     readstream.on('data' ,(chunkdata) => {
//         const lines = chunkdata.split('\n');
//         lines.foreach((line) => {

//            const trimedline= line.trim();

//            if (trimmedline.startswith('GET'){

//                WriteStreams.GET.write(`${trimedline}\n`);
//            }

//         })
//     });

// });


// const calculations = require('./maths');
// const devResult = calculations.divide(6,3);
// console.log(devResult);


// const arr = [1, 3, 5, 6, 7];
// const index = arr.indexOf(5);
// console.log(index);


// const [, , , fourth] = arr;
// console.log(fourth);



// const randomArray1 = [1, 2, 3, 4];
// const randomArray2 = [5, 6, 7, 8];
// const FinalArr = [...randomArray1, ...randomArray2];
// console.log(FinalArr);


// const randomObj1 = {
//     name: 'bilal',
//     city: 'lahore',
//     gender: 'male'
// };
// const randomObj2 = {
//     email: 'bilalQ@codiltysolution.com',
//     pass: '**********'
// }

// const FinalObj ={...randomObj1,...randomObj2};
// console.log(FinalObj);
// const { buffer } = require('stream/consumers');








// const zlib = require('zlib');
// const data = 'Hell0 there, I am data';

// zlib.deflate(data, (err, cdata) => {
//     if (!err) {
//         console.log("orignal data:" + data);
//           return  compresseddata = cdata.toString('base64');

//     } else {
//         console.log(err);
//     }
// });

// const punycode=require ('punycode');
// const unicodestring = 'example';
// const encode  = punycode.encode(unicodestring);
// const decode = punycode.decode(encode);

// console.log(encode);
// console.log(decode);


// const assert = require('assert');
// const a=10;
// assert.ok(a === a ,'this is true')
// assert.ok(1 === a,"this is false");



// const EventEmitter = require ('events');
// const myEmitter = new EventEmitter();

// // myEmitter.on('greet',()=>{
// //     console.log("hello I'm from EventEmitter");
// // });

// // myEmitter.emit('greet');


// myEmitter.on('message',(sender ,message)=>{
// console.log(`hello i am ${sender} and my message is ${message}`);
// });

// myEmitter.emit('message','Alien','I destroy the earth')









// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('Data received!');
//       }, 2000);
//     });
//   };
  
 
//   fetchData()
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });


// function sum (){
//     const resutl =10 + 30;
//     console.log(resutl)
// }

// sum();


// 'use strict';

// let name;
// name = 'bilal';
// console.log(name.length);

// "use strict";




// function doSomethingAsync(a) {
//     console.log("Doing something asynchronously...");

//     setTimeout(function() {
//       console.log("Operation completed!");
//     },2000);

// a();
   
//   }
  
  
  
//   function afterOperation() {
//     console.log("Callback function executed!");
//   }
  
 
//   doSomethingAsync(afterOperation);
  



// abc(bcd);


//   function callback( a){
//     a();
//     console.log("callback")
//   }

// function myfun(){
//     console.log("hello")
//   }
//   myfun();


// function new(){

// {
//     {
//         let a;
//         a=20; 
//     }
// }
// }

// for (var index = 0; index < 50; index++) {
//     setTimeout(() => {
//         console.log(index/2)
//     }, 1000);
    
// // }

// for (let index = 0; index < 4; index++) {
//     setTimeout(() => {
//         console.log(index/2);
//     }, 1000);
// }


             
// const myarr = [1,3,5,7,9,11,13,14];

// const push = myarr.push(4);

// console.log(push);
// console.log(myarr);

// const pop = myarr.pop();
// console.log(myarr);

// const unshift = myarr.unshift(0);
// console.log(myarr);






// let a = 35231;
// let str = a.toString().split("").reverse()
// //let valuetype = typeof(str);
// // 
// const arr = parseInt(str);
// console.log(arr);

//  (() => {
//   console.log("kuch bhe ");
// })();

// let add = function(x, y) {
//   return x + y;
// };

// console.log(add(2,4));


// const myarr = [1,2,3,4,5,6,7,8,9];
// myarr.forEach((element,index) => {
// console.log(`first element is: ${element} and its index number is: ${index} `);
// });


// class Dog {
//   bark() {
//     console.log('Woof!');
//   }
// }

// class Cat {
//   meow() {
//     console.log('Meow!');
//   }
// }

// const dogInstance = new Dog();
// dogInstance.bark();


// const arr = [1,2,3,4,5,6,7,8,9,10];


// for (let i = 1; i <= 10; i ++) {

//     let value = '';

//     for (let j = i+1; j >=0; j--) {
//         value += '*';
//     }

//     console.log(value);
// }







// for (let i = 10; i >= 0; i -= 2) {

//     let stars = '';

//     for (let j = 0; j < i; j++) {
//         stars += '*';
//     }
//     console.log(stars);
// }
