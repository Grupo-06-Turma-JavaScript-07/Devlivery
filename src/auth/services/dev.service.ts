import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Product } from "../../product/entities/product.entity";
import { Category } from "../../category/entities/category.entity";
import { User } from "../../user/entities/user.entity";

@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'db_devlivery',
            entities: [Product, Category, User],
            synchronize: true,
    };
  }
}