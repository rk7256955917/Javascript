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
/*let x="volvo";
let y=45;
let z="Honda";
console.log(10+x+y+z) //10volvo45honda
console.log(10+y+x+z+10+13+12)//55volvohonda1312
console.log(10+10+y+x+z+12) //65volvohonda12
console.log(10+10+x+y+z) //20volvo45honda
console.log(10+1+y+x+z+12) //56volvohonda12 */
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

//  for(let i=1; i<5; i++){
//     console.log(i)
// }
// for(let i = 1; i<=7; i++){
//     console.log(i);
//     i++;
// }
// for(let i = 0; i<5; i++){
//     console.log(i);
//     i = i + 1;
// }
// for(let i = 1; i <= 5; ){
//     console.log(i);
// }

// for(let i = 1; i <= 3; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }
// for(let i=1; i<=10; i++){
//     console.log(i)
// }
// for(let i=1; i<=15;i++){
//     console.log(i)
// }
// for(let i = 1; i <= 5; i++){
//     console.log(i);
//     i++;
// }
// let arr = [10, 20, 30, 40];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// for(let i=1;i<=10;i++){
//     console.log(i)
// }
// for(let i=10;i>=1;i--){
//     console.log(i)
// }
// for(let i=1;i<=20;i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }
// for(let i=1;i<=20;i++){
//     if(i%2!==0){
//         console.log(i)
//     }
// }
// let sum=0
// for(let i=1;i<=10;i++){
//     sum+=i 
// }
// console.log(sum)

// let num=5
// for(let i=1;i<=10;i++){
//     console.log(i*num)
// }

// let count=0
// for(let i=1;i<=50;i++){
// if(i%5===0){
//     count++
//     console.log(i)
// }
// }
// let count=0
// for(let i=1;i<=100;i++){
//     if(i%3===0 && i%5===0){
//         count++
//         console.log(i)
//     }
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

// JavaScript Data Types ka matlab hota hai variable me kis type ka data store ho raha hai.-

// JavaScript me 2 Types ke Data Types hote hain:-
// Primitive Data Types
// Non-Primitive Data Types

// 1. Primitive Data Types (Most Important ⭐)-
// String
// Number
// Boolean
// Undefined
// Null
// BigInt
// Symbol

// 1. String-
// String = Text / Words

// let name = "Rohit"
// console.log(typeof name)

// 2. Number-

// Number = Integer + Decimal-
// let age = 25
// console.log(typeof age)

// 3. Boolean
// Boolean = true / false

// let isLogin = true
// console.log(typeof isLogin)

// 4. Undefined-
// Value assign nahi kiya

// let x
// console.log(typeof x)

// 5. Null-
// Intentional empty value

// let y = null
// console.log(y)

// 6. BigInt-
// Badi number ke liye use hota hai

// let big = 12345678901234567890n
// console.log(typeof big)

// 7. Symbol-
// Unique value create karta hai

// let id = Symbol("id")
// console.log(typeof id)

// 2. Non-Primitive Data Types-
// object

// let person = {
// name: "Rohit",
// age: 25
// }
// console.log(typeof person)

/*
Important Interview Table-
| Data Type | Example    |
| --------- | ---------- |
| String    | "Rohit"    |
| Number    | 25         |
| Boolean   | true       |
| Undefined | let x      |
| Null      | null       |
| Object    | {}         |
| Array     | []         |
| Function  | function() |*/


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
// let num1=21
// let num2=22
// console.log(num1++ + num2++)// 43
// let num=21
// console.log(num++)
// console.log(num)
// let num=21
// let num1=22
// console.log(++num+num1++)
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
  
// let i=1
// do{
//     console.log(i)
//     i++
// } while(i<=5){

// }

// let i=1
// do{
//     console.log(i)
//     i+=2
// }
// while(i<=10)

// let i=1
// do{
//     console.log(i)
//     i+=3
// }
// while(i<=10)

// let password
// do{
//     password=12345
//     console.log("checking passward")
// }while(password!==12345)

// let password
// do{
//     password=12345
//     console.log("checking password")
// }while(password !==12345)

// let menu=1
// do{
//     console.log("show menu")
//     menu++
// }while(menu<=3)

/*for...in Loop- object ke data ko access karne ke liye use hota hai */

// let person={
// name:"rohit",
// age:32,
// }
// for(let key in person)
// {
//     console.log(person[key])
// }

// let person={
//     name:"raj",
//     age:23,
// }
// for(let key in person){
//     console.log(key)
// }

// let person={
//     name:"rohit",
//     age:45,
// }
// for(let key in person){
// console.log(person[key])
// } 

// let person=
// {
//     name:"rohan",
//     age:30,
//     totalPrice:100
// }
// for(let key in person){
//     console.log(key,person[key])
// }
// let i,x='';
// for(i=0; i<5;i=i+2){
//     x+=i
// }
// console.log(x)

// let i,x
// for(i=0; i<=5;i=i+2){
//     x+=i
// }
// console.log(x)

// let i,x=1
// for(i=0;i<6;i++){
//     x+=i
// }
// console.log(x)

// let i,x=''
// for(i=0;i<=5;i++){
//     x+=i
// }
// console.log(x)

/*JavaScript break Statement-
break ka use loop ko beech me hi stop (terminate) karne ke liye hota hai.

Matlab:
Jab condition mil jaye → loop turant band ho jata hai.*/

// for(let i=0;i<=5;i++){
//     if(i==3)
//         break;
//     console.log(i)
// }

// for(let i=0;i<=5;i++){
//     if(i==2)
//         break
//     console.log(i)
// }
// let arr=[0,1,"rohit","raj"]
// for(let i=0;i<arr.length;i++){
//     if(arr[1]=="rohit")
//         break
//     console.log(arr[i])
// }

// let arr=[0,1,2,"rohit","kumar"]
// for(let i=0;i<arr.length;i++){
//     if(arr[1]=="rohit")
//         break
//         console.log(arr[2])
// }

// let arr=[10,20,30,40]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==20){
//         break
//     }
//     console.log(arr[i])        
// }

// for(let i=0; i<=5;i++){
//     if(i==2){
//         break
//     }
//     console.log(i)
// }

// for(let i=0;i<=5;i++){
//     if(i==3){
//         break
//     }
//     console.log(i)
// }


/* JavaScript Set Method Kya Hota Hai 🤔-

Set JavaScript ka built-in object hai jisme unique values store hoti hain.
Matlab → Duplicate values automatically remove ho jati hain.

👉 Set me duplicate allowed nahi hota */

/*Set Banane ka Syntax-

let setName = new Set();*/

/* Set Methods-
| Method   | Use                        |
| -------- | -------------------------- |
| add()    | value add karne ke liye    |
| delete() | value delete karne ke liye |
| has()    | value check karne ke liye  |
| clear()  | sab remove karne ke liye   |
| size     | length check karne ke liye | */

/*Example-
let name = new Set()

name.add("Rohit")
name.add("Raj")
name.add("Rohit")
console.log(name)
o/p-
{"Rohit","Raj"}
👉 Duplicate remove ho gaya */


/*JavaScript continue kya hota hai 🤔-
continue ka use loop me kisi ek step ko skip karne ke liye hota hai.
Matlab → Skip karo aur next iteration pe chalo ⏭️ */

// for(let i=0;i<=5;i++){
//     if(i===3){
//         continue
//     }
//     console.log(i)
// }


// let arr=[10,20,30,40]
// for(let i=0;i<arr.length;i++){
//     if(arr===30){
//         continue
//     }
//     console.log(i)
// }


/*for...of Loop Kya Hota Hai-

for...of loop values ko directly access karta hai

Matlab:

for loop → index se value nikalte hain
for...of → directly value mil jati hai */

/*
Syntax-
for(variable of iterable){
   // code
} */

//    let arr =[10,20,30,40]
//    for(let value of arr){
//         console.log(value)
//    }
    
// let name= "Rohit"
// for(let value of name){
//     console.log(value)
// }

// let arr=["rohit","rohan","raj","ragav"]
// for(let name of arr){
//     console.log(name)
// }

// let user=[10,20,30,40]
// for(let value of user){
//     console.log(value)
// }

    
/*Difference Table-
| Even Number         | Odd Number            |
| ------------------- | --------------------- |
| 2 se divide ho jata | 2 se divide nahi hota |
| Remainder 0         | Remainder 1           |
| 2,4,6,8             | 1,3,5,7               |
*/


// Even no. program-
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// Odd no. program-
// for(let i=1;i<=100;i++){
//     if(i%2!==0){
//         console.log(i)
//     }
// }

// let a =  Math.floor(Math.random()*100);

// console.log(a);
// function checkInput() {
//     let input = document.getElementsByClassName("input")[0].value;
//     if(Number(input) === a ){
//     console.log("you have select correct num");
    
// }else{
//     console.log("you have not entered right number");
    
// }
// }


/*let gameNum = Math.floor(Math.random() * 100) + 1;

console.log("Game Number:", gameNum); // testing ke liye

let guess = prompt("Guess the number between 1 to 100");

while(guess != gameNum){
    
    if(guess > gameNum){
        guess = prompt("Too High! Try again");
    }} */


// 👉 Control Flow = Code ka execution order control karna

/* JavaScript String — 
JavaScript me String ek data type hai jisme hum text, characters, words ya sentences store karte hain.

Simple words me:-
👉 String = Text ko store karne ka tarika */

/* Most Important String Methods (Interview + Project)-
| Method        | Use             |
| ------------- | --------------- |
| length        | string length   |
| toUpperCase() | capital letter  |
| toLowerCase() | small letter    |
| trim()        | space remove    |
| slice()       | part nikalna    |
| replace()     | word change     |
| includes()    | check word      |
| split()       | string to array |
*/

// Practice -
// let name="Rohit"
// console.log(name)

// let name='rohit'
// console.log(name)

// let name ='Rohit'
// let city='delhi'

// console.log(`hello ${name}${city}`) // 👉 ${} se variable add karte hain

// let firstName="Rohit"
// let lastName="Kumar"
// console.log(firstName, lastName)

// let name="Rohit"
// console.log(name[0])
// console.log(name[1])
// console.log(name[2])

// let name="Rohit kumar,raj kumar"
// console.log(name.length)

// let name="Rohit            "
// console.log(name.trim())

// let name="rohit"
// console.log(name.toUpperCase())

// let name="ROHIT"
// console.log(name.toLowerCase())

// let name="Rohit"
// console.log(name.replace())

// let name="Rohit kumar"
// let result= name.split(" ")
// console.log(result)

// let name="Apple Grapes Bnana"
// let result= name.split(" ")
// console.log(result)

// let name="Rohit Raj Rohan"
// let result=name.includes("Raj")
// console.log(result);

// let fruits="banana apple papaya"
// let results=fruits.includes("apple")
// console.log(results)

// let name ="Rakesh kumar"
// let result=name.reduce(" ")
// console.log(result)

// let name="Rohit Raj Rohan"
// console.log(name.includes("Raj"))

// 👉 indexOf() ki priority sabse zyada hoti hai
// 👉 search() advanced cases me use hota hai

// let name="Rohit Raj Mohan"
// console.log(name.includes("Raj"))


// 👉 Number JavaScript ka data type hai jo numeric values store karta hai

// const score= 400
// console.log(score)
// const balence =new Number(100)
// console.log(balence)

// const totalPrice=400
// const balence=new Number(200)
// console.log(totalPrice)
// console.log(balence)

// const score=100
// const balence=new Number(300)
// console.log(score.toString().length)
// console.log(balence.toString().length)

// const number=123.987
// console.log(number.toPrecision(3))

// console.log(Math.round())
// console.log(Math.random())
// console.log(Math.floor(Math.random()*10)+1)

// const min=10
// const max=20
// console.log(Math.floor(Math.random()*(max-min+1))+min)

// const num=
// console.log(Math.floor(Math.random()*10))

// const number="100"
// console.log(parseInt(number))

// const num="45px"
// console.log(parseInt(num))

// const num="452.445"
// console.log(parseFloat(num))

// const num="45542.38484"
// console.log(parseInt(num)*10+1)

 /* Sabka Use Ek Table Me-
| Method        | Use              |
| ------------- | ---------------- |
| Math.random() | random number    |
| Math.floor()  | decimal remove   |
| parseInt()    | string to number |
| toFixed()     | decimal fix      | */
// toPrecision() number ke total digits ko control karta hai (decimal se pehle + baad dono)
// Example-
// let num = 123.456
// console.log(num.toPrecision(3))
// Output-
// 123
/*
| Method        | Work                 |
| ------------- | -------------------- |
| toFixed() -   | decimal control      |
| toPrecision()-| total digits control |
*/

// let random = Math.floor(Math.random()*100)
// console.log(random)

// let random=Math.floor(Math.random()*10)
// console.log(random)

// let num=22.22
// console.log(num.toFixed())

// let Price=Math.random()*10
// console.log(Price.toFixed())

// let num = 123.99
// console.log(Math.floor(num).toString())



/*
📘 JavaScript Foundation Master Question List (Topic-wise)

Covers:

Variables

Data Types

typeof

Operators

Conditions

Ternary

Loops

Total: 50 Structured Questions

🟢 PART 1 – Variables (Q1–Q5)
Q1

Declare a variable name and assign your name. Print it.

Q2

Declare a variable age using let and assign value 25.

Q3

Declare a constant country and assign value "India".

Q4

Change value of let variable and print before and after.

Q5

Try changing const variable value. What happens?

🟢 PART 2 – Data Types (Q6–Q10)
Q6

Create variables with data types:

string

number

boolean

undefined

null

Q7

Print typeof of string variable.

Q8

Print typeof of number variable.

Q9

Print typeof of boolean variable.

Q10

Print typeof of null and explain output.

🟢 PART 3 – typeof Operator Practice (Q11–Q15)
Q11
typeof "Hello"

Q12
typeof 100

Q13
typeof true

Q14
typeof undefined

Q15
typeof null

🟢 PART 4 – Operators (Q16–Q25)
Q16
console.log(10 + 5)

Q17
console.log(10 - 5)

Q18
console.log(10 * 5)

Q19
console.log(10 / 2)

Q20
console.log(10 % 3)

Q21
console.log(5 == "5")

Q22
console.log(5 === "5")

Q23
console.log(10 > 5)

Q24
console.log(10 < 5)

Q25
console.log(true && false)

🟢 PART 5 – Conditions (Q26–Q35)
Q26

Check if number is even or odd.

Q27

Check if person is adult or minor.

Q28

Check if number is positive or negative.

Q29

Find largest of two numbers.

Q30

Find largest of three numbers.

Q31

Check if number is zero.

Q32

Create grade system:

90+ A

80+ B

70+ C

else Fail

Q33

Check if number divisible by 5.

Q34

Check if number divisible by 3 and 5.

Q35

Check if year is leap year (basic logic).

🟢 PART 6 – Ternary Operator (Q36–Q40)
Q36

Check adult/minor using ternary.

Q37

Check even/odd using ternary.

Q38

Check pass/fail using ternary.

Q39

Find greater of two numbers using ternary.

Q40

Check positive/negative using ternary.

🟢 PART 7 – Loops (Q41–Q50)
Q41

Print numbers from 1 to 10.

Q42

Print numbers from 10 to 1.

Q43

Print even numbers from 1 to 20.

Q44

Print odd numbers from 1 to 20.

Q45

Print multiplication table of 5.

Q46

Print sum of numbers 1 to 10.

Q47

Print numbers using while loop.

Q48

Print pattern:

*
**
***
****
*****

Q49
Count numbers divisible by 5 between 1–100.

Q50
Print reverse numbers from 50 to 1.*/
// Q1-
// var name="Rohit"
// console.log(name)

// let age=25
// console.log(age)

// const country="india"
// console.log(country)

//Q4
// let score=30
// console.log("befor:",score)
// score=40
// console.log("after:",score)

//Q5
// const pi=3.14
// pi=30
// console.log(pi) // assignment to const variable

// Data Types Part-2
// Q6
// let num="rohit"
// console.log(typeof(num))

// Q7
// let num=1233
// console.log(typeof(num))

// Q8
// let price=true
// console.log(typeof price)

//9
// let x
// console.log(typeof x)

// let X=null
// console.log(X)

// Q7
// Print typeof of string variable.
// let age="rohit"
// console.log(typeof age)


// Q8
// Print typeof of number variable.
// let age= 45
// console.log(typeof age)

// Q9
// Print typeof of boolean variable.
// let logIn=true
// console.log(typeof logIn)

// Q10
// Print typeof of null and explain output.
//  let num= null 
//  console.log(num)
// Explanation-
// num = null → value null hai
// console.log(num) → null print karega
// typeof num → type check karega
// JavaScript me typeof null = object

// Q11
// typeof "Hello"
// console.log(typeof"Hello")

// Q12
// typeof 100
// console.log(typeof 100)

// Q13
// typeof true
// console.log(typeof true)

// Q14
// typeof undefined
// console.log(typeof undefined)

// Q15
// typeof null
// console.log(typeof null)

//  PART 4 – Operators (Q16–Q25)
// Q16
// console.log(10 + 5)// 15

// Q17
// console.log(10 - 5)//5

// Q18
// console.log(10 * 5)//50

// Q19
// console.log(10 / 2) //5

// Q20
// console.log(10 % 3) //1

// Q21
// console.log(5 == "5")  // true

// Q22
// console.log(5 === "5")  // false

// Q23
// console.log(10 > 5) // true

// Q24
// console.log(10 < 5) // true

// Q25
// console.log(true && false) //false

// 🟢 PART 5 – Conditions (Q26–Q35)
// Q26

// Check if number is even or odd.
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i+"even")
//     }
//     else{
//         console.log(i+"odd")

//     }
// }
// Q27
//  Check if person is adult or minor.
// let age=18
// if(age>=18){
//     console.log("adult")
// }
// else{
//     console.log("minor")
// }

// Q28
// Check if number is positive or negative.
// let number=12
// if(number>0){
//     console.log("positive ")
// }else if(number<0){
//     console.log("negative")
// }
// else{
//     console.log("zero")
// }

// Q29
// Find largest of two numbers.
// const a=12
// const b=8
// if(a>b){
//     console.log("a is largest")
// }else{
//     console.log("b is largest")
// }


// Q30

// Find largest of three numbers.
// const a=123
// const b=124
// const c=200
// if(a>b && b<c){
//     console.log("a is large")
// }else if(b>a && a<c){
//     console.log("b is lagest")
// }
//   else{
//     console.log("zero")
//   }


// Q31
// Check if number is zero.
// let age=0
// if(age==0){
//     console.log("zero")
// }
// else{
//     console.log("not zero")
// }
// Q32
// Create grade system:

// 90+ A

// 80+ B

// 70+ C

// else Fail

// let marks=90
// if(marks>=90){
//     console.log("A")
// }
// else if(marks>=80){
//     console.log("B")
// }
// else if(marks>=70){
//     console.log("c")
// }
// else{
//     console.log("fail")
// }

// Q33

// Check if number divisible by 5.
// let number=10
// if(number%5==0){
//     console.log("divisible by 5")
// }
// else{
//     console.log("not divisible by 5");
    
// }

// Q34
// Check if number divisible by 3 and 5.
//  let num=60
//  if(num%3==0 && num%5==0){
//     console.log("divisible by 3 and 5")
//  } 
//  else{
//     console.log(" Not divisible by 3 and 5")
//  }

// Q35
// Check if year is leap year (basic logic).
// Simple Language me
// 4 se divide → leap ho sakta hai
// 100 se divide → leap nahi
// 400 se divide → fir se leap
// let year=2024
// if((year%4==0 && year%100!==0)||year%400!==0){
//     console.log("leap year")
// }else{
//     console.log("not leap year")
// }

// 🟢 PART 6 – Ternary Operator (Q36–Q40)
// Q36

// Check adult/minor using ternary.
//  let age=30
//  let result=age>=30? "adult":"minor"
//  console.log(result) 
// Q37
// Check even/odd using ternary.
// let num=10
// console.log(num%2==0 ? "even":"odd") 

// Q38

// Check pass/fail using ternary.
// let marks=50
// console.log(marks>=42? "pass":"fail")

// Q39
// Find greater of two numbers using ternary.
// let a=12
// let b=11
// console.log(a>b ? a:b)

// Q40
// Check positive/negative using ternary.
// let value=23
// console.log(value>0 ? "positive":"negative")

// 🟢 PART 7 – Loops (Q41–Q50)
// Q41
// Print numbers from 1 to 10.
// for(let i=1;i<=10; i++){
//     console.log(i)
// }
// Q42
// Print numbers from 10 to 1.
// for(let i=10;i>=1;--i){
//     console.log(i)
// }

// Q43
// Print even numbers from 1 to 20.
// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// Q44
// Print odd numbers from 1 to 20.
// for(let i=1;i<=20;i++){
//     if(i%2!==0){
//         console.log(i)
//     }
// }

// Q45
// Print multiplication table of 5.
// let table=5
// for(let i=1;i<=10;i++){
//     console.log(i*table)
// }

// Q46
// Print sum of numbers 1 to 10.
// let sum=0
// for(let i=1; i<=10;i++){
//   sum = sum+i
// }
// console.log(sum)

// Q47
// Print numbers using while loop.
// let i=1
// while(i<=10){
//     console.log(i)
//     i++
// }

// Q48
// Print pattern:
// *
// **
// ***
// ****
// *****
// let n =5
// for(let i=1;i<=n;i++){
//     let pattern = ""
    
//     for(let j=1;j<=i;j++){
//         pattern += "*"
//     }
//     console.log(pattern)
// }

// Q49
// Count numbers divisible by 5 between 1–100.
// let count=0
// for(let i=1;i<=100;i++){
//     if(i%5==0){
//      count++
//     }
// }
// console.log(count)


// Q50
// Print reverse numbers from 50 to 1.

// for(let i=50;i>=1;i--){
//     console.log(i)
// }

//  function Keyword
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

/*calling function-
Calling Function ka matlab hota hai function ko run / execute karna

Simple Definition-
Function ko banana = Function Declaration
Function ko chalana = Function Calling */

// function greet(){
//     console.log("hello")
// }// function run kiya 
// greet()// Aur yaha pe function call kiya 
/*
| Scope          | Kaha declare      | Kaha use         |
| -------------- | ----------------- | ---------------- |
| Global Scope   | Bahar             | Har jagah        |
| Function Scope | Function ke andar | Sirf function me |
| Block Scope    | { } block me      | Sirf block me    |*/

/* Function Parameters-

Function Parameters ka use function ke andar value receive karne ke liye hota hai.
Ye function ke parentheses ( ) ke andar likhe jaate hain.

Simple words me:-
👉 Parameter = Variable jo function value lene ke liye use karta hai*/

// function  add(a,b){
//     return a+b
// }
//  sum=add(3,4)
// console.log(sum)

// function greet(a,b){
//     return a*b
// }
// mul=greet(3,4)
// console.log(mul)

// function add(a,b,c,d){
//     return a+b+c+d
// }
// add(2,3,3,3)

// function add(a,b){
//    return a+b
   
// }
// add(2,3)
// let result=add(3,3)
// console.log(result)

// function volvo(a,b,c){
//     return a+b+c
// }
// volvo(2,2,8)
// console.log(volvo(2,2,8))

// function test(){
//     let name="Rohit"
//     console.log(name)
// }
// test()
/*
Local Variable Kya Hota Hai ?-
👉 Jo variable function ke andar declare hota hai
👉 Wo sirf function ke andar hi use hota hai
👉 Function ke bahar use nahi hota */
/*
| Local Variable    | Global Variable   |
| ----------------- | ----------------- |
| Function ke andar | Function ke bahar |
| Limited scope     | Everywhere use    |
| Safe              | Risky             |*/

// Example Global variable-
// let name = "Rohit"
// function test(){
// console.log(name)
// }
// test()

// let num=100
// function test(){
//     console.log(num)
// }
// test()

// Example Local variable-

// function car(){
//     let num=100
//     console.log(num)
// }
// car()

// function one(){
//     let num=12
//     console.log(num)
// }
// one()
// {
//     function car1(){
//         let num2=123
//         console.log(num2)
//     }
// }
// car1()
// { function name(){
//     let name="Rohit"
//     console.log(name)
// }
// }
// name()

// function sayHello() {
//   return "Hello World";
  
// }
// sayHello();
// console.log(sayHello())

/*Invoking JavaScript Functions ka matlab hota hai function ko call karna / chalana.

Simple words me:-
👉 Function banana alag hota hai
👉 Function chalana (invoke karna) alag hota hai 
 Example-
 function greet(){
console.log("Hello Rohit")
}
greet() // 👉 greet() likhne ko Invoking Function bolte hain.
*/

/* Maine ek button banaya tha jisme us button ko click krne pe hello aaye yahi uska javascript code hai aur iska id ko html me hai buton ke sath used kr rakha hai.
function car(){
   return "hello"
}
function showData(){
    document.getElementById("demo").innerHTML= car()
} */
//  function greet(){
//     return "hello"
//  }
//  let a=greet()
//  let b=greet()
//  console.log(a)
//  console.log(b)

// function greet(name){
//     return "hello"+name
// }
// greet()
// let a=greet("rohit")
// let b=greet("Raj")
// console.log(a)
// console.log(b)
/*
Calling Function
→ Function ko execute karna

Referencing Function
→ Function ka address dena bina execute kiye */

/* function add(a,b){
return a+b
}
console.log(add)  
console.log(add(2,3))
o/p- 5
👉 add → referencing
👉 add(2,3) → calling */

/*
function add(a,b){
    return a+b
}
add(5)
console.log(add(5))  iska output jo hoga undefined hoga kyun isliye a=5 hai b=undefined hai dono ko ek sath krne pe 5+undefined to value hogi undefined .
a=5
b=undefined
5+undefined= NaN hoga */

// function greet(a,b=10){
//     return a+b
// }
// greet(5,10)
// console.log(greet(5,10))

// function add(a,b=10){
//     return{a,b}
// }
// add(5)
// console.log(add(5))

// function greet(a,b=4){
//     return [a,b]
// }
// greet(19)
// console.log(greet(19))

/* function greet(a,b=2){
    return a,b
}
greet(2,10)
console.log(greet(2,10))

Final Rule
Default value tab use hoti hai jab argument na ho
Argument mil gaya → default ignore
return a,b → last value return */

//  function myFunction(x,y=10){
//     return x+y
//  }
//  myFunction(5,12)
//  console.log(myFunction(5,12))

/* Function Argument Kya Hota Hai-
 👉 Function call karte time jo actual value pass karte hain usko Argument bolte hain.

 
function add(a,b){
    return a+b
}
add(2,3)
console.log(add(2,3)) */

// function add(){
//     console.log([0])
//     console.log([1])
//     console.log([1])
// }
// add(10,20,30)

// function add(a,b){
//     return a+b  
// }
// add(10,12)
// console.log(add(10,12))
// jab hme kitni bhi Argument pass krni ho aur parameters define nhi ho to use Hm argument object bolte hai

// function add(){
// let sum = 0
// for(let i=0;i<arguments.length;i++){
// sum += arguments[i]
// }
// console.log(sum)
// }
// add(2,3,4,5)

// function add(){
//     let sum=0
//     for(let i=0;i<arguments.length;i++){
//         sum+=arguments[i]
//     }
//     console.log(sum)
// }
// add(1,2,3,4)

// function greet(){
//     let result=0
//     for(let i=0;i<arguments.length;i++){
//         result+=arguments[i]
//     }
//     console.log(result)
// }
// greet(1,2,3,2,5)

// let x = 5;
// let y = 6;
// function multiply(a, b) {
//   return a * b;
// }
// multiply(x, y);
// console.log(multiply(x,y))

// let x=4
// let y=7
// function add(a,b){
//     return a*b
// }
// add(x,y)
// console.log(add(4,7))

// function add(a,b){
//     return a*b
// }
// add(4)
// console.log(add(4))

// function greet(a,b){
//     return a*b
// }
// greet(5)
// console.log(greet(5))

// Rest parameter-
// Jab function me multiple arguments ho aur unko ek variable me collect karna ho to Rest Operator use karte hain.

// function add(...numbers){
// console.log(numbers)
// }
// add(1,2,2,3,3,3,)

// function greet(...car){
//     console.log(car)
// }
// greet(1,4,5,5,6,8)
// greet(2,3,3,4,5,5,5)
// greet(5,5,5,66,6,66,3)

// function greet(...numbers){
//     console.log(numbers)
//     console.log(numbers.length)
// }
// greet(1,3,4,5,5)

// function add(...numbers){
//     console.log(numbers)
//     console.log(numbers.length)
    
// }
// add(12,12,134,133)

// x= sumAll(1,2,3,3,3,4,5,5)

// function sumAll(){
//     let sum=0
//     for(let i=0;i<arguments.length;i++){
//         sum+=arguments[i]
//     }
//   console.log(sum)
// }

// function add(...numbers){
//     console.log(numbers)
// }
// add(12,12,3,4,44,44,3)

// y=sumAll(12,12,13,123,223)

// function sumAll(){
//     let sum=0  
//         for(let i=0;i<arguments.length;i++){
//         sum+=arguments[i]
//         }
//         console.log(sum)
// }

// let sum=0
// function add(){
//     for(let i=0;i<arguments.length;i++){
//         sum+=arguments[i]
//     }
//     console.log(sum)
// }
// x=add(12,22,33,33,44,)

// let sum=0
// function sumAll(){
//     for(let i=0;i<arguments.length;i++){
//         sum+=arguments[i]
//     }
//     console.log(sum)
// }
//  sumAll(12,22,33,33,3)

// let age=0
// function sumAll(){
//     for(let i=0;i<arguments.length;i++){
//         age+=arguments[i]
//     }
//     console.log(age)
// }
// sumAll(2,2,2,2)

// function add(...numbers){
//     console.log(numbers)
//     console.log(numbers.length)
// }
// add(12,12,12,123,12)

//  Function Expression-
//  Function ko variable me store karna = Function Expression.

 /*Important Rule-
Function expression me variable name se call hota hai, function name se nahi

let age = function test()
✔ call → age()
❌ call → test() (ye bahar access nahi hota)*/

// let age =function test(a,b){
//     return a+b
// }
// age(2,3)
// console.log(age(2,3))

// let num= function add(a,b,c){
//     return a*b+c
// }
// num(2,4,5)
// console.log(num(2,4,5))

// function fn(){
//     return fn
// }
// const test= function hello(){
//     return "hi"
// }
// console.log(test())

/* Hoisting ka matlab:
 JavaScript code run hone se pehle variables aur functions ko memory me decleare kar deta hai.

.let aur const hoist hote hain, lekin initialization se pahle TDZ me rehte hain.
Isliye TDZ ke dauran variable access karne par ReferenceError aata hai.

Temporal Dead Zone =
 Variable create ho gaya but initialize nahi hua, aur us time access karne par ReferenceError aata hai

 console.log(age)
 var age=10;

 console.log(x)
 let x=21; */

//  console.log(x)
//  const a=20

/*Lexical Scope Kya Hota Hai ?

Lexical Scope = Function jaha define hota hai, wahi se variable ko access karta hai

👉 Matlab
JavaScript call hone ki jagah nahi
define hone ki jagah dekhta hai

example-
var a = 10
function test(){
console.log(a)
}
test()

Kyuki:
test() global me define hai
Global me a = 10 hai
isliye 10 print hua */

// var a=10
// function test(){
//     console.log(a)
// }
// test()

// var a=10
// function test(){
//     console.log(a)
// }
// function test2(){
//     console.log(a)
//     var a=12
// }
// test2()

/* 1. Arrow Functions (=>)-
 Arrow Function = Function likhne ka short (modern) way.
 syntax-
 const functionName = (parameters) => {
   code
 } */
// function sayHello(){
//     console.log("hello rohit")
// }

/* arrow function already ek function expression hai but islie jab hm function keyword used kr rahe hai to jab run kr rahe hai to unexcceted toekn aa raha hai jb isko isko normal function me likhange bina arrow function used kiye to ye run karega but arrow function ke sath function keyword ke sath work nhi karga iske let,const keyword used karenge to ye run kr lega.
 function num=(a,b)=>a+b {
     console.log(num(2,3))
 }*/


/*Yaha main jo a+b ke baad me curly Brces jo diya hu to ye unaccepted error aayega kyunki curly Braces de dene ke badd me hmko return bhi krana padta hai. kyunki ye block ke aander me jata hai isliye return krna padta hai aab next ager hmko direct run krana hai to curly Braces dene ki jarurat nhi hai thik hai assani se code run ho jaega.
 const add=(a,b)=>a+b {
     console.log(add(2,3))
 } */

//  let add=(a,b)=>a*b
//  console.log(add(2,4))

// const greet=(a,b,c)=>a*b+c
// console.log(greet(2,3,4))

// this- this ka uesd mostly tb krte hai job koi same function multiple object pe used krna ho to this ka used krte hai aur work krta hai jb koi varible ya koi function ho jab tk usko call nhi kraye tb tk this work nhi karega matlab ki this work hota function ko call krne  pe functon call hone baad jo dot ke left hota hai wahi this ka work krta hai. 

// const obj={
//     name:"rohit",
//     show(){
//         console.log(this.name)
//     }
// }
// obj.show()

// const car={brand:"bmw"}
// const car1={brand:"volvo"}
// function show(){
//         console.log(this.brand)
//     }
// show.call(car)
// show.call(car1)

// let age={
//     name:"Rohit",
//     age:23,
//     show(){
//     console.log(this.name,this.age)
// }
// }
// age.show()

// let person=()=>({
//     name:"Rohit",
//     age:30
// })
// console.log(person())

// const age=(a,b)=>a+b
// console.log(age(2,3))
  

// const person=(a,b,c)=>a*b+c
// console.log(person(2,3,2))

/*
| Function Type    | this           |
| ---------------- | -------------- |
| Regular Function | calling object |
| Arrow Function   | outer scope    |

👉 Regular function me this change hota hai
👉 Arrow function me this change nahi hota */

/* Callback Function =
Ek function ko dusre function ke andar argument ki tarah pass karna aur baad me usko call karna.
Simple words me:
👉 Function ke andar function call karna (baad me) = Callback Function */
// ex-
//  function greet(name) {
//    console.log("hello"+name)
// }
// function user(callback){
//     let name ="Rohit"
//     callback(name)
// }
// user(greet)
// function add(name,age){
//     console.log("hello"+name+age)
// }
// function user(callback){
//     let name="Rohit"
//     let age=23
//     callback(name,age)
// }
// user(add)

// function greet(name,age,price){
//     console.log("hello"+name+age+price)
// }
// function user(callback){
//     let name="Raj"
//     let age=21
//     let price=234
//     callback(name,age,price)
// }
// user(greet)

// function greet(name,age,price){
//     console.log(["hello",name,age,price])
// }
// function user(callback){
//     let name="rohit"
//     let age=22
//     let price=2323
//     callback(name,age,price)
// }
// user(greet)
 
// Pure function-  esa function jo bahar ki value na badale  usko hm bolenge pure function.
// impure function- Esa function jo bahar ki value badal de to usko bolenge impure function.
// function abcd(){
//     return "hi";
// }
// function user(a){
//     return a + 1;
// }
// let a = 12;
// console.log(abcd());   // hi
// console.log(user(a));  // 13

// closures- Ek function jo return kare ek function aur return hone wala function hamesha used karega ek parent hone wala variable.
// function user(){
//     let a=12
//     return function(){
//         console.log(a)
//     }
// }
// let a= user()
// a()
// function greet(){
//     let a=132
//     return function (){
//         console.log(a)
//     }
// }
// let a=greet()
// a()
// function car(){
//     let num=["Rohit",12,13,16]
//     return function(){
//         console.log(num)
//     }
// }
// let num=car()
// num()

/* 👉 Inner function outer ke variables use kar sakta hai = lexical scope
function abcd(){
    let a=10
    function defg(){
        let b=12
    function ghij(){
        let c=15
        console.log(a,b,c)
    }
    ghij()
    }
    defg()
}
abcd() */


// function user(){
//     let a=9
//     function greet(){
//         let b=6
//         function number(){
//             let c=8
//             console.log(a,b,c)
//         }
//         number()
//     }
//     greet()
// }
// user()


// function car(){
//     let num=20
//     return function(){
//       console.log(num)
//     }
// }
// let num=car()
// num()






/* Object- Multiple value ko ek variable and function me store krna.
Aur value stored hm krte hai key:value pair me aur function ko key:function() pair method me .
example-
const car={
type:"Fiat",
modal:"500",
color:"white"
}
-isme type,modaland color property and Fiat,modal and color property value hai.

| Feature         | Example        |
| --------------- | -------------- |
| Object create   | `{}`           |
| Key value       | `name:"Rohit"` |
| Access value    | `person.name`  |
| Function inside | `greet()`      |*/

// let person={
//     name:"rohit",
//     age:22,
// }
// console.log(person)

// let car={
//     type:"bmw",
//     modal:"223",
//     price:"4000"
// }
// console.log(car.modal)

// const name={}
// name.name="rohit"
// name.age=21
// console.log(name)

// const person={}
// person.name="rohit"
// person.age=21
// console.log(person)

// const person=new object({
//    name:"rohit",
//    age:23
//  })
//  console.log(person.name)

// function abcd(val){
//     val();
// }
// abcd(function(){
//     console.log("hi")
// });

// function abcd(val){
//     val();
// }
// abcd(function(){

// })

// function greet(){
// let firstName="Rohit"
// let age=23
// let lastName="Kumar"
//    return firstName+""+lastName+age
// }
// console.log(greet())

// this= this ka used hm current object ki property acess krne ke liye krte hai
// const person={
//     firstName:"Rohit",
//     age:23,
//     lastName:"kumar",
//      full:function(){
//         return this.firstName+""+this.lastName
//     }
// }
// console.log(person.full())


// const greet={
//     name:"rohti",
//     age:21,
//     last:"kumar", 
//     full:function(){
//         return this.name+""+this.last+age
//     }
// }
// console.log(greet.full())

// const person={
//     name:"ronhti",
//     age:23
// }
// console.log(person.name)

// const person={
//     name:"rohit",
//     age:23
// }
// console.log(person.name+""+person.age)\
// const person={
//     name:"rohit",
//     age:23
// }
// console.log(person.age)

// Object me in ka used kyun krte hai-
// Object me in used isliye krte hai ki object ki property check krne ke liye krte hai.
//“in operator ka use object me property (key) exist karti hai ya nahi, ye check karne ke liye hota hai.”
// const person={
//     name:"raj",
//     city:"",
//     age:23
// }
// console.log("name" in person);
// console.log("city" in person);
// console.log("age" in person);

// const greet={
//     name:"raj",
//     age:23,
//     city:"delhi",
    
// }
// console.log("name" in greet)
// console.log("age" in greet)
// console.log("city" in greet)
// console.log("price" in greet)

/* Object methods - object ke ander jo function hota hai usko method bolte hai.
🔥 Interview Line-
👉 “Object methods are functions stored inside objects used to perform operations on object data.”

| Property   | Method               |
| ---------- | -------------------- |
| Data store | Function store       |
| name, age  | greet(), showMarks() |*/

// const person={
//     name:"raj",
//     age:23,
//     greet:function(){
//         return "ho"+this.name;
//     }
// }
// console.log(person.greet())

/* this ka matlab hota hai "current object".
this-> jis object ke ander method chal raha hai this us object ko refer krta hai.

const person={
    firstName:"raj",
    age:21,
    lastName:"kumar",
    fullName:function(){
        return this.firstName+""+this.lastName
    }
}
console.log(person.fullName()) */

// const greet={
//     name:"rohan",
//     age:22,
//     last:"kumar",
//     fullName:function(){
//         return this.name+""+this.last+""+this.age
//     }
// }
// console.log(greet.fullName())

/* javascript Display object-

👉 Object display = object ke data ko screen pe dikhana

🔥 Interview Line-
👉 “Displaying an object means showing its properties and values using methods like console.log, alert, or JSON.stringify.”

Some solutions to display JavaScript objects are:-

Displaying the Object Properties by name
Displaying the Object Properties in a Loop
Displaying the Object using Object.values()
Displaying the Object using JSON.stringify() */

// javascript constructor-

// function person(name,age,price,color){
//     this.name=name;
//     this.age=age;
//     this.price=price;
//     this.color=color;
// }
// const myfather= new person("rohit",23,569,"blue")
// console.log(myfather)

// function greet(name,age,price,color){
//     this.name=name,
//     this.age=age,
//     this.price=price,
//     this.color=color
// }
// const mynum= new greet("rohit",23,500,"black")
// console.log(mynum)
// 🔥 Interview Line-
// 👉 “Built-in constructors are predefined functions in JavaScript used to create standard objects like Array, Object, Date, etc.”
// console.log(carName)
//  let carName = "Volvo";
// const carName;
/* strict javascript-
🔥 Kyun Use Karte Hain (Real Reason)
✔️ Bugs jaldi pakadne ke liye
✔️ Safe code likhne ke liye
✔️ Interview + real project standard

🔹 Ek Line Me Final-
👉 Strict mode = safe, clean aur bug-free JavaScript

🔥 Interview Power Line-
👉 “Strict mode prevents silent errors and enforces better coding practices in JavaScript.” */

// let num=["apple","rojfn","sddjnsejn"]
// num[0]="black"
// num.push(20)
// console.log(num)
// const arr=["apple","banana","papaya"]
// console.log(arr)

// const arr={firstName:"rohit",age:23,lastName:"Kumar"}
// console.log(arr)

// const arr=["apple","banana","rohit"]
// console.log(arr.length-1)

// const arr=["rohit","banana","apple","Raj"]
// console.log(arr[2])

// const arr=["apple","banana","blue"]
// console.log(arr.toString())

// const arr=["rohit","kaplir","raj","om"]
// console.log(arr.shift())// Remove the all array in the first in another remove 

// const arr=["rohit","rahul","nitish","raj"]
// arr.unshift("lemon")
// console.log(arr)
// const arr=["rohit","raj","ragav","raj"]
// arr.unshift(2)
// console.log(arr)// unshift se hm suru me jo bhi kuchh add krna chahte hai add kr sakte hai.

// const arr=["rohit","raju","ragav","ramu"]
// arr.splice(2)
// console.log(arr)

// const arr=[1,2,3]
// arr.splice(1,0,99)
// console.log(arr)
// map()- map() mathod ek array hai jo hm har element ko tranform kr ek new array bnate hai.

// interview line -
// Map() is used to tranfrom for each Element of an Array and  return a new Array. 

// let arr=[10,30,40]
// let result=arr.map(n=>n*2)
//     console.log(result)

// let arr=[2,3,4]
// let nums=arr.map(n=>n*2)
// console.log(nums)

// let person=[2,3,4]
// let result=person.map(n=>n+10)
// console.log(result)

// let arr=[1,2,3,45,3]
// let result=arr.map(n=>n-2)
// console.log(result)

// let arr=[2,3,3,4,5,"rohti","raj"]
// let nums=arr.map(n=>n/2)
// console.log(nums)

// let arr=[4,45,6,5]
// let results=arr.map(n=>n*2)
// console.log(results)

// let arr=["rohti","rajkumar"]
// let results=arr.map(str=>str.length)
// console.log(results)

// let num=["rohit","rahul","kumar","rama"]
// let results=num.map(str=>str.length)
// console.log(results)

// let arr=[1,3,44,44]
// let results=arr.map(str=>str.toString())
// console.log(results)

// let users=[
// {name:"rohit",age:23}]
// let results=users.map(users=>`${users.name}${users.age}`)
// console.log(results)

// let arr=[
//     {name:"Rohit", last:"raj",age:22,price:233},
//     {name:"raj",last:"raja",age:23,price:2333}
// ]
// let results=arr.map(arr=>`${arr.name}${arr.last} ${arr.age} ${arr.price}`)
// console.log(results)

/*
💡 Agar interviewer cross-question kare:-

👉 “Why was it called scripting language earlier?”
Answer:
“Kyuki pehle JavaScript browser ke andar chhote tasks jaise form validation aur DOM manipulation ke liye use hoti thi.”

💡 Agar pooche:-
👉 “Why is it programming language now?”
Answer:-
“Kyuki ab JavaScript backend (Node.js), APIs, aur full applications banane ke liye use hoti hai.”
🧠 Pro tip:
Confident tone me bolo
“Originally” + “Now” ka use karo
👉 Interviewer ko lagega tumhe evolution pata hai
🎯 Final cheat line:

👉 “Originally scripting, now full programming language” */

// let arr=[
//     {name:"rohit",age:22},
//     {name:"aman",age:23}
// ]
// let result=arr.map(arr=>arr.name)
// console.log(arr)

// let users=[
//     {name:"rahul",age:21},
//     {name:"rohit",age:21}
// ];
// let results= users.map(user=>{
//     return{
//         name:user.name,
//         age:user.age,
//         userName:"raj",
//         userAge:21, 
//     }
//     });
//     console.log(results)

// let users=[
//     {name:"ragav",age:21},
//     {name:"ragav",age:21}
// ];
// let results=users.map(user=>{
//     return{
//         name:user.name,
//         age:user.age,
//         userName:"ramesh",
//         UserAge:22
//     }
// });
// console.log(results)

// let users=[
//     {name:"Ramu",age:21},
    
// ]
// let results=users.map(user=>{
//     return{
//        name:user.name,
//        age:user.age,
//         userName:"Raja",
//         userAge:22
//     }
// })
// console.log(results)

// let users=[
//     {name:"rohit",age:21}
// ]
// let results=users.map(user=>{
//     return user.age>=21? "yes":"No"
// })
// console.log(results)

// let users=[
//     {name:"Rohit",age:20}
// ]
// let results=users.map(user=>{
//     return user.age>=18? "Yes":"No"
// })
// console.log(results)

// filter()- filter() ek array method hai jo condition ke base pe element ko select krta hai.new array return karta hai sirf wo elements deta hai jo condition pass kare.
// 🎯 Interview Line-
// 👉 “filter() is used to return elements that satisfy a given condition.”
/*
| map                 | filter                   |
| ------------------- | ------------------------ |
| transform karta hai | select karta hai         |
| size same rehta hai | size change ho sakta hai | */

// let users=[1,2,3,4,12,14,16]
// let results= users.filter(user=>user>4);
// console.log(results);

// let users=[12,13,14,15]
// let results=users.filter(user=>user>12)
// console.log(results)

// let users=["rohit","rahul","raja"]
// let results=users.filter(user=>user>"raja")
// console.log(results)

// let users=[
//     {name:"rohit",age:21},
//     {name:"rahul",age:15}
// ]
// let adults=users.filter(user=>user.age>=18)
// console.log(adults)

// let arr=[
//     {name:"rohit",age:21},
//     {name:"rahul",age:25}
// ]
// let adults=arr.filter(n=>n.age>=22)
// console.log(adults)

// let users=[
//     {name:"rohit",age:19}
// ]
// let adults=users.filter(user=>user.age>=19)
//            users.map(user=>user.name)
//            console.log(adults)/

// let users=[
//     {name:"rohit",age:21},
//     {name:"rahul",age:22},
//     {name:"hemshankar",age:23}
// ]
// let results=users.filter(user=> user.age>=18 && user.name.startsWith("r"))
//             console.log(results)

// let users=[
//     {name:"Rohit",age:21},
//     {name:"Ramu",age:22},
//     {name:"amit",age:21},
//     {name:"aakash",age:25}
// ]
// let results=users.filter(user=>user.age>=20 && user.name.startsWith("a"))
// console.log(results)

// reduce()

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);
// function myFunction(total, value) {
//   return total + value;
// }
// console.log(sum)

// const users=[1,2,2,3,34,21]
// let sum=users.reduce((sum,n)=> sum + n,0)
// console.log(sum)

// let num=[1,3,34,23,234]
// let sum= num.reduce((sum,n)=> sum+n,0)
// console.log(sum)

// const arr=[1,233,-112,22,-100]
// const sum=arr.reduce((sum,arr)=>sum+arr,0)
// console.log(sum)

// const users=[10,10,199,100]
// const sum=users.reduce((sum,n)=>sum+n,10)
// console.log(sum)

// const arr=[10,10]
// const sum=arr.reduce((sum,arr)=>sum+arr,20)
// console.log(sum)

// let cart=[
//     {price:220,quality:2},
//     {price:300,quality:3}
// ]
// let results=cart.reduce((acc,item)=>{
//     return acc+item.price*item.quality
// },0)
// console.log(results)

// let arr=[
//     {price:200,quantity:2},
//     {price:900,quantity:3}
// ]
// let sum= arr.reduce((n,item)=>{
//     return n+item.price*item.quantity
// },0)
// console.log(sum)

// let cart=[
//     {price:1330,quantity:2},
//     {price:200,quantity:3}
// ]
// let sum=cart.reduce((acc,item)=>{
//     return acc+item.price-item.quantity
// },0)
// console.log(sum)

// let cart=[
//     {price:200,qulity:2},
//     {price:300,qulity:3}
// ]
// let sum= cart.reduce((acc,item)=>{
//     return acc+item.price/item.qulity
// },0)
// console.log(sum)


// let cart=[
//     {price:200,quality:3},
//     {price:300,quality:4}
// ]
// let sum=cart.reduce((acc,item)=>{
//     return acc+item.price*item.quality
// },0)
// console.log(sum)

// let cart=[
//     {name:"rohit",age:21},
//     {name:"raj",age:22}
// ]
// let result=cart.reduce((acc,user)=>{
//     if(!acc[user.age]){
//         acc[user.age]=[];
//     }
//     acc[user.age].push(user)
//     return acc
// },{})
// console.log(result)

// let user=[
//     {name:"AK",age:21},
//     {name:"Nk",age:32},
//     {name:"ak",age:23},
//     {name:"bk",age:21}
// ]
// let results=user.reduce((acc,user)=>{
//     if(!acc[user.age]){
//         acc[user.age]=[]
//     }
//     acc[user.age].push(user)
//     return acc
// },{})
// console.log(results)

// let user=[1,2,3,4,5]
// let results=user.reduce((acc,user)=>{
//     if(user%2===0){
//         acc.even.push(user)
//     }
//     else{
//         acc.odd.push(user)
//     }
//     return acc
// },{even:[],odd:[]})
// console.log(results)

// let num=[10,11,13,20,21]
// let results=num.reduce((acc,num)=>{
//     if(num%2===0){
//         acc.even.push(num)
//     }
//     else{
//         acc.odd.push(num)
//     }
//     return acc
// },{even:[],odd:[]})
// console.log(results)

// let num=[
//     {name:"Rohit",age:20}
// ]
// let result=num.reduce((acc,num)=>{
//     if(num>=18){
//         console.log("Yes")
//     }
//     else{
//         console.log("No")
//     }
//     return acc
// },{}) // iska output no kyun kyuki iska jo value and diya hu ye object me isiliye ye object ko nhi leta hai ager ager isko condition ke based pe ager isko  chalna hai to foreach ka used krne chal jaengi.let num=18 ese lete hai to to ye condition chalegi.



  /*forEach()- forEach() ek javascript array method hai jo har element pe loop chalata hai.
 syuntax-
 arr.forEach(arr=>{
    // code
 }) */
// let user=[1,2,3,4,5,6,7]
// user.forEach(user=>{
//  console.log(user)
// })

// let arr=[11,23,44,555]
// arr.forEach(arr=>{
//     console.log(arr)
// })

// let user=[
//     {name:"Rohit",age:22},
//     {name:"raju",age:20}
// ]
// user.forEach(user=>{
//     if(user.age>=21){
//         console.log("yes")
//     }
//     else{
//         console.log("no")
//     }
// })

// let user=[12,12,34,444]
// user.forEach(user=>{
//     console.log(user)
// })

// let num=[
//     {name:"raju",age:21},
//     {name:"ram",age:23}
// ]
// num.forEach(num=>{
//     if(num.age>=22){
//         console.log("You are eligible")
//     }
//     else{
//         console.log("You are not eligible")
//     }
// })

/*🔹 find() kya hota hai?-
👉 find() ek array method hai
👉 jo condition ke basis par pehla matching element return karta hai

🎯 Simple line-
find = jo pehla item condition satisfy kare usko return karo */

// let arr=[1,3,4,5,10,12,20]
// let sum=arr.find(arr=>arr>12)
//     console.log(sum)

// let user=[
//     {name:"raj",age:20},
//     {name:"rohit",age:22},
//     {name:"raju",age:25}
// ]
// let result=user.find(user=>user.age>=21)
// console.log(result)

// includes method- includes method ka uesd  isiliye krte hai ye array me value hai ya nhi ager hoga to output me true show hoga ager oo value nhi hoga to output me false show hoga.

// let arr=[1,2,3,44,4,"java"]
//     console.log(arr.includes(2))
//     console.log(arr.includes(5))
//     console.log(arr.includes(6))

// let user=["javascript",24,4556,34]
// console.log(user.includes(24))
// console.log(user.includes(332))

// Destructring 

// let user=[1,2,3,4]
// let [a, ,c]=user
// console.log(a)
// console.log(c)

// let user={
//     name:"rohit",
//     age:23
// }
// let{name,age}=user
// console.log(name)
// console.log(age)

// let user=[12,12,13,22,12]
// let[a, ,c,d]=user
// console.log(a)
// console.log(c)

// let user={
//     name:"ak",
//     age:21,
//     price:233
// }
// let {name,age,price}=user
// console.log(name)
// console.log(age)
// console.log(price)

// let user={
//     name:"rohit",
//     age:21,
//     price:232,
//     city:"delhi"
// }
// function showuser({name,age,price,city}){
//         console.log(name,age,price,city)
// }
// showuser(user)

// let user={
//     name:"rojhti",
//     age:23,
//     city:"delhi"
// }
// let{name,age,city}=user
// console.log(name)
// console.log(age,city)

// let demo=document.getElementById("demo");
// console.log("demo")
//  demo.innerHTML="hello rohit";
//  demo.style.color="red"

// let input=document.getElementById("input");
// let btn=document.getElementById("btn");
// let list=document.getElementById("list");

// btn.addEventListener("click",()=>{
//     console.log("clicked");
// })

// let a = document.querySelector("a");
// a.setAttribute("href","https://www,google.com")

/* Any text ya name print krna ho kuchh iska html code start Node.21-24 tk baki ka jo javascript ye HTMLDetailsElement.
let input= document.getElementById("input");
let btn= document.getElementById("btn");
let list= document.getElementById("list");

input.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
    btn.click();
    }
});

btn.addEventListener("click",()=>{
    let value= input.value.trim();
    let items= list.querySelectorAll("li");

    for(let item of items){
        if (item.innerText.trim().toLowerCase() === value.toLowerCase()){
        alert("already exits");
        return;
    }
}

    let li=document.createElement("li");

    li.innerText=input.value;
    input.value="";
    list.appendChild(li);
    li.addEventListener("click",()=>{
        li.remove();
    });
}); 
*/


/* conut inc/dec krna no. ko
let countEl= document.getElementById("count");
let inc= document.getElementById("inc");
let dec= document.getElementById("dec");

    let count=0;
inc.addEventListener("click",()=>{
        count++;
        countEl.innerText=count;
});
    
dec.addEventListener("click",()=>{
    count--;
    countEl.innerText=count;
}); */

// let h1= document.createElement("h1");
//  h1.innerText="hello world rfrgrttgrtgrh";
//  document.querySelector("body").prepend(h1);

// let h1= document.createElement("h1");
// h1.innerText="hello vvfdfgfd";
// document.querySelector("body").append(h1);

// let h1= document.createElement("h1");
// h1.innerText="hello world";
// document.querySelector("body").prepend(h1);
// h1.style.color="red";

// let buynow= document.querySelector(".buy-now");
// console.log(buynow)

let n=4;
for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<n;j++){
       row+="*"
    }
    console.log(row);
}
