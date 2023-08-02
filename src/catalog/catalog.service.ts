import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Catalog } from './catalog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatalogService {
    constructor(
        @InjectRepository(Catalog)
        private readonly catalogRepo: Repository<Catalog>
    ) { }
}
