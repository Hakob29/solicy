import { ApiProperty } from "@nestjs/swagger"

export class CatalogDto {
    @ApiProperty({ description: "Catalog name!" })
    name: string

    @ApiProperty({ description: "Description!" })
    description: string

    @ApiProperty({ description: "Url!" })
    url: string

    @ApiProperty({ description: "Cost1" })
    cost1: number

    @ApiProperty({ description: "Cost2" })
    cost2: number

    @ApiProperty({ description: "Cost3" })
    cost3: number

    @ApiProperty({ description: "Req1" })
    req1: number

    @ApiProperty({ description: "Req2" })
    req2: number

    @ApiProperty({ description: "Req3" })
    req3: number

    @ApiProperty({ description: "Category" })
    category: number
}