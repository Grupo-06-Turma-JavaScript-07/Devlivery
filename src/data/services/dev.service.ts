import { User } from './../../user/entities/user.entity';
import { Category } from './../../category/entities/category.entity';
import { Product } from './../../product/entities/product.entity';
import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'db_blogpessoal',
            entities: [Category, Product, User],
            synchronize: true,
    };
  }
}