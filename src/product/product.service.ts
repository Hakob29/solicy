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
            let success = true;

            if (Math.trunc(user.cash1) < catalog.cost1 && Math.trunc(user.cash2) < catalog.cost2 && Math.trunc(user.cash3) < catalog.cost3) {
                success = false;
            }
            if (catalog.req1 === null && catalog.req2 === null && catalog.req3 === null) {
                success = false
            }
            if (!(user.asset.type) && !(user.asset.level <= catalog.req1 || user.asset.level <= catalog.req2 || user.asset.level <= catalog.req3)) {
                success = false
            }

            if (!success) {
                return {
                    success: false,
                    error: {
                        errorMessage: "Not Enough Property!!!!"
                    }
                }
            }
            const newCashUser = await this.userRepo.create({
                ...user,
                cash1: Math.trunc(user.cash1) - catalog.cost1,
                cash2: Math.trunc(user.cash2) - catalog.cost2,
                cash3: Math.trunc(user.cash3) - catalog.cost3
            });
            await this.userRepo.save(newCashUser);
            return {
                success: success,
                data: {
                    resources: {
                        cash1: newCashUser.cash1,
                        cash2: newCashUser.cash2,
                        cash3: newCashUser.cash3
                    }
                }
            }
        } catch (err) {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
