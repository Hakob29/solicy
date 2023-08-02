import { User } from "src/user/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Asset")
export class Asset {

    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number

    @Column({ type: Number })
    type: number

    @Column({ type: Number })
    level: number

    @OneToOne(() => User, (user) => user.address)
    address: string

}