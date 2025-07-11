import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { User } from '../../user/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_product' })
export class Product {

  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 50, nullable: false })
  nameProduct: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ type: 'date', nullable: false })
  validity: Date;

  @ApiProperty({ type: () => Category })
  @ManyToOne(() => Category, (category) => category.product, {
    onDelete: 'CASCADE',
  })
  category: Category;

  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.product, {
    onDelete: 'CASCADE',
  })
  user: User;
}