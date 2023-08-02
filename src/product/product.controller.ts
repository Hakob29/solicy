import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) { }


    //BUY PRODUCT
    @Post("/buyProduct")
    async buyProduct(
        @Body() dto: ProductDto
    ) {
        return await this.productService.buyProduct(dto);
    }
}
