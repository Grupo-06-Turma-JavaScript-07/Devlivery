import { User } from './../entities/user.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Not, Repository } from 'typeorm';
import { Bcrypt } from '../../auth/bcrypt/bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private bcrypt: Bcrypt
    ) { }

    async findByNome(nome: string): Promise<User | null> {
        return await this.userRepository.findOne({
            where: { nome: ILike(`%${nome}%`) },
            relations: { product: true }
        })
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find({
            relations: { product: true }
        });


    }

    async findById(id: number): Promise<User> {

        const user = await this.userRepository.findOne({
            where: { id },
            relations: { product: true }
        });

        if (!user)
            throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);

        return user;

    }

    async create(user: User): Promise<User> {

        const buscaUser = await this.findByNome(user.usuario);

        if (buscaUser)
            throw new HttpException("O Usuário já existe!", HttpStatus.BAD_REQUEST);

        user.senha = await this.bcrypt.criptografarSenha(user.senha)
        return await this.userRepository.save(user);

    }

    async update(user: User): Promise<User> {

        await this.findById(user.id);

        const buscaUser = await this.findByNome(user.usuario);
        const existingUser = await this.userRepository.findOne({
            where: {
                nome: user.nome,
                id: Not(user.id) // Procura em todos, menos no usuário que esta alterando
            }
        })
        if (!buscaUser || !user.id)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);
        if (existingUser) {
            throw new HttpException('Nome de usuário já cadastrado!', HttpStatus.CONFLICT);
        }

        user.senha = await this.bcrypt.criptografarSenha(user.senha)
        return await this.userRepository.save(user);

    }

}
