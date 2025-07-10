/*import { ApiProperty } from "@nestjs/swagger"*/
import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
/*import { Product } from "../../product/entities/product.entity"*/

@Entity({name: "tb_user"})
export class User {
    
    @PrimaryGeneratedColumn() 
    id: number

    /*incluir os @api*/
    @IsNotEmpty()
    @Column({length: 255, nullable: false}) 
    nome: string

    @IsNotEmpty()
    @IsEmail()
    @Column({length: 255, nullable: false })
    usuario: string

    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 255, nullable: false }) 
    senha: string

    @IsOptional()
    @Column({length: 5000 }) 
    foto: string

    /*@OneToMany(() => Product, (product) => product.usuario)
    product: Product[]*/
   
}