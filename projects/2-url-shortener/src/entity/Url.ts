import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column("text")
    url: string

    @Column()
    short_url: string

    @CreateDateColumn("")
    dt: string

}
