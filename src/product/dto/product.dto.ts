import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"


export class ProductDto {

    @ApiProperty()
    @IsNumber()
    id: number

    @ApiProperty()
    @IsString()
    address: string

}