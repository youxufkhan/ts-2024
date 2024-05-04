//                               [   Blueprint to create an object with some fields
//       [Classes]      --->        (values) and methods (functions) to represent
//                                                   a 'thing'                       ]


//      [First]          [ Define a set of fields (values) and methods
//                          (functions) to represent a 'thing'  ]

//      [Second]         [ Define a set of fields (values) and methods
//                          (functions) to represent a 'thing'  ]


// class Vehicle1 { //Super Class / Parent Class
//     drive(): void {
//         console.log('vroom')
//     }
//     honk(): void {
//         console.log('beep')
//     }
// }

// class Car extends Vehicle1{ //Child Class
//     drive(): void { //  Override
//         console.log('vroom vroom')
//     }
// }

// const car1 = new Car();
// car1.drive()
// car1.honk()

// Modifiers

// [public]             -->         [  This method can be called any
//                                      where, any time                ]

// [private]             -->        [ This method can only be called
//                                     by other methods in this class  ]

// [protected]           -->        [  This method can be called by
//                                     other methods in this class, or by
//                                     other methods in child classes  ]


class Vehicle1 { //Super Class / Parent Class
    constructor(public color:string){
    }
    public drive(): void {
        console.log('vroom')
    }
    protected honk(): void {
        console.log('beep')
    }
}

class Car extends Vehicle1{ //  Child Class
    // private drive(): void { //  Override
    //     console.log('vroom vroom')
    // }
    constructor(public wheels: number, color: string){
        super(color)
    }

    startDrivingProcess(): void {
        this.drive()
        this.honk()
    }
}

const car1 = new Car(4, 'black');
// car1.drive() // Property 'drive' is private and only accessible within class 'Car'.ts(2341)
car1.startDrivingProcess()
// car1.honk()
console.log(car1.color)