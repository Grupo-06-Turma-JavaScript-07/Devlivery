import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/user.controller';
import { UserService } from './service/user.service';
import { User } from './entities/user.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [TypeOrmModule.forFeature([User]),
    forwardRef(() => AuthModule),],
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService],
})
export class UserModule { }