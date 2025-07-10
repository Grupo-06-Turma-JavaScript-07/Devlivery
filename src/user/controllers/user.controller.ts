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
} from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserService } from '../service/user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.findById(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() user: User): Promise<User> {
    return await this.userService.create(user);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  async update(@Body() user: User): Promise<User> {
    return this.userService.update(user);
  }

  /*@Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }*/
}
