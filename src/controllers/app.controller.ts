//Controler sao as rotas

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOperation, ApiParam, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
// import { DeleteDateColumn } from 'typeorm';
import { User } from '../mural/mural.entity';
import { MuralServices } from '../mural/mural.service';

@Controller('mural')
export class UsersController {
  constructor(private muralServices: MuralServices) {}

  @Get('') //Url alem do user, poe dentro do () GET
  @ApiTags('Mural')
  
  @ApiResponse({
    status: 200,
    description: 'Listagem Feita Com Sucesso',
  })
  @ApiOperation({ summary: 'List' })
  async list() {
    const users = await this.muralServices.search();
    return users;
  }

  @Post('')
  @ApiTags('Mural')


  @ApiOperation({ summary: 'Cadastro' })

  // @ApiBody({ example: '{"name" : "Any Name" \n "message" : "Any Message' })
  async register(@Body() { name, message }: User) {
    //Dentro do corpo, ele vai receber um objeto, e esse objeto vai pegar todos os atributos de User .
    await this.muralServices.create(name, message); //so pode chamar um await se tiver um async antes
    return 'Created By ';
  }

  @Put('')
  @ApiTags('Mural')
  @ApiOperation({ summary: 'Edit' })

  async update(@Body() { message }: User, @Body() {id}: any) {
    await this.muralServices.edit(id, message);
    
    return 'Update By';
  }

  @Delete('/:id')
  @ApiTags('Mural')
  @ApiOperation({ summary: 'Remoçao' })

  async remove(@Param() { id }: any): Promise<string> {
    await this.muralServices.remove(id);
    return 'Deleted By';
  }
}
