import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class CatalogDto {
    @ApiProperty({ description: "Catalog name!" })
    @IsString()
    name: string

    @ApiProperty({ description: "Description!" })
    @IsString()
    description: string

    @ApiProperty({ description: "Url!" })
    @IsString()
    url: string

    @ApiProperty({ description: "Cost1" })
    @IsNumber()
    cost1: number

    @ApiProperty({ description: "Cost2" })
    @IsNumber()
    cost2: number

    @ApiProperty({ description: "Cost3" })
    @IsNumber()
    cost3: number

    @ApiProperty({ description: "Req1" })
    @IsNumber()
    req1: number

    @ApiProperty({ description: "Req2" })
    @IsNumber()
    req2: number

    @ApiProperty({ description: "Req3" })
    @IsNumber()
    req3: number

    @ApiProperty({ description: "Category" })
    @IsNumber()
    category: number
}