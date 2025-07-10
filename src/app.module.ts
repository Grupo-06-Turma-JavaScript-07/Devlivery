import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/entities/product.entity';
import { Category } from './category/entities/category.entity';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_delivery',
      entities: [Product, Category, User],
      synchronize: true,
    }),
    UserModule,
    ProductModule,
    CategoryModule
  ],

  controllers: [],
  providers: [],
})

export class AppModule { }