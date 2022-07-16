import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateBrandsDTO, UpdateBrandsDTO } from '../dtos/brands.dto'
import { BrandsService } from 'src/products/services/brands.service';

@Controller('brands')
export class BrandsController {

    constructor(private BrandService: BrandsService) {}

    @Get()
    index() {
        return this.BrandService.findAll()
    }

    @Get(':id')
    show(@Param('id', ParseIntPipe) id: number) {
        return this.BrandService.findOne(id)
    }

    @Post()
    create(@Body() payload: CreateBrandsDTO) {
        return this.BrandService.create(payload)
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateBrandsDTO) {
        return this.BrandService.update(id, payload)
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.BrandService.delete(id)
    }
}
