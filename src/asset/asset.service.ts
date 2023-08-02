import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Asset } from './asset.entity';
import { Repository } from 'typeorm';
import { AssetDto } from './dto/asset.dto';
import { User } from 'src/user/user.entity';

@Injectable()
export class AssetService {
    constructor(
        @InjectRepository(Asset)
        private readonly assetRepo: Repository<Asset>,
        @InjectRepository(User)
        private readonly userRepo: Repository<User>
    ) { }


    //CREATE ASSET 
    async asset(dto: AssetDto) {
        try {
            const user = await this.userRepo.findOne({ where: { address: dto.address } });
            if (!user) throw new Error("Not Found!");
            const asset = await this.assetRepo.create({
                type: dto.type,
                level: dto.level,
                address: dto.address
            })

            await this.assetRepo.save(asset);
            await this.userRepo.save({
                ...user,
                asset: asset
            })
            return asset;
        } catch (err) {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

}
