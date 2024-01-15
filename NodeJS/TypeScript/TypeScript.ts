// function sum(a:number , b:any):string{
// return a.toString() + b.toString();
// }
// console.log(sum(10,'bilal'));

// function mul(a:number , b:number):number{
//     return a * b;
//     }
//     console.log(mul(10,2));

//     function divide(a : number , b : number) :number{
//         return a / b;
//         }
//         console.log(divide(10,2));

// function sum(a :any ,b: any) :any{
//     return a+b
// }

// console.log(sum(10,20));


// let name1 = 'dfsd';
// let name2 = 'dfsd';

// 
// function sum (name1 : number, name2 : any ){
//     return name1 + name2

// }

// console.log(sum(24,'hamza'));

// let a : number ;

// a = 24;

// console.log(a);


// let name1 : string | null | undefined ;
// name1 = 'john';
// console.log(name1.length);
// if (name1 !== null && name1 !== undefined){
//     console.log(name1.length);
// }else{
//     console.log('Name is Undefined or Null');
// }

// let StudentName : string ;
// let StudentAge : number ;
// let adult : boolean ;

// StudentName = 'bilal'; 
// StudentAge = 25;
// adult = true;

// console.log(StudentName)
// console.log(StudentAge)
// console.log(adult)

// let fruits1 = ["Apple","Bnana","Mango"];
// console.log(fruits1);

// let fruits : Array <any>;
// fruits = [true , "bilal", 25];
// console.log(fruits);


// let numbers :number[] = [1,2,3,4,5,6,7];
// let name1 : string[] = ['bilal','usama','kamran'];
// numbers.push(8);
// numbers.push(9,10,11,12,13);



// console.log(numbers);
// console.log(name1);

// Function type annotation
// const returnName : string =(name1:string)=> string:{
//     return console.log(`${name1}`)
// }




// const holdingFunction =    function firstFunction(secondFunction:any) : any{
//     console.log("firstFunction");
//     secondFunction();
//   }

// function secondFunction(a :any ,b : any, c :any) :any {
//     console.log("secondFunction")
//    console.log(a+b+c)

//   }


// const res : any = 
// firstFunction(secondFunction(10,20,40)); 





//   const sum = function (a : number , b : number) : number {
//   return( a + b) 
// };

// const res = sum(10,20);
// console.log(res)

// const plus = (a:number , b:number) :number => a + b ;
// const mul = (c:number , d:number) :number => {return c * d } ;

// const sum = plus (10,20);
// const myltiply = mul(10,20);
// console.log(sum)
// console.log(myltiply)



// let numbers: number[] = [1, 2, 3, 4];

// const res = numbers.forEach(function (num) {
//     console.log(num * 2);
// });

// console.log(res);


// type car = {
//   brand: string;
//   name: string;
//   model?: number;
// };

// type dynamic = {
//   [key: number ]: string
// };

// type Person = {
//   Fname: string;
//   Lname: string;
//   Age?: number;
// };

// const car1: car = {
//   brand: 'Toyota',
//   name: 'camry'
// };

// const car2: car = {
//   brand: 'Honda',
//   name: 'Civic',
//   model: 1998
// }

// const obj3: dynamic = {
//   1: 'hello',
//   2: 'i am',
//   4: 'Bilal'
// }

// const Stu : Person ={
// Fname:'bilal',
// Lname : 'Mughal',
// Age: 25
// }

// console.log(car1);
// console.log(car2);
// console.log(obj3);
// console.log(Stu);


// type StringOrNumber = string | number;

// function getmessage(input: StringOrNumber) {
//   if (typeof input == "string") {
//     console.log(`Your input is String and value is ${input}`)
//   } else {
//     console.log(`Your input is Number and value is ${input}`)
//   }
// }

// getmessage('shubagnam');



// const myStringArray =["Bilal","Adeel","Gohar"];
// const myNumberArray=[1,2,3,4,5,6]
// const MixArray1= [1,"Bilal",2, "Adeel",3,'Gohar',4];

// type NumberOrStringArray = Array<number> | Array<string>;
// type DynamicArray = Array<number | string>


// function GetArrayMessage(ArrayInput: NumberOrStringArray | DynamicArray) :void {
//   for (const item of ArrayInput) {
//     if (typeof item == "string") {
//       console.log(`Your Array is String and values are : ${item}`);
//     } else {
//       console.log(`Your Array is Number and values are : ${item}`);
//     }
//   }
// }

// GetArrayMessage(myStringArray);
// GetArrayMessage(myNumberArray);
// GetArrayMessage(MixArray1);

//  const MixArray : DynamicArray =[1,3,"bilal","ahmad",6,2]
//  console.log(MixArray);



//  type dynamicObject = {
// [key : any] : any
//  };


// type DynamicObject = {
//   [key: string | number]:  Array<string | number | boolean> | string;
// };

// const Dobj: DynamicObject = {
//   1 : 'bilal',
//   2 : 'Mughal',
//   class: ["bilal", "ahmad",1,2,3,true]
// };

// Creating a generic type alias
// type Box<T> = {
//   value: T;
// };

// const numberBox: Box<number> = { value: 42 };
// const groupBox: Box<string> = { value: "Hello" };





// interface Car1 {
//   make: string;
//   model: string;
//   year?: number; 
// };

// type Car = {
//   make: string;
//   model: string;
//   year?: number; 
// }


// const interfaceCar: Car1 = {
//   make: "Toyota",
//   model: "Camry",
// };

// const TypeCar: Car = {
//   make: "Toyota",
//   model: "Camry",
// };


// console.log(interfaceCar)
// console.log(TypeCar)



interface Company {
  make: string;
  model: string;

};

interface car extends Company{
  year?: number; 
};

const myInterface :car ={
  make : "toyota",
  model : "camry",
  year : 2022
}

console.log(myInterface);