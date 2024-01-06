"use strict"; // treat all JS code as newer version

// alert("HEllO");

let age;
age = 34.4;

// primitive types

// number => up to 2^53
// bigInt
// string => "Santosh"
// boolean => true/false

// null => standalone value
// undefined => not known
// symbol => unique

// object

// console.log(typeof undefined) // undefined
// console.log(typeof null) // object

/* ------------------------------------------------ */
// // string, boolean, null, undefined -> number conversion using Number()

// let score = "Hitesh"

// console.log(typeof(score))

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)

// // returns NaN => Not a Number
// console.log(valueInNumber)

// "33" => 33; type => Number
// "33ab" => NaN; type => Number
// true => 1; false => 0; type => Number
// null => 0; number
// undefined => NaN; type => Number

/* ------------------------------------------------ */
// string -> boolean using Boolean()
// let isLoggedIn = "";

// let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

/* ------------------------------------------------ */
// number -> string using String()

// let number = 33

// let stringNumber = String(number)

// console.log(stringNumber)
// console.log(typeof stringNumber)

// number => string
// null => null; type => string
// undefined => undefined; type => string

/* ------------------------------------------------ */

// const x = Symbol("HELLO!")
// console.log(x)
// console.log(typeof x)

/* ------------------------------------------------ */

// let value = 3
// let negValue = -value
// console.log(negValue)

let str1 = "Santosh"
let str2 = " Bhaykatte"

// let str3 = str1 + str2
// console.log(str3)
// // console.log(str1 + str2)

// console.log("1" + 2 + 2) // returns 122

// console.log(1 + 2 + "2") // adds 1 & 2 concatenates with "2"

// console.log(+true) // returns 1
// console.log(+"") // returns 1

/* -------------------------------------- */

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2
// console.log(num1)

/* -------------------------------------- */
// console.log("2" > 1)

// console.log(null > 0)  // false
// console.log(null == 0) // false
// console.log(null >= 0) // true

/* -------------------------------------- */

// === 

console.log("2" == 2);
console.log("2" === 2);
console.log(2 !== "2"); // true
