import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CatalogResponseInterface } from './response/catalog.interface';
import { CatalogDto } from './dto/catalog.dto';


@ApiTags('Catalog')
@Controller('catalog')
export class CatalogController {
    constructor(
        private readonly catalogService: CatalogService
    ) { }

    //CREATE CATALOG //FOR EXAMPLE
    @Post("/create")
    async createCatalog(
        @Body() dto: CatalogDto
    ): Promise<CatalogResponseInterface> {
        return await this.catalogService.createCatalog(dto);
    }


    //GET CATALOG BY ID
    @Get("/:id")
    async getCatalogById(
        @Param("id") id: number
    ): Promise<CatalogResponseInterface> {
        return await this.catalogService.getCatalogById(id);
    }

}
