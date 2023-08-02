import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Catalog } from './catalog.entity';
import { Repository } from 'typeorm';
import { CatalogResponseInterface } from './response/catalog.interface';
import { CatalogDto } from './dto/catalog.dto';

@Injectable()
export class CatalogService {
    constructor(
        @InjectRepository(Catalog)
        private readonly catalogRepo: Repository<Catalog>
    ) { }


    //CREATE CATALOG 
    async createCatalog(dto: CatalogDto): Promise<CatalogResponseInterface> {
        try {
            const newCatalog = await this.catalogRepo.create({
                name: dto.name,
                description: dto.description,
                url: dto.url,
                cost1: dto.cost1,
                cost2: dto.cost2,
                cost3: dto.cost3,
                req1: dto.req1,
                req2: dto.req2,
                req3: dto.req3,
                category: dto.category
            });
            await this.catalogRepo.save(newCatalog);
            return {
                id: newCatalog.id,
                name: newCatalog.name,
                description: newCatalog.description,
                imageUrl: newCatalog.url,
                price: {
                    cost1: newCatalog.cost1,
                    cost2: newCatalog.cost2,
                    cost3: newCatalog.cost3,
                },
                req: {
                    req1: newCatalog.req1,
                    req2: newCatalog.req2,
                    req3: newCatalog.req3
                }
            }
        } catch (err) {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

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
