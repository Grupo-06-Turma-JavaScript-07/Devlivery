import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(data: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create(data);
    return this.productRepository.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find({
      relations: ['categoria', 'usuario'], // Carrega as relações no retorno
    });
  }

  async findById(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ['categoria', 'usuario'],
    });

    if (!product) {
      throw new NotFoundException(`Produto com id ${id} não encontrado.`);
    }

    return product;
  }

  findByDescricao(descricao: string): Promise<Product[]> {
    return this.productRepository.find({
      where: {
        descricao: ILike(`%${descricao}%`),
      },
      relations: ['categoria', 'usuario'],
    });
  }

  async update(id: number, data: Partial<Product>): Promise<Product> {
    const product = await this.findById(id);
    Object.assign(product, data);
    return this.productRepository.save(product);
  }

  async delete(id: number): Promise<void> {
    const product = await this.findById(id);
    await this.productRepository.remove(product);
  }
}
