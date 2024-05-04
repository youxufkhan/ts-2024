// Interfaces

//      [Interfaces]       --->       [    Creates a new type, describing the property
//                                         names and value types of an object  ]

// [Interface] + [Classes]          =           How we get really strong code reuse in TS

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
}

const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.summary())
}

printVehicle(oldCivic)

//Interface
interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
}

interface Reportable {
    summary(): string;
}
const printSummary = (item: Reportable): void => {
    console.log(item.summary())
}
printSummary(oldCivic)


const drinK = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary():string {
        return `my drink has ${this.sugar}`
    }
}
printSummary(drinK)
