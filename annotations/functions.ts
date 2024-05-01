//                                         [Code we add to tell Typescript what type of
// [Type annotations for functions]  ->    arguments a function will receive and what
//                                         type of values it will return]

// [Type inference for functions]    ->    [Typescript tries to figure out what type of
//                                         value a function will return]

// Difference// Type inference only works around the return value from a function

const add = (a: number, b: number): number => {
    return a + b;
}

// [functionName]  = ([param1] : [type], [param2]  : [type])   : [returnType]
//     add         = ( a       : number,   b       : number)   : number

// const add = (a: number, b: number): number => {
//     return 'a + b'; //Type 'string' is not assignable to type 'number'.ts(2322)
// }

// const add = (a: number, b: number) => { // const add: (a: number, b: number) => number
//     return a + b;
// } 
// // type inference came into work here for the return type by looking at the return value inside the function

// ----
// Other syntax for functions
function divide(a: number, b: number): number {
    return a / b;
}

// Anonymous functions assigned to variable
const multiple = function (a: number, b: number): number {
    return a * b;
}

const logger = (message: string): void => { //void return type functions can also return null or undefined
    console.log(message);
}

//never is special type, tells that function will never reach the end of this function nor will it return any value
const throwError = (message: string): never => {
    throw new Error(message)
}

// -- -- -- 
// Destructuring with Annotations

const forecast = {
    date: new Date(),
    weather: 'Sunny'
}

// const logWeather = (forecast: {date:Date, weather: string}): void => {
//     console.log(forecast.date)
//     console.log(forecast.weather)
// }

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date)
    console.log(weather)
}

//Notice how destructirng and annotations are two different structures in the function definition
logWeather(forecast)