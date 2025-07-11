/*import { ApiProperty } from "@nestjs/swagger"*/
import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Product } from "../../product/entities/product.entity"
import { ApiProperty } from "@nestjs/swagger"
/*import { Product } from "../../product/entities/product.entity"*/

@Entity({ name: "tb_user" })
export class User {

    @PrimaryGeneratedColumn()
    @ApiProperty() 
    id: number

    /*incluir os @api*/
    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    @ApiProperty()
    nome: string

    @IsNotEmpty()
    @IsEmail()
    @Column({ length: 255, nullable: false })
    @ApiProperty({example: "email@email.com.br"})
    usuario: string

    @IsNotEmpty()
    @MinLength(8)
    @Column({ length: 255, nullable: false })
    @ApiProperty()
    senha: string

    @IsOptional()
    @Column({ length: 5000 })
    @ApiProperty()
    foto: string

    @ApiProperty()
    @OneToMany(() => Product, (product) => product.user)
    product: Product[]

}