//  //  //  Tuple

// Tuple ---->     [    Array-like structure where each element
//                      represents some property of a record        ]


// Object representing a 'drink'

//        [color]       -->   [brown]
//        [carbonated]  -->   [true]
//        [sugar]       -->   [40]


//        ['brown', true, 40]


const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

//  Array representation
const pepsi = ['brown', true, 40]   //  const pepsi: (string | number | boolean)[]   
pepsi[0] = 40
//Tuple
const pepsi2: [string, boolean, number] = ['brown', true, 40]
// pepsi2[0] = 40      //Type 'number' is not assignable to type 'string'.ts(2322)

// Type composition for Tuple / Type alias
type Drink = [string, boolean, number]
const sprite: Drink = ['clear', true, 40]


const carSpecs: [number, number] = [400, 3354]

const carStats = {
    horsepower: 400,
    weight: 3354
}