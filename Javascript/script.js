// let body= document.body.children
// console.log(body[0]) 
// console.log(body.childs)
//callback_hell

// h1=document.querySelector('#h1')
// h2=document.querySelector('#h2')
// h3=document.querySelector('#h3')
// h4=document.querySelector('#h4')
// h5=document.querySelector('#h5')
// h6=document.querySelector('#h6')
// callback hell/ pramid of dom
// let h1 = document.querySelector("#head1");
// let h2 = document.querySelector("#head2");
// let h3 = document.querySelector("#head3");
// let h4 = document.querySelector("#head4");
// let h5 = document.querySelector("#head5");
// let h6 = document.querySelector("#head6");
// console.log(h1,h2,h3,h4,h5,h6)

// setTimeout(() => {
//   h1.textContent = "one";
//   h1.style.color = "red";
//   setTimeout(() => {
//     h2.textContent = "Two";
//     h2.style.color = "green";
//     setTimeout(() => {
//       h3.textContent = "Three";
//       h3.style.color = "blue";
//       setTimeout(() => {
//         h4.textContent = "Four";
//         h4.style.color = "yellow";
//         setTimeout(() => {
//           h5.textContent = "five";
//           h5.style.color = "violet";
//           setTimeout(() => {
//             h6.textContent = "six";
//             h6.style.color = "pink";
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
//promise
// let arr = [1,2,3,4,5]
// let result = new Promise((resolve,reject)=>{
// if(arr.includes(2)&& arr.includes(6)){
//     resolve("promise resolved!!!")
// }
// else{
//     reject("promise rejected!!!")
// }
// })
// result.then((data)=>{
// console.log(data);
// })
// .catch((err)=>{
// console.log(err);
// })
// let h1 = document.querySelector("#head1");
// let h2 = document.querySelector("#head2");
// let h3 = document.querySelector("#head3");
// let h4 = document.querySelector("#head4");
// let h5 = document.querySelector("#head5");
// let h6 = document.querySelector("#head6");
// function change(ele,text,color,time){
//     return new Promise((resolve,reject)=>){
//         if(ele) {
//             setTimeout(()=>{
//                 ele.textContent=text;
//                 ele.style.color=color;
//                 resolve();
//             },time);
//         } else {
//             reject("Element Not found!!");
//         }
//     })

// fetch('https://jsonplaceholder.typicode.com/')
// .then((Response)=>Response.json())
// .then((data)=>{
//  console.log(data)
//     document.writeln(data[0].id)
//     document.writeln(data[0].title)
// })
//     .catch(err)=>{
//         console.log(err)
//     }

// console.log("rohit")
// Print the no. from 1 to 5.

// console.log("using a for loop")
// for(let i=1;i<=10;i++){
//     console.log(i);
// }
// console.log("using a while loop")
//  let i=1;
//  while(i<=5){
//     console.log(i);
//     i++;
//  }

//  console.log("using a do-while loop")
//  j=1;
//  do {
//     console.log(j);
//     j++;
//  }

// WAP a function to add no. return result.

// function addNumbers(a,b){
//     return a+b;
// }
// let sum=addNumbers(5,10);
// console.log(sum);
// create a function area.

// let calculateAreaofRectangle=(width,height)=> {
//     return width*height;

// }
// let area= calculateAreaofRectangle(6,5);
// console.log(area);/
// a=5;
// console.log(a++)
// console.log(a)
// Assignment operator.:-
// let a=10;
// let b=15;
// a+=b;
// a-=b;
// a*=b;
// a/=b;
// a%=b;
// console.log(a)

// comparison oprator:-
// x=10;
// y=5;
// console.log(x==y)
// console.log(x!=y)
// console.log(x>=y)
// console.log(x<=y)
// let a=10;
// let b="10";
// console.log(a==b);
// console.log(a===b);
// Logical operator.
// &&
// console.log(2>3&&4>3); //f && t=f
// console.log(4>3&&5>3);// t&& t=t
// console.log(2>3&& 3>4)//f && f=f
//  ||
// Function 
// block of  code hota.
// function fun(){
//     console.log("hello world")
// }
// fun()
// function fun(a,b){
//     console.log(a+b)
// }
// fun(5,10)
// function add(a,b){
//     return a+b;
// }
//  let sum=add(10,4)
//  console.log(sum)

// function greet(name="guest"){
//     console.log("hello",name)
// }
// greet("Alice")
// const sayHi = function(){
//     console.log("Hi there")
// }
// sayHi()

// Arrow function.

// const add=(a,b)=> a+b;
//     console.log(add(10,5));

// (function(){
//     console.log("hello")
// })()

// Higher-order Functions:-
// Function that take other function as argument or return them.
// function  calculate(operation,num1,num2){
//     return operation(num1,num2)
// }
// const add=(a,b)=>a+b
// const sub=(a,b)=>a-b
// console.log(calculate (add,20,30))
// console.log(calculate(sub,30,20))
// let a=10;
// let b=15;
// if(a>b){
//     console.log("a is greater")
// }
// else{
//     console.log("b is greater")
// }

// let marks=55;
// if (marks>=90){
//     console.log("Grade:A+")
// }
//     else if(marks>=80){
//         console.log("Grade:A")
//     }
//     else if(marks>=70){
//         console.log("Grade:B")
//     }
//     else if(marks>=60){
//         console.log("Grade:C")
//     }
//     else{
//         console.log("Grade:F")
//     }

// let userLoggedIn = true;
// let isAdmin = false;
// if(userLoggedIn){
//     console.log("Admin")
// }
// else{
//     console.log("user")
// }
// else{
//     console.log("please Log in First")

// }

//Ternary operator.
// let num = 10;
// if(num%2==0){
//     console.log("Even number")
// }
// else{
//     console.log("Odd number")
// }
// let result=(num%2==0) ? "Even"
// :"Odd";
// = add(10,5);
// console.log(sum);console.log(result)
 
// let day=4
// switch(day){
//     case 1:
//         console.log("Monday")
//         break;
//         case 2:
//             console.log("tuesday")
//             break;
//             case 3:
//                 console.log("wednesday")
//                 break;
//                 case4:
//                 console.log("thursday")
//                 break;
//                 case5:
//                 console.log("Friday")
//                 break;
//                 case6:
//                 console.log(saturaday)
//                 break;
//                 case7:
//                 console.log("Sunday")
//                 break;
//                 default:
//                     console.log("wrong")
// }

// Arrow function
//
// function add(a,b){
//     return a+b;
// }
// let sum= add(10,20);
// console.log(sum)

// function add(a,b){
//     return a+b;
// }
// let sum

// function add(number1,number2){
//     return number1+number2;
// }
// let sum=add(10,3);
// console.log(sum);

// const greet=function(){
// console.log("hello");
// }
//  greet();

// setTimeout(function(){
//     console.log("hello")
// }, 1000)

// function calculateCarPrice(...num1){
//     return num1;
// }
// console.log(calculateCarPrice(200,300,400));

// const myNewAarry=[100,200,300,400]

// function returnSecondValue(getArray){
//     return getArray;
// }
// console.log(returnSecondValue(myNewAarry));

// let name= "Rohit";
// function test(){

//     console.log(name);
// }

// this = current object ko refer karta hai

// const user= {
//     name:"Rohit",
//     greet:function(){
//     console.log(this.name);

//     }};

// user.greet();


// const user={
//     name:"Rohan",
//     greet:function(){
//         console.log(this.name);
//     }
// }
// user.greet();

// const user={
//     name:"Raja",
//     greet:function(){
//         console.log(this.name);
//     }
// }
// user.greet();

// function one(){
//     const username="rohit";
// function two(){
//     const website="youtube";
//     console.log(username);
// }
//     // console.log(website);
//     // one()
//     // two();
// }
// one();

// if(true){
//     const username="rohit";
//     if(username==="rohit"){
//         const website="facebook";
//         console.log(username+website);
//     }
// }
 // console.log(username);
// condition.
//  if(true){
//     const username="raja";
//     if(username==="raja"){
//         const website="insta";
//         console.log(username+website);
//     }
    // console.log(website);
//  }
//  console.log(username);

// For loop - Jab tumhe pata ho kitni baar loop chalega.

// for(initialization; condition; increment){ 
   // code
// }

 // for(let i=1; i<=5; i++){
//     console.log(i)
// }

// for(let i=1; i<=10; i++){
//     console.log(i)
// }
// for(let i=1; i<=15;i++){
//     console.log(i)
// }

// while loop -Jab tak condition true hai tab tak chalega.

// i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// i=1;
// while(i<=10){
//     console.log(i)
//     i++;
// }

// do...while Loop

// 👉 Ye kam se kam 1 baar zarur chalega.

// let i=1;
// do{
//     console.log(i);
//     i++;
// } while(i<=5);

// let i=1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=10);

// let i=4;
// do{
//     console.log(i)
//     i++;
// }
// while(i<=7)

// condition

// let age=15;
// let name="jhon";
// if(age>=18){
//     if(name=="jhon"){
//         console.log("You can visit")
//     }
//     else {
//         console.log("you can not visit")
//     }
   
// }
// else{
//     console.log("you can not")
// }

// if // Nested if//if else
// let age=25;
// let name="rohit";
// if(age>=18){
//     console.log("you can visiut")
// }
// else{
//     console.log("you can not visit")
// }

// let a=20;
// let b=30;
// if(a>b){
//     console.log("a is greater")
// }
// else if(b>a){
//     console.log("b is greater")
// }
// else{
//     console.log("both are equal")
// }
// let marks= 85;
// if(marks>=80){
//     console.log("grade:A+")
// }
// else if(marks>=70){
//     console.log("grade:B+")
// }
// else if(marks>=60){
//     console.log("grade:C")
// }
// else if(marks>=50){
//     console.log("grade:F")
// }

// Nested 
// let userLoggedIn= true;
// let isAdmin= false;
// if(isAdmin){
//     console.log("Admin")
// }
// else{
//     console.log("user")
// }

// let num=10;
// if(num%2==0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }
// let result= (num%2==0)?"even":"odd";
// console.log(result)

// switch

// let day=3;
// switch(day){
//         case 1:
//             console.log("sunday")
//             break;
//             case 2:
//                 console.log("monday")
//                 break;
//                 case 3:
//                     console.log("tuesday")
//                     break;
//                     case 4:
//                         console.log("wednesday")
//                         break;
//                         case 5:
//                             console.log("thrusday")
//                             break;
//                             case 6:
//                                 console.log("friday")
//                                 break;
//                                 case 7:
//                                     console.log("saturadya")
//                                     break;
//                                     default:
//                                         console.log("wrong")
//     }

// break

// for(i=1; i<=10; i++){
//     if(i==5) break;
//     console.log(i)
// }

// for(i=0; i<=7; i++){
//     if(i===3) break;
//     console.log(i)
// }

// for(i=1; i<=8; i++){
//     if(i===5){
//       continue;  
//     } 
//     console.log(i)
// }

// javascript start-6/4/2025

// syntax- javascript likhane ka tarikha 
// Step by Step:-
// Tum JavaScript code likhte ho
// Browser us code ko read karta hai
// Agar syntax sahi hai → code run hoga
// Agar syntax galat hai → error aayega
// flow-Code → Browser Read → Check Syntax → Run Code

// let a=5;
// let b=6;
// let c=a+b;
// console.log(c)

// JavaScript me Values ka matlab hota hai- Data jo hum code me use karte hain

// JavaScript me 2 types ki values hoti hain:

// Literals (Fixed Values)
// Variables (Variable Values)
// literals (fixed values):-Literals ka matlab hota hai fixed value — jo change nahi hoti.
// let name="rohit";
// let age=30;
// console.log(name);
// 🟢 2. Variables (Variable Values)-

// Variables ka matlab hota hai value store karna jo change ho sakti hai.
// let score=10;
// score=20;
// console.log(score)
// output=20
// kaise -
// 10 remove ho gaya
// 20 store ho gaya

// Isko bolte hain value update / reassignment.

// Identifier:-JavaScript me Identifier ka matlab hota hai variable, function, object ka naam

// Simple words me:
// 👉 Identifier = Name jo hum kisi variable ya function ko dete hain
// example:-
// let score=10;
// Yaha:
// let → keyword
// score → Identifier
// 10 → value (Literal)

// 👉 score ek identifier hai

// 🟢 Identifier Rules

// JavaScript me identifier banane ke rules hote hain:

// Rule 1: Letter se start hona chahiye
// correct-
// let name = "Rohit";
// let score = 10;
// wrong-
// let 1name = "Rohit";
// Allow hai ander score keyword-
// Allowed:-
// _
// $
// let user_name = "Rohit";
// let $price = 100;
// case sensitive allow hai.
// let name = "Rohit";
// let Name = "Amit";
// 🎯 Simple Definition-
// 👉 Identifier = Variable ya function ka naam.
// example-
// let age = 22;
// age → Identifier
// 22 → Value
// Bhai "Cannot be a reserved keyword" ka matlab hai:-

// 👉 JavaScript ke kuch words pehle se hi fix hote hain
// 👉 Unko variable ya identifier ka naam nahi bana sakte

// Inhe bolte hain Reserved Keywords
// Example (Wrong)-let let = 10;
// Yeh galat hai ❌
// Kyuki:
// let JavaScript ka reserved keyword hai
// Isko variable name nahi bana sakte
// Cannot be a reserved keyword


// JavaScript Operators-JavaScript assignment operators (=) assign values to variables.
// let a=5;
// let b=6;
// let sum=a+b;
// console.log(sum)
// o/p-11

// JavaScript Expressions-An expression is a combination of values, variables, and operators, which computes to a value.
// simple way me -
//  👉 Expression = koi bhi code jo value return kare
// (Matlab result de)
// exmaple- 5+5=10

// 👉 Statement = Instruction jo JavaScript ko kuch kaam karne ko bolta hai.
// (Simple: Statement = Action)
 // simple way- Ye variable bnane ke liye used hota hai.
//  example- let a=5;

// JavaScript is Case Sensitive -
// JavaScript identifiers are case sensitive.

// The variables lastName and lastname, are different variables:

// Example
// let lastName = "Doe";
// let lastname = "Peterson";

// JavaScript and Camel Case -
// Camel Case ek naming style hai jisme:-
// Pehla word small letter se start hota hai
// Har next word ka first letter capital hota hai
// firstName
// userAge
// totalPrice
// isLoggedIn
// 🟢 JavaScript me Camel Case kyun use hota hai?

// JavaScript me Camel Case use hota hai:-

// Code readable banane ke liye
// Professional coding standard follow karne ke liye
// Multiple words ko easily samjhne ke liye
// example-
// let firstName="Rohit";
// let userAge= 30;
// let totalPrice= 100;
// console.log(firstName);
// console.log(userAge);
// console.log(totalPrice)

// function getUserName(){
//     console.log("Rohit");
// }

// 🟢 var Keyword in JavaScript
// var kya hota hai?-

// var variable declare karne ke liye use hota hai
// Matlab data store karne ke liye box banana
//  var name="Rohit";
//  console.log(name);
//  var- variable declear krne ke liye.console
//  name - identifier
//  value- rohit
// example-
// var score= 10;
//   score= 20;

//   console.log(score);

// Global varible-
// Global Variable use hota hai jab same data ko multiple places par use karna ho

// 👉 Matlab:

// Multiple functions me use
// Pure program me use
// Data share karne ke liye use
// example1-
//  var userName="Rohit";

//  function welcome(){
//     console.log("welcome"+userName)
//  }
//  function by(){
//     console.log("goodby"+userName);
//  }
//  welcome();
//  by();

// JavaScript Comments-
// JavaScript me Single Line Comment aur Multi Line Comment code ko explain karne, temporarily disable karne, aur code readable banane ke liye use hote hain.

// Single Line Comment Kyu Use Karte Hai-
// ✅ Code explain karne ke liye
// ✅ Debugging ke liye
// ✅ Temporary code disable karne ke liye
// Example-
// let a = 10;
// // let b = 20
// console.log(a);
// Yaha b wala code run nahi hoga

// Multi Line Comment Kyu Use Karte Hai

// ✅ Long explanation likhne ke liye
// ✅ Documentation likhne ke liye
// ✅ Multiple lines disable karne ke liye
/*
let a = 10;
let b = 20;
let c = 30;
*/

// console.log("Hello");

// Ye sab code run nahi hoga

// | Single Line     | Multi Line         |
// | --------------- | ------------------ |
// | // use hota hai | /* */ use hota hai |
// | One line        | Multiple lines     |
// | Short comment   | Long comment       |

// 1. if Statement

// if condition check karta hai
// Agar condition true ho to code run hota hai

// Syntax-
// if(condition){
// code
// }

// Example -

// let age = 18;

// if(age >= 18){
// console.log("You can vote");
// }

// Output-You can vote

// Explanation-
// Agar age 18 ya usse jyada hai to message show hoga
// practice-
// example-
// let age=19;
// if(age>=19){
//   console.log("you are Adult");
// }
// else {
//   console.log("You are not Adult");
// }

// let age=16;
// if(age>=18){
//   console.log("adult");
// }
// else{
//   console.log("minor");
// }
// 2. if else-
// Agar condition true ho to if run
// Agar false ho to else run

// Syntax-if(condition){
// code
// }
// else{
// code
// }
// Example

// let age = 16;

// if(age >= 18){
// console.log("You can vote");
// }
// else{
// console.log("You cannot vote");
// }

// Output-
// You cannot vote

// 3. else if- Multiple conditions check karne ke liye.

// Syntax->

// if(condition){
// }
// else if(condition){
// }
// else{
// }
// let age= 25;
// if(age>=26){
//   console.log("yes");
// }
// else if(age>=22 && age<=30 ){
//     console.log("No");
// }
// else{
//   console.log("not");
// }
//  let age = 55;
//  if(age>=56){
//   console.log("rohit");
//  }
//  else if(age>=55 && age<=60){
//   console.log("raj")
//  }
//  else{
//   console.log("rohan")
//  }

// let marks= 60;
// if(marks>=60){
//   console.log("A")
// }
// else if(marks>=60 && marks<=70){
//   console.log("B")
// }
// else if(marks>=62 && marks<=70){
//   console.log("c")
// }
// else{
//   console.log("fail")
// }
// 1. switch Keyword-

// switch multiple conditions check karne ke liye use hota hai
// Ye different cases ke according code run karta hai

// Syntax-
// switch(value){
// case 1:
// code
// break;

// case 2:
// code
// break;

// default:
// code
// }

// let day=5;
// switch(day){
//   case 1:
//     console.log("monday")
//       break;
//     case 2:
//     console.log("tuesday")
//     break;
//     case 3:
//       console.log("wednesday")
//       break;
//       case 4:
//         console.log("tursday")
//         break;
//         default:
//           console.log("invalid")
// }
// default ka used- Kyu Use Karte Hai 🤔

// default use karte hain:

// ✅ Jab koi case match na kare
// ✅ Error avoid karne ke liye
// ✅ User ko fallback message dene ke liye
// ✅ Safe coding ke liye

// for(let i=1; i<=10;i++){
//     console.log(i);
// }

// for(let i=1; i<=3;i++){
//     console.log("hello rohit")
// }

// for(let i=1; i<=2;i++){
//     console.log("hlo raj")
// }

// 2. function Keyword
// function Kya Hota Hai-
//  Function code ka block hota hai jo reuse kiya ja sakta hai
// Matlab ek baar likho, multiple baar use karo.

// Syntax-
// function functionName(){
// code
// }
// example-
// function greet(){
//     console.log("rohit")
// }
// greet();

// function add(a,b){
//     return a+b;
// }
// sum =add(5,8);
// console.log(sum)


// function greet(){
//     console.log("rakesh","rohit")
// }
// greet();
 
// function add(a,b){
//     return a+b;
// }
// sum=add(5,9);
// console.log(sum)

// 3. return Keyword-
// return Kya Hota Hai-

// return function se value wapas bhejne ke liye use hota hai

// Return ke baad function stop ho jata hai.

// function add(a,b){
//     return a+b;
// }
// let result= add(5,7);
// console.log(result)

// function test(){
//     return "hello";
//     console.log("rohit");
// }
// console.log(test());

// function test(){
//     console.log("rohit");
//     return "hello";
// }
// console.log(test());


// function test(){
//     console.log("hi");
//     return ["raj","rohit"];
// }
// console.log(test());

// function test(){
//     console.log("hi");
//     return "raj","rohit";
// }
// console.log(test());

// 4. try Keyword-
// try Kya Hota Hai-

// try error handle karne ke liye use hota hai

// Agar error aaye to program crash nahi hota

// Syntax-
// try{
// code
// }
// catch{
// error handle
// }

// try{
//     console.log("hello");
// }
// catch{
//     console.log("error handling");
// }

// try{
//     let a=4;
//     let b=4;
//     console.log(a/b);
// }
// catch{
//     console.log("error");
// }

// try{
//     let a=5;
//     let b=9;
//     let c= a+b;
//     console.log(c);
// }
// catch{
//     console.log("error");
// }

// | Keyword  | Use                           |
// | -------- | ----------------------------- |
// | for      | loop chalane ke liye          |
// | function | function create karne ke liye |
// | return   | value return karne ke liye    |
// | try      | error handle karne ke liye    |


// var Kya Hai
// Old JavaScript keyword
// Function scope follow karta hai
// Re-declare allowed
// Reassign allowed
// Example
// var name = "Rohit";
// var name = "Raj";

// console.log(name);

// Output-Raj

// var Scope Example-
// if(true){
// var a = 10;
// }
// console.log(a);
// Output- 10
// Block ke bahar bhi access ho raha hai


// 2. let-
// let Kya Hai-
// Modern JavaScript keyword
// Block scope follow karta hai
// Re-declare NOT allowed
// Reassign allowed
// Example
// let name = "Rohit";
// name = "Raj";
// console.log(name);
// Output- Raj
// Reassign allowed hai ✅

//  let Re-declare Example-
// let name = "Rohit";
// let name = "Raj";

// Output- Error


/* 3. const keyword-
const Kya Hai-
Constant variable
Block scope
Re-declare not allowed
Reassign not allowed
Example-
const pi = 3.14;
console.log(pi);
Output-3.14 */

/*const example-
const age = 20;
age = 25;
Output- Error */

/* const Block Scope-
if(true){
const a = 50;
console.log(a);
}
console.log(a);
Output-50
      Error */

 /* var vs let vs const Table-
| Feature    | var      | let   | const |
| ---------- | -------- | ----- | ----- |
| Scope      | Function | Block | Block |
| Re-declare | Yes      | No    | No    |
| Reassign   | Yes      | Yes   | No    |
| Modern Use | No       | Yes   | Yes   | */

/*Hoisting Kyun Important Hai
Bugs avoid karne ke liye
Interview questions me pucha jata hai
Execution samajhne ke liye */

/*Simple Definition (Interview)-
Temporal Dead Zone wo time hota hai jab variable hoist ho chuka hota hai lekin declare hone se pehle access nahi kar sakte.*/

// Practice var,let and const.
/*var name = "rohit";
 var name= "raj";
 console.log(name)*/

/* var age =30;
 age=20; 
 console.log(age)*/

//  let age=30;
//  age=20;
//  console.log(age)

// let name=["rohit",1,3,"raj"]
// console.log(name[0])
// console.log(name[1])

// let name="rohit";
// let name="rohan";

// console.log(name);// isme redeclered  nhi kr sakte hai but reassined kr sakte hai.

// const person={
//     name:"rohit"
    
// }
// person.name="rohiot"
// console.log(person.name)

// javascript operator-
/*
JavaScript Operators ka use values aur variables par operations perform karne ke liye hota hai.
Simple words me:
Operator = Action perform karne wala symbol.
Example:-
let a = 5;
let b = 3;
let sum = a + b; // + operator
Yaha + operator hai.

The Assignment Operator = assigns values

The Addition Operator + adds values

The Multiplication Operator * multiplies values

The Comparison Operator > compares values*/

/*1. Arithmetic Operators (Math Calculation)
| Operator | Use                 | Example    |
| -------- | ------------------- | ---------- |
| +        | Addition            | 5 + 3 = 8  |
| -        | Subtraction         | 5 - 3 = 2  |
| *        | Multiplication      | 5 * 3 = 15 |
| /        | Division            | 6 / 2 = 3  |
| %        | Modulus (Remainder) | 5 % 2 = 1  |
| ++       | Increment           | a++        |
| --       | Decrement           | a--        | */

// let a=4;
// let b=8;
// let c=a+b;
// console.log(c)

// let a=10;
// let b=5
// let c=a-b
// console.log(c)

/*let a=4
let b=4
let c=a*b
console.log(c)*/

// let a=5
// let b=5
// let c=a/b
// console.log(c)

// let a=5
// let b=2
// let c=a%b
// console.log(c)

/*Important (Interview Question)-

Increment aur Decrement ke 2 types hote hain

Post Increment → a++
Pre Increment → ++a */
//Post Increment//
/*let a=5
console.log(a++)
console.log(a)
output-5,6
Explanation:
Pehle value print hoti hai
Baad me increment hota hai*/

/*Pre Increment Example-
let a = 5;
console.log(++a); // 6
Explanation:-
Pehle increment hota hai
Fir value print hoti hai*/

/*
| Type | Meaning                |
| ---- | ---------------------- |
| a++  | pehle use fir increase |
| ++a  | pehle increase fir use |
| a--  | pehle use fir decrease |
| --a  | pehle decrease fir use |*/

// Decremnet 
/*let a=10
console.log(--a)
console.log(a)
op-9,9*/

/*2. Assignment Operators-
Value assign karne ke liye use hote hain

| Operator | Example |
| -------- | ------- |
| =        | x = 5   |
| +=       | x += 2  |
| -=       | x -= 2  |
| *=       | x *= 2  |
| /=       | x /= 2  |

Example:-
let x = 10;
x += 5; // x = x + 5
console.log(x); // 15*/

// Practice example-

/*let x=5
x+=9
console.log(x)*/

// let x=109
// x+=5
// console.log(x)

// let num=10;
// num+=10; //num=num+10
// console.log(num);  // 20

// let a=10
// a-=5
// console.log(a)

/*3. Comparison Operators-

Comparison karne ke liye use hote hain

| Operator | Meaning            |
| -------- | ------------------ |
| ==       | equal              |
| ===      | equal value & type |
| !=       | not equal          |
| !==      | not equal type     |
| >        | greater than       |
| <        | less than          |
| >=       | greater equal      |
| <=       | less equal         |

Example:-

console.log(5 == "5");  // true
console.log(5 === "5"); // false
console.log(10 > 5);    // true */

// let a=5
// let b=5
// console.log(a==b)

// let a=8
// let b="8"
// console.log(a==b)

// let a=3
// let num="3"
// console.log(a==num)

// let by=8
// let b="8"
// console.log(by==b)

// let a=9
// let b="9"
// console.log(a===b)

// let num=9
// let b="9"
// console.log(num===b)

// let a=5
// let b=8
// console.log(a===b)

// let a=7
// let b="8"
// console.log(a!=b)

// let a=8
// let b=5
// console.log(a!=b)

// let a=3
// let b=7
// console.log(a!==b)

// let a=5;
// let b=7
// console.log(a!==b)

// let num=9
// let b=8
// console.log(num!==b)

// let a=121
// let b=21
// console.log(a>b)

// let a=7
// let b=3
// console.log(a>=b)

// let a=100
// let b=50
// console.log(a>=b)

// let a=4
// let b=2
// console.log(a<=b)
// o/p- false

/*4. Logical Operators- Conditions combine karne ke liye.
| Operator | Use |   |    |
| -------- | --- | - | -- |
| &&       | AND |   |    |
|          |     |   | OR |
| !        | NOT |   |    |

Example:-
let age = 20
console.log(age > 18 && age < 30); // true
console.log(age > 18 || age < 10); // true
console.log(!(age > 18)); // false*/

// let age=30
// console.log(age>25 && age<24)
// o/p- false

// let age=20
// console.log(age>18 && age<25)
// o/p-true

// let a=5
// let b=4
// console.log(!(a>b))

/*Short Definition:-
NOT operator (!) condition ko reverse karta hai aur true ko false aur false ko true bana deta hai.

example-
let a=9
let b=8
console.log(!(a>b))*/

// let age=17
// if(age>=1){
//     console.log("minar")
// }
// else{
//     console.log("major")
// }

// let a=7
// if(a%2==0){
//     console.log("even no.")
// }
// else{
//     console.log("odd no.")
// }
//  let num=7
//  if(num%2==0){
//     console.log("even")
//  }
//  else{
//     console.log("odd")
//  }

// let num=9
// if(num%2==0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }

// let a=15
// let b=10
// if(a>b){
//     console.log(" a is greater")
// }
// else{
//     console.log("b is small")
// }

// let marks=87;
// if(marks>=80){
//     console.log("A")
// }
// else if(marks>=75){
//     console.log("B")
// }
// else if(marks>=70){
//     console.log("c")
// }

/*Ternary Operator (? :) in JavaScript-

Ternary Operator ek short if-else hota hai.
Iska use condition check karke turant result dene ke liye hota hai ⚡

Syntax-
condition ? true_value : false_value

Matlab:-
Condition true → pehla value
Condition false → dusra value */

// let age=19
//  let result= age>=18 ? "minor":"major"
//  console.log(result)

// let marks=80
// let result=marks>=75 ? "A":"B"
// console.log(result)

// let logIn=true
// let message= logIn>false? "welcome":"hi"
// console.log(message)

// let num=-5
// let result= num>0? "positive":"negative"
// console.log(result)

/*break vs continue-
| break          | continue          |
| -------------- | ----------------- |
| Loop stop      | Loop continue     |
| pura loop band | sirf current skip |
| search me use  | filter me use     |*/

/*Short Definition (Interview)-
break → loop ko stop karta hai
continue → current iteration skip karta hai*/     // Programming me iteration = loop ka ek round / ek step.

// let age=18;
// if(age>=20 && age<=30){
//     console.log("yes")
// }

// else{
//     console.log("no")
// }

// if condition practice -

// let age=20;
// if(age>=18){
//     console.log("yes")
// }


// let age=30
// if(age>=32){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }

// let age=20;
// if(age>=22){
//     console.log("yes")
// }
// else if(age>=18 && age<=22){
//     console.log("hello")
// }
// else{
//     console.log("hi")
// }

// let age=30
// if(age>=32){
//     console.log("you are eligible")
// }
// else{
//     console.log("you are not eligible")
// }

// let age=34
// if(age>=36){
//     console.log("yes")
// }
// else if(age>=34 && age<=35){
//     console.log("ha")
// }
// else{
//     console.log("hello")
// }

// let age =35
// if(age>=37){
//     console.log("yes")
// }
// else{
//     console.log("No")
// }

// let marks=75;
// if(marks>=90){
//     console.log("A")
// }
// else if(marks>=70){
//     console.log("B")
// }
// else if(marks>=65){
//     console.log("c")
// }
// else if(marks>=50){
//     console.log("fail")
// }

// let marks=75;
// if(marks>=90){
//     console.log("A")
// }
// if(marks>=70){
//     console.log("B")
// }
// if(marks>=65){
//     console.log("c")
// }
// if(marks>=50){
//     console.log("fail")
// }

// let day=2;
// switch(day){
//     case 1:
//     console.log("sunday")
//     break;
//     case 2:
//     console.log("monday")
//     break;
//     case 3:
//         console.log("tuesday")
//         break;
//     case 4:
//         console.log("tuesday")
//         break;
//         default:
//             console.log("invalid day")
// }

// Today work 10April:-
/*Boolean ek data type hai jisme sirf 2 values hoti hain:
true
false
Boolean ka use decision lene aur condition check karne ke liye hota hai.*/

/*Simple Rule
if(true)  → if run
if(false) → else run */

// let isLogIn= false;
// if(isLogIn){
//     console.log("yes")
// }
// else{
//     console.log("No")
//     }

// let isLogIn= true;
// if(isLogIn){
//     console.log("yes")
// }
// else{
//     console.log("no")
//     }

// let a=8
// let b=5
// if(a>b){
//     console.log("a is greater")
// }
// else{
//     console.log("b is less")
// }

// JavaScript me Logical Operators ka use multiple conditions ko combine karne ke liye hota hai 🤝
/*
| Operator | Name | Use                 |    |                   |
| -------- | ---- | ------------------- | -- | ----------------- |
| &&       | AND  | Dono condition true |    |                   |
|          |      |                     | OR | Ek condition true |
| !        | NOT  | Reverse condition   |    |                   | */

//example AND -
// let age=10
// if(age>=8 && age<=12){
//     console.log("true")
// }
// else{
//     console.log("false")
// }
// o/p-true

// let age=20
// if(age>=22 && age<=20){
//     console.log("yes")
// }
// else{
//     console.log("No")
// }
// o/p- no


 // 2. OR Operator ( || )- Ek condition true ho to bhi run hoga

//  let isLogIn =true
//  let isUser= false
//  if(isLogIn || isUser){
//     console.log("yes")
//  }
//  else{
//     console.log("NO")
//  }

/*let age=20
let isLogIn= false
if(age>=18 || isLogIn ){
    console.log("yes")
}
else{
    console.log("No")
}
o/p- yes */

/*3.NOT Operator ( ! )- Condition reverse karta hai

Example
let isLogin = false;
if(!isLogin){
  console.log("Please Login");
}

Output:
Please Login

Explanation:
isLogin = false
!false = true */


//  For loop - Jab tumhe pata ho kitni baar loop chalega.

// for(initialization; condition; increment){ 
   // code
// }

 // for(let i=1; i<=5; i++){
//     console.log(i)
// }

// for(let i=1; i<=10; i++){
//     console.log(i)
// }
// for(let i=1; i<=15;i++){
//     console.log(i)
// }

// while loop -Jab tak condition true hai tab tak chalega.

// i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// i=1;
// while(i<=10){
//     console.log(i)
//     i++;
// }

// do...while Loop

// 👉 Ye kam se kam 1 baar zarur chalega.

// let i=1;
// do{
//     console.log(i);
//     i++;
// } while(i<=5);

// let i=1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=10);

// let i=4;
// do{
//     console.log(i)
//     i++;
// }
// while(i<=7)

// condition

// let age=15;
// let name="jhon";
// if(age>=18){
//     if(name=="jhon"){
//         console.log("You can visit")
//     }
//     else {

//  Final Simple Rule-
// 👉 Count pata ho → for loop
// 👉 Condition pata ho → while loop

    // let i=1;
    // while(i<=5){
    //     console.log(i)
    //     i++
    // }

    // for(let i=1; i<=10; i++){
    //     console.log(i)
    // }

    // for(let i=0; i<=3; i++){
    //     console.log("Hello world")
    // }

    // for(let i=0 ; i<=10; i++){
    // if(i%2==0)
    //         {
    //         console.log(i)
    //     }
    // }

    // for(let i=1;i<=17;i++){
    //     if(i%2==0){
    //         console.log(i)
    //     }
    // }
// for(let i=1; i<=10;i++){
//     console.log(5*i)
// }

/*for(let i=1; i<=10;i++){
    if(i%2!==0){
        console.log(i)
    }
}*/ // odd no. print

/*for(let i=0;i<=21;i++){
    if(i%2!=0){
        console.log(i)
    }
}*/ // even no. print

// let i=1
// while(i<=10){
//     if(i%2==0){
//         console.log(i)
//     }
//     i++
// }

// let i=1
// while(i<=24){
//     if(i%2==0){
//         console.log(i)
//     }
//     i++
// } // even no. print

// let i=1
// while(i<=11){
//     if(i%2!==0){
//         console.log(i)
//     }
//     i++
// } // even no.



// let i=1
// while(i<=30){
//     if(i%2!==0){
//         console.log(i)
//     }
//     i++
// }

// let i=1
// while(i<=50){
//     if(i%2!==0){
//         console.log(i)
//     }
//     i++
// }

/*do...while Loop in JavaScript-
Definition-
do...while loop ek aisa loop hai jo code ko pehle run karta hai, fir condition check karta hai. 🔁
👉 Matlab kam se kam 1 baar loop zaroor chalega */

/*syntax-
do{
   code
}while(condition);*/
  
let i=10
do{
    console.log(i)
    i++
} while(i<=5){

}



