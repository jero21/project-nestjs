import { Injectable, NotFoundException } from '@nestjs/common';
import { Categorie } from '../entities/categorie.entity';
import { CreateCategoriesDto, UpdateCategoriesDto } from '../dtos/categories.dto'

@Injectable()
export class CategoriesService {
    private counterId = 1;

    private categories: Categorie[] = [{
        id: 1,
        name: 'Product 1',
        description: 'descr...',
    }];

    findAll() {
        return this.categories
    }

    findOne(id: number) {
        const categorie = this.categories.find((item) => item.id === id)
        if (!categorie) {
            throw new NotFoundException(`Categorie # ${id} not found`);
        }
        return categorie;
    }

    create(payload: CreateCategoriesDto) {
        this.counterId++;
        const newCategorie = {
            id: this.counterId,
            ...payload
        }
        this.categories.push(newCategorie)
        return newCategorie;
    }

    update(id: number, payload: UpdateCategoriesDto) {
        const categorie = this.findOne(id)
        if (!categorie) {
            throw new NotFoundException(`Categorie # ${id} not found`)
        }
        const index = this.categories.findIndex((item) => item.id === id);
        this.categories[index] = {
            ...categorie,
            ...payload
        }
        return this.categories[index];

    }

    remove(id: number) {
        const categorie = this.findOne(id)
        if (!categorie) {
            throw new NotFoundException(`Categorie # ${id} not found`)
        }
        const index = this.categories.findIndex((item) => item.id === id);
        this.categories.splice(index, 1);
        return true
    }
}
