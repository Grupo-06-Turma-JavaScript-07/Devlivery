import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { ProductService } from '../services/product.service';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('/Product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productService.findById(id);
  }
  @Get('/titulo/:titulo')
  @HttpCode(HttpStatus.OK)
  findByAllTitulo(@Param('titulo') titulo: string): Promise<Product[]> {
    return this.productService.findAllByTitulo(titulo);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() product: Product): Promise<Product> {
    return this.productService.create(product);
  }
  @Put()
  @HttpCode(HttpStatus.OK)
  Update(@Body() product: Product): Promise<Product> {
    return this.productService.update(product);
  }
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}