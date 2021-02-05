//Controler sao as rotas

import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
//import { DeleteDateColumn } from 'typeorm';
import { User } from '../mural/mural.entity';
import { MuralServices } from '../mural/mural.service';

@Controller('mural')
export class UsersController {
  
  constructor (
    private muralServices : MuralServices
  ){}

  @Get()//Url alem do user, poe dentro do () GET
  async list(){
    const users = await this.muralServices.search()
    return users; 
  }

  @Post()
  async register(@Body() {name,message}:User){//Dentro do corpo, ele vai receber um objeto, e esse objeto vai pegar todos os atributos de User . 
    await this.muralServices.create(name,message)//so pode chamar um await se tiver um async antes
    return "Criado com sucesso PCR"
  }

  @Put('/:id')
  async update(@Body() {id,message}:User){
    await this.muralServices.edit(id,message)
    return "Atualizado com Sucesso meu caro"
  }

  @Delete()
  async remove(@Body() {name,message}:User){
    await this.muralServices.remove(name,message)
    return "Deletado com sucesso"
  }
}
