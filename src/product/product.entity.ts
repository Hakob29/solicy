import { User } from "src/user/user.entity";
import { Entity, OneToOne, PrimaryColumn } from "typeorm";

@Entity('Product')
export class Product {

    @PrimaryColumn({ type: String, nullable: false })
    address: string

    @PrimaryColumn({ type: Number, nullable: false })
    id: number

    @OneToOne(() => User, (user) => user.address)
    address1: string

}