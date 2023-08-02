import { Controller, Get, Param } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
    constructor(
        private readonly catalogService: CatalogService
    ) { }


    //GET CATALOG BY ID
    @Get("/:id")
    async getCatalogById(
        @Param("id") id: number
    ) {
        return await this.catalogService.getCatalogById(id);
    }

}
