import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    @Get(':id/product/:productId')
    getCategory(@Param('id') id: string, @Param('productId') productId: string) {
      return `category id: ${id} and product id ${productId}`
    }
}
