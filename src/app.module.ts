import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from 'ormconfig';
import { CatalogModule } from './catalog/catalog.module';
import { UserModule } from './user/user.module';
import { AssetModule } from './asset/asset.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(AppDataSource.options),
    CatalogModule,
    UserModule,
    AssetModule,
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
