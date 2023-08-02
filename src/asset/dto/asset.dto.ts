import { IsIn, IsNumber, IsString, Max, Min } from "class-validator"


export class AssetDto {

    @IsNumber()
    id: number

    @IsNumber()
    @IsIn([1, 2, 3])
    type: number

    @IsNumber()
    @Min(1)
    @Max(10)
    level: number

    @IsString()
    address: string
}