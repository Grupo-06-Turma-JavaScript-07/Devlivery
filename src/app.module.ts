import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ConfigModule } from '@nestjs/config';
// import { ProdService } from './data/services/prod.services';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { DevService } from './data/services/dev.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: DevService,
      imports: [ConfigModule],
      
    }),
    UserModule,
    ProductModule,
    CategoryModule,
    AuthModule
  ],

  controllers: [AppController],
  providers: [],
})

export class AppModule { }