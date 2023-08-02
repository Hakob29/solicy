import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { User } from 'src/user/user.entity';
import { Catalog } from 'src/catalog/catalog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, User, Catalog])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule { }
