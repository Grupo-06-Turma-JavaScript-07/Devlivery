import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../user/service/user.service';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Bcrypt } from '../bcrypt/bcrypt';
import { UsuarioLogin } from '../entities/usuariologin.entity';


@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private bcrypt: Bcrypt
    ) { }

    async validateUser(username: string, password: string): Promise<any> {

        const buscaUsuario = await this.userService.findByNome(username)

        if (!buscaUsuario)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND)

        const matchPassword = await this.bcrypt.compararSenhas(password, buscaUsuario.senha)

        if (buscaUsuario && matchPassword) {
            const { senha, ...resposta } = buscaUsuario
            return resposta
        }

        return null

    }

    async login(usuarioLogin: UsuarioLogin) {

        const payload = { sub: usuarioLogin.usuario }

        const buscaUsuario = await this.userService.findByNome(usuarioLogin.usuario)

        //Encontrei essa forma de corrigir o erro com essa validação para o TS parar de achar que o user retornaria null
        if (!buscaUsuario) {
            throw new HttpException('Usuário ou senha inválidos', HttpStatus.UNAUTHORIZED);
        }

        return {
            id: buscaUsuario.id,
            nome: buscaUsuario.nome,
            usuario: usuarioLogin.usuario,
            senha: '',
            foto: buscaUsuario.foto,
            token: `Bearer ${this.jwtService.sign(payload)}`,
        }

    }
}