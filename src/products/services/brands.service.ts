import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from '../entities/brand.entity'
import { CreateBrandsDTO, UpdateBrandsDTO } from '../dtos/brands.dto'

@Injectable()
export class BrandsService {

    private counterId = 0;
    private brands: Brand[] = [];

    findAll() {
        return this.brands
    }

    findOne(id: number) {
        const brand = this.brands.find((item) => item.id === id)
        if (!brand) {
            throw new NotFoundException(`Not found ${id}`)
        }
        return brand
    }

    create(payload: CreateBrandsDTO) {
        this.counterId++;
        const brand = {
            id: this.counterId,
            name: payload.name
        }
        this.brands.push(brand);
        return brand;
    }

    update(id: number, payload: UpdateBrandsDTO) {
        const brand = this.findOne(id)
        if (!brand) {
            throw new NotFoundException(`Brand # ${id} not found`)
        }
        const index = this.brands.findIndex((item) => item.id === id)

        this.brands[index] = {
            ...brand,
            ...payload
        }
        return this.brands[index];
    }

    delete(id: number) {
        const brand = this.findOne(id)
        if (!brand) {
            throw new NotFoundException(`Brand # ${id} not found`)
        }
        const index = this.brands.findIndex((item) => item.id === id)
        this.brands.splice(index, 1)
        return `Brand # ${id} deleted`
    }
}
