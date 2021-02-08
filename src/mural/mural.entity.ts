import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //Representa uma estrutura do banco
export class User {
  @PrimaryGeneratedColumn('uuid') //Coluna primaria com o tipo UUID
  @ApiProperty({
    example: '454234erwr-423424df-2dfijfshfe',
    description: 'A ID aleatoria do Usuario \n Usado para Edit e Delete.',
  })
  id: string;

  @Column({ nullable: false }) //Coluna do nome para nao ser nulo
  @ApiProperty({ example: 'Angelo', description: 'Tipo String, Qualquer Nome' })
  name: string;

  @Column({ select: true, nullable: false }) //Nao retornar o dado ao buscar no banco//Coluna do password para nao ser nulo
  @ApiProperty({
    example: 'Lorem Ipsum',
    description: 'A mensagem que deseja cadastrar',
  })
  message: string;
}
