// //object
// //colection of properties,and a properties is an association between Name and values

// let person = {
//     firstName: 'ravan',
//     age: 23,
//     native: 'kallakurichi',
//     siblings: {
//         brother_1: 'rajessh',
//         brother_2: 'rasappa',
//         brother_3: 'shankar'
//     }
// }

// console.log(person)
// console.log(person.siblings.brother_3)

// //Array
// //*a type of global object used to store data
// //* array can store multiple values in a single variable

// let favColors = ['red', 'black', 'pink'];

// console.log(favColors)
// console.log(typeof (favColors))
// console.log(favColors.length)

// //function


// function wish(firstName) {
//     let msg = "Hi " + firstName + ", " + "Merry christmas!";
//     console.log(msg)
// }

// wish('sakthi')

// function multiply(a, b) {
//     let answer = a * b;
//     console.log(answer)
// }

// multiply(Math.random(), Math.random());

// //ternary oparator

// let age = 24;

// let type = age > 18 ? 'Adult' : 'Child';

// console.log(type)


// //logical oparator
// //AND  --> both true
// let player = true;
// let score = 890;
// let agree = 1000;

// let winScore = score <= agree;

// if (player && winScore) {
//     console.log('winner!!!')
// } else (
//     console.log('try again later!!')
// )

// //OR --> either one true

// let aiPlayer = false;

// if (aiPlayer || winScore) {
//     console.log('winner!!!')
// } else (
//     console.log('try again later!!')
// )




// // conditional statements

// //switch-case


// let grade = 'A';

// switch (grade) {
//     case 'S':
//         console.log('super grade');
//         break;
//     case 'A':
//         console.log('excellent grade');
//         break;
//     case 'U':
//         console.log('failed')
//         break;
//     default:
//         console.log('unknown grade')
// }

// // loops
// // for loop
// // for(initialExpression; condition; step){
// //     console.log('output')
// // }

// for (let a = 0; a <= 10; a++) {
//     if (a % 2 !== 0) {
//         console.log('add no #' + a)
//     }
// }

// let s = 10;
// while (s >= 1) {
//     if (s % 2 == 0){
//         console.log('even no #' + s)
//     }
//     s--;
// }



// let a=[2,4,3,5,7,6,8,9]
// let b=12

//  for(i=0;i<a.length;i++){
//      for(j=i+1;j<a.length;j++){
//          if(a[i]+a[j]==b){
//              console.log(`hello`);  
//          }
//          else{
//              console.log(`hell`);

//          }
//      }
//  }


// interview quiz

function func1() {
    return 2
}
function func2() {
    return 4
}

let ab = (func1(), func2())
console.log(ab)   //-->  4


const arr = ['one', 'two', 'three']
const str = 'hello'

const res = arr.includes('on')
const anotherVar = arr.includes('onetwo')
const newVar = str.includes('ll')

console.log(res)//-->false
console.log(anotherVar)// --> false
console.log(newVar)// --true

console.log(true == ' ') //-->false

console.log('1' == 1)//-->true

let a = 10
let b = new Number(10)
let c = 10
console.log(a === b)//-->false



//shallow copy   and   deep copy diff??
//example

let az = { name: 'Adharz' }
let x = { ...az }
z.name = 'adil'
console.log(a.name) //-->Adharz