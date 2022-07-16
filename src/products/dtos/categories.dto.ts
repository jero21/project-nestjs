import { IsString, IsNotEmpty } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'

export class CreateCategoriesDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    @IsString()
    @IsNotEmpty()
    readonly description: string;
}

export class UpdateCategoriesDto extends PartialType(CreateCategoriesDto) {} // "PartialType" Usa las mismas validaciones que el create pero opcionales