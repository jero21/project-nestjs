import { IsString, IsNumber, IsUrl, IsNotEmpty, IsPositive } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'

export class CreateProductsDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    @IsString()
    @IsNotEmpty()
    readonly description: string;
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly price: number;
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly stock: number;
    @IsUrl()
    @IsNotEmpty()
    readonly image: string;
}

export class UpdateProductsDto extends PartialType(CreateProductsDto) {} // "PartialType" Usa las mismas validaciones que el create pero opcionales