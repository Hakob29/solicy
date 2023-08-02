import { Asset } from "src/asset/asset.entity";
import { Product } from "src/product/product.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";



@Entity('User')
export class User {

    @PrimaryColumn({ type: String, nullable: false })
    address: string

    @OneToOne(() => Asset, (asset) => asset.address)
    @JoinColumn()
    asset: Asset

    @OneToOne(() => Product, (product) => product.address1)
    @JoinColumn()
    product: Product

    @Column('decimal', { precision: 6, scale: 2 })
    cash1: number

    @Column('decimal', { precision: 6, scale: 2 })
    cash2: number

    @Column('decimal', { precision: 6, scale: 2 })
    cash3: number

}