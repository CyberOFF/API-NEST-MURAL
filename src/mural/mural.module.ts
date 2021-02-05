import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './mural.entity';
import {UsersController } from '../controllers/app.controller'
import { MuralServices } from '../mural/mural.service';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([User])],//"dizendo" de modo global que havera um repositorio com o nome user
  providers: [MuralServices],
  exports: [MuralServices]
})
export class MuralModule {}



//Importações de arquivos