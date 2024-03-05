import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class user {
    @PrimaryGeneratedColumn()
    id: number = 0

    @Column({ length: 225 })
    username: string = "placeholder"

    @Column({ length: 225 })
    email: string = "email"

    @Column({ length: 3 })
    years: number = 1

}