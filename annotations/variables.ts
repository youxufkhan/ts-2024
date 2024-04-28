// Example of type annotation

let apples: number = 5; //  :number -> is type annotation

// const apples: number = true; //Type 'boolean' is not assignable to type 'number'.ts(2322)

// let apples: number = 5;
// apples = 'asdas' //Type 'string' is not assignable to type 'number'.ts(2322)


let speed: string = 'fast';
// let speed: string = 10; //Type 'number' is not assignable to type 'string'.ts(2322)

let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue']
// array of strings ^

let myNumbers: number[] = [1, 2, 3]
// array of numbers

let truths: Boolean[] = [true, false, false]

// Classes

class Car {

}
let car: Car = new Car();

// Object literal
// let point = {
//     x:10,
//     y:20
// }

let point: { x: number, y: number } = {
    x: 10,
    y: 20
}

//Function
// const logNumber = (i) => {
//     console.log(i)
// }

const logNumber: (i: number) => void = (i: number) => { // (i: number) => void is the annotation here
    console.log(i)
}

let banana = 5; //let banana: number
// This above is type inference 
// banana = 'apple' // Type 'string' is not assignable to type 'number'.ts(2322)

// ---------------
// Type inference
// 
// [Variable declaration]      [Variable initialization]
//     const        color   =               red

// If the declaration and initialization are on the same line without type annotation, typescript will 
// figure out the type of variable for us

// Why and when to use type annotation or type inference

//        Type annotation                                 Type inference
//            \                                               \
//             \                                               \
//              >                                               >
//        [When we declare a variable on                      [Always]
//        one line then initialize it later] 
//
//        [When we want a variable to have a 
//        type that cant be infered ]
//
//        [When a function returns the 'any' 
//        type and we need to clarify the 
//        value]


// When to use annotations
// 1) Function that returns 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates = JSON.parse(json)
console.log(coordinates) // {x:10, y:20}


// const coordinates: any
// (method) JSON.parse(text: string,
// reviver?: ((this: any, key: string, value: any) => any) | undefined): any

// We need to understand how JSON.parse works for different values
//  Passed Value                                                        Return Value
//  ['false']                   ->            JSON.parse()  ->          [boolean]
//  ['4']                       ->            JSON.parse()  ->          [number]
//  ['{"value:5"}']             ->            JSON.parse()  ->          [{value:name}]
//  ['{"name":"alex"}']         ->            JSON.parse()  ->          [{name:string}]


// Typscript decides to set return type to any, meaning it has no idea what type will be returned.
//  ['false']            \___                
//  ['4']                    \ ___\  [any]
//  ['{"value:5"}']       ___/    /        
//  ['{"name":"alex"}']  /                   



//                 [A type just as 'string' or 'boolean' are]
// [any]      -->  [Means TS has no idea what this is - can't check for correct property references]
//                 [//Avoid variables with 'any' at all costs//]


// Fixing Any Type 
const json1 = '{"x": 10, "y": 20}'
const coordinates1: {x:number, y:number} = JSON.parse(json1)
console.log(coordinates1) // {x:10, y:20}
// coordinates1.abc // Property 'abc' does not exist on type '{ x: number; y: number; }'.ts(2339)


// When to use annotations
// 2) When we  declare a variable on one line and
//  initialize it later

let a;
a = 1 // let a: any

let words = ['red', 'green', 'blue']
let foundWord; // Variable 'foundWord' implicitly has an 'any' type, but a better type may be inferred from usage.
// let foundWord: boolean;

for(let i = 0;i< words.length; i++){
    if(words[i] === 'green'){
        foundWord = true //let foundWord: any
    }
}

// When to use annotations
// 3) Variable whose type cannot be infered correctly
let numbers = [-10,-1,-12]
// let numbersAboveZero = false; // let numbersAboveZero: boolean
let numbersAboveZero: boolean | number = false; // let numbersAboveZero: number | boolean

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element > 0){
        numbersAboveZero = numbers[i] // Type 'number' is not assignable to type 'boolean'.ts(2322)
    }
}