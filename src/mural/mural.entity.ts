import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()//Representa uma estrutura do banco
export class User{
  @PrimaryGeneratedColumn("uuid")//Coluna primaria com o tipo UUID
  id:String;

  @Column({nullable:false})//Coluna do nome para nao ser nulo
  name:String;

  @Column({select:true,nullable:false})//Nao retornar o dado ao buscar no banco//Coluna do password para nao ser nulo
  message:String;
}