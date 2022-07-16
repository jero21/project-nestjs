import { Controller, Get, Param, Post, Query, Body, Put, Delete, HttpStatus, HttpCode, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './../services/product.service'
import { CreateProductsDto, UpdateProductsDto } from './../dtos/products.dto'
@Controller('products')
export class ProductsController {

    constructor(private ProductService: ProductService) {}

    @Get()
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 20,
        @Query('brand') brand: string) {
        return this.ProductService.findAll()
    }

    @Get(':productId')
    @HttpCode(HttpStatus.ACCEPTED)
    getProduct(@Param('productId', ParseIntPipe) productId: number) {
        return this.ProductService.findOne(productId)
    }
    @Post()
    crete(@Body() payload: CreateProductsDto) {
        return this.ProductService.create(payload)
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateProductsDto) {
        return this.ProductService.update(id, payload)
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.ProductService.remove(id)
    }
}
