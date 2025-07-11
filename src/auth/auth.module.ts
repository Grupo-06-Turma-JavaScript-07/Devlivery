import { forwardRef, Module } from "@nestjs/common";
import { Bcrypt } from "./bcrypt/bcrypt";
import { UserModule } from "../user/user.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants/constants";
import { AuthService } from "./services/auth.service";
import { AuthController } from "./controllers/auth.controller";
import { LocalStrategy } from "./strategy/local.strategy";
import { JwtStrategy } from "./strategy/jwt.strategy";

@Module({
    imports: [
        forwardRef(() => UserModule),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '5h' },
        })

    ],
    controllers: [AuthController],
    providers: [Bcrypt, AuthService, LocalStrategy, JwtStrategy],
    exports: [Bcrypt],
})
export class AuthModule { };