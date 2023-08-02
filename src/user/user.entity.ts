import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn } from "typeorm";



@Entity('User')
export class User {

    @PrimaryColumn({ type: String })
    address: string

    @Column('decimal', { precision: 6, scale: 2 })
    cash1: number

    @Column('decimal', { precision: 6, scale: 2 })
    cash2: number

    @Column('decimal', { precision: 6, scale: 2 })
    cash3: number

}