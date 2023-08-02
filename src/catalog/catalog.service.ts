import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Catalog } from './catalog.entity';
import { Repository } from 'typeorm';
import { CatalogResponseInterface } from './response/catalog.interface';

@Injectable()
export class CatalogService {
    constructor(
        @InjectRepository(Catalog)
        private readonly catalogRepo: Repository<Catalog>
    ) { }


    //GET CATALOG BY ID
    async getCatalogById(id: number): Promise<CatalogResponseInterface> {
        try {
            const catalog = await this.catalogRepo.findOne({ where: { id } });
            if (!catalog) throw new Error("Not Found!");
            return {
                id: catalog.id,
                name: catalog.name,
                description: catalog.description,
                imageUrl: catalog.url,
                price: {
                    cost1: catalog.cost1,
                    cost2: catalog.cost2,
                    cost3: catalog.cost3,
                },
                req: {
                    req1: catalog.req1,
                    req2: catalog.req2,
                    req3: catalog.req3
                }
            }
        } catch (err) {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
