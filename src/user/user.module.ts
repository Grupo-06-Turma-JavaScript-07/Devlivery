import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/user.controller';
import { UserService } from './service/user.service';
import { User } from './entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService],
})
export class UserModule { }