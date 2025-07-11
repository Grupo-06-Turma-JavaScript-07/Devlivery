import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) { }

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find({
      relations: {
        product: true,
      },
    });
  }

  async findById(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOne({
      where: {
        id,
      },
      relations: {
        product: true,
      },
    });

    if (!category)
      throw new HttpException(
        'Categoria não encontrada!',
        HttpStatus.NOT_FOUND,
      );

    return category;
  }

  async findAllByCategory(categoria: string): Promise<Category[]> {
    return await this.categoryRepository.find({
      where: {
        categoria: ILike(`%${categoria}%`),
      },
      relations: {
        product: true,
      },
    });
  }

  async create(categoria: Category): Promise<Category> {
    return await this.categoryRepository.save(categoria);
  }

  async update(categoria: Category): Promise<Category> {
    await this.findById(categoria.id);
    return await this.categoryRepository.save(categoria);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.categoryRepository.delete(id);
  }
}
