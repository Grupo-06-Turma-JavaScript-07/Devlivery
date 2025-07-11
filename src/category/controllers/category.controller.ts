import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Category } from '../entities/category.entity';
import { CategoryService } from '../services/category.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';

@ApiTags('Category')
@UseGuards(JwtAuthGuard)
@Controller('Category')
@ApiBearerAuth()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Category> {
    const category = await this.categoryService.findById(+id);
    if (!category) {
      throw new NotFoundException(`Categoria com ID ${id} não encontrada`);
    }
    return category;
  }

  /*  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Tema> {
    return this.temaService.findById(id);
  }
  } confirmar get id */


  @Get('categoria/:categoria')
  @HttpCode(HttpStatus.OK)
  findAllByCategory(@Param('category') category: string): Promise<Category[]> {
    return this.categoryService.findAllByCategory(category);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() Category: Category): Promise<Category> {
    return this.categoryService.create(Category);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() Category: Category): Promise<Category> {
    return this.categoryService.update(Category);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.delete(id);
  }
}

