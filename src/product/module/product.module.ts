import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { ProductService } from '../service/product.service';
import { ProductController } from '../controller/product.controller';
import { Category } from '../../category/entities/category.entity';
import { User } from '../../user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Category, User]), // Importa também os relacionamentos
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
