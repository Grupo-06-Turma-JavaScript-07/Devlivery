import { AuthService } from './../services/auth.service';
import { LocalAuthGuard } from './../guard/local-auth.guard';
import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { UsuarioLogin } from '../entities/usuariologin.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller("/usuarios")
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    async login(@Body() user: UsuarioLogin): Promise<any> {
        return this.authService.login(user);
    }

}

//postgresql://devlivery_user:0yYEouSjOXyTn2tnIEFXw1BpNnsDcp5D@dpg-d1oh0mvfte5s73bb823g-a.oregon-postgres.render.com:5432/devlivery