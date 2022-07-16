import { Controller, Get, Param, Post, Body, Put, Delete, HttpStatus, HttpCode, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from '../services/products.service'
import { CreateProductsDto, UpdateProductsDto } from '../dtos/products.dto'
@Controller('products')
export class ProductsController {

    constructor(private ProductsService: ProductsService) {}

    @Get()
    getProducts() {
        return this.ProductsService.findAll()
    }

    @Get(':productId')
    @HttpCode(HttpStatus.ACCEPTED)
    getProduct(@Param('productId', ParseIntPipe) productId: number) {
        return this.ProductsService.findOne(productId)
    }
    @Post()
    crete(@Body() payload: CreateProductsDto) {
        return this.ProductsService.create(payload)
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductsDto) {
        return this.ProductsService.update(id, payload)
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.ProductsService.remove(id)
    }
}
