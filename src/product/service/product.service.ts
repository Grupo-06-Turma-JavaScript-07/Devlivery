import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) { }

  async create(data: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create(data);
    return this.productRepository.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find({
      relations: { category: true, user: true } // Carrega as relações no retorno
    });
  }

  async findById(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: { category: true, user: true }
    });

    if (!product) {
      throw new NotFoundException(`Produto com id ${id} não encontrado.`);
    }

    return product;
  }

  findByProduct(product: string): Promise<Product[]> {
    return this.productRepository.find({
      where: {
        nameProduct: ILike(`%${product}%`),
      },
      relations: { category: true, user: true }
    });
  }

  async update(product: Product): Promise<Product> {
    await this.findById(product.id);
    /*Object.assign(product);*/
    return await this.productRepository.save(product);
  }


  /*async update(postagem: Postagem): Promise<Postagem> {
    await this.findById(postagem.id);

    await this.TemaService.findById(postagem.tema.id);

    return await this.postagemRepository.save(postagem);
  } modelo blog*/

  async delete(id: number): Promise<void> {
    const product = await this.findById(id);
    await this.productRepository.remove(product);
  }
}
