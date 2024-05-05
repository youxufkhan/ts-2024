import { faker } from "@faker-js/faker";

export class Company {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }

    markerContent():string{
        return `
        <div>
            <h1>${this.name}</h1>
            <h2>${this.catchPhrase}</h2>
        </div>
        `;
    }
} 