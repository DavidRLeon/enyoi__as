import { Column, Default, Model, Table } from "sequelize-typescript"

@Table
export class Usuario extends Model {
    @Column
    Name: string
    @Column
    Email: string
    @Column
    Birthday: string
    @Column
    Phone_Number: string
    @Column
    Password: string
    @Default(1)
    @Column
    rolId: number
}