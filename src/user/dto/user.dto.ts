import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class UserDto {
    @ApiProperty({ description: "Address!" })
    @IsString()
    address: string

    @ApiProperty({ description: "Cash1!" })
    @IsNumber()
    cash1: number

    @ApiProperty({ description: "Cash2!" })
    @IsNumber()
    cash2: number

    @ApiProperty({ description: "Cash3!" })
    @IsNumber()
    cash3: number
}