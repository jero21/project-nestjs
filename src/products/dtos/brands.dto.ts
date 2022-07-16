import { IsString } from 'class-validator'
export class CreateBrandsDTO {
    @IsString()
    readonly name: string;
}

export class UpdateBrandsDTO {
    @IsString()
    readonly name?: string;
}