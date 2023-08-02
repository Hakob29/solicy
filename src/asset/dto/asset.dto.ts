import { ApiProperty } from "@nestjs/swagger"
import { IsIn, IsNumber, IsString, Max, Min } from "class-validator"


export class AssetDto {

    @ApiProperty()
    @IsNumber()
    @IsIn([1, 2, 3])
    type: number

    @ApiProperty()
    @IsNumber()
    @Min(1)
    @Max(10)
    level: number

    @ApiProperty()
    @IsString()
    address: string
}