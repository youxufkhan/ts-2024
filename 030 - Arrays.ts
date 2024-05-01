// [Typed Arrays]      ->      [Arrays where each element is some consistent type of value]
// 
// One big difference with arrays in Typescript is that generally we only stck elements with a very consistent type
// 

// const carMakers = ['ford', 'toyota', 'chevy']  //const carMakers: string[]
//                                                 // Type inference ^

// const carMakers = []
// ^Type inference ^ --- avoid this

// const carMakers: string[] = []
//    ^ Type annotation



const carMakers: string[] = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()] // const dates: Date[]

const carsByMakes = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

// const carsByMakes: string[][] = [
// ]
// ----------------------- //// ------------------ //
// //
//                                     [TS can do type inference when extracting values
//                                     from an array]
//
//                                     [TS can prevent us from adding incompatible values
//                                     to the array  ]  
// // // [Why Typed Arrays]    ----->    
//                                     [We can get help with 'map', 'forEach', 'reduce'
//                                     functions]
//
//                                     [Flexible - arrays can still contain multiple different
//                                     types]
// //

// Help with inference
const car = carMakers[0]   // const car: string
const myCar = carMakers.pop() // const myCar: string | undefined

// Prevent incompatible values
// carMakers.push(100)     //Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)


// Help with map, reduce, foreach.....
carMakers.map((car: string): string => {
    return car.toUpperCase();
})

// Flexibile - Multiple types 
// const importantDates = [ new Date(), '2030-10-10' ] //const importantDates: (string | Date)[]
//                                                         ^ Type inference

const importantDates : (Date | String)[] = [ new Date(), '2030-10-10'] // Type annotation
