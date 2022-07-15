import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '././entities/product.entity';

@Injectable()
export class ProductService {

    private counterId = 1;

    private products: Product[] = [{
        id: 1,
        name: 'Product 1',
        description: 'descr...',
        price: 122,
        image: 'asad',
        stock: 122
    }];

    findAll() {
        return this.products
    }

    findOne(id: number) {
        const product = this.products.find((item) => item.id == id)
        if (!product) {
            throw new NotFoundException(`Product # ${id} not found`);
        }
        return product;
    }

    create(payload: any) {
        this.counterId = this.counterId + 1;
        const newProduct = {
            id: this.counterId,
            ...payload,
        };
        this.products.push(newProduct)
        return newProduct;
    }

    update(id: number, payload: any) {
        const product = this.findOne(id);
        if (!product) {
            throw new NotFoundException(`Product # ${id} not found`);
        } else {
            const index = this.products.findIndex((item) => item.id === id);
            this.products[index] = payload;
            return this.products[index];
        }
    }

    remove(id: number) {
        const index = this.products.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new NotFoundException(`Product # ${id} not found`);
        }
        this.products.splice(index, 1);
        return true;
    }
}