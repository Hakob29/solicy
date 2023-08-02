import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';
import { User } from 'src/user/user.entity';
import { Catalog } from 'src/catalog/catalog.entity';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private readonly productRepo: Repository<Product>,
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
        @InjectRepository(Catalog)
        private readonly catalogRepo: Repository<Catalog>,
    ) { }


    //BUY PRODUCT
    async buyProduct(dto: ProductDto) {
        try {
            const user = await this.userRepo.findOne({ where: { address: dto.address }, relations: ["asset", "product"] });
            const catalog = await this.catalogRepo.findOne({ where: { id: dto.id } });


        } catch (err) {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
