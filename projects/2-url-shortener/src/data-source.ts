import "reflect-metadata"
import { DataSource } from "typeorm"
import { Url } from "./entity/Url"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Url],
    migrations: [],
    subscribers: [],
})
