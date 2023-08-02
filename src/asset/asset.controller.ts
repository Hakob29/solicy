import { Body, Controller, Get, Post } from '@nestjs/common';
import { AssetService } from './asset.service';
import { AssetDto } from './dto/asset.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags("Asset")
@Controller('asset')
export class AssetController {
    constructor(
        private readonly assetService: AssetService
    ) { }


    //CREATE ASSET 
    @Post()
    async asset(
        @Body() dto: AssetDto
    ) {
        return await this.assetService.asset(dto);
    }

}
