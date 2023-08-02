import { Module } from '@nestjs/common';
import { AssetController } from './asset.controller';
import { AssetService } from './asset.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from './asset.entity';
import { User } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asset, User])],
  controllers: [AssetController],
  providers: [AssetService]
})
export class AssetModule { }
