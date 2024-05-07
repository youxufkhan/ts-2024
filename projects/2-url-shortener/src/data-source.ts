import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/Url"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "docker",
    database: "url-shortener",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
