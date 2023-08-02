import { ApiProperty } from "@nestjs/swagger"

export class UserDto {
    @ApiProperty({ description: "Address!" })
    address: string

    @ApiProperty({ description: "Cash1!" })
    cash1: number

    @ApiProperty({ description: "Cash2!" })
    cash2: number

    @ApiProperty({ description: "Cash3!" })
    cash3: number
}