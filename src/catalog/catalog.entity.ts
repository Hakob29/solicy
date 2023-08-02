import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Catalog')
export class Catalog {

    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number

    @Column({ type: String })
    name: string

    @Column({ type: String })
    description: string

    @Column({ type: String })
    url: string

    @Column({ type: Number })
    cost1: number

    @Column({ type: Number })
    cost2: number

    @Column({ type: Number })
    cost3: number

    @Column({ type: Number })
    req1: number

    @Column({ type: Number })
    req2: number

    @Column({ type: Number })
    req3: number

    @Column({ type: Number })
    category: number

}