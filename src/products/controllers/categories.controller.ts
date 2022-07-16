import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, ParseIntPipe } from '@nestjs/common';
import { CreateCategoriesDto, UpdateCategoriesDto } from 'src/products/dtos/categories.dto';
import { CategoriesService } from '../services/categories.service'
@Controller('categories')
export class CategoriesController {

  constructor(private CategoriesService: CategoriesService) {}

  @Get()
  getProducts() {
    return this.CategoriesService.findAll()
  }

  @Get(':categorieId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('categorieId', ParseIntPipe) categorieId: number) {
    return this.CategoriesService.findOne(categorieId)
  }
  @Post()
  crete(@Body() payload: CreateCategoriesDto) {
    return this.CategoriesService.create(payload)
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCategoriesDto) {
    return this.CategoriesService.update(id, payload)
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.CategoriesService.remove(id)
  }
}
