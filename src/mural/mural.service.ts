import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../mural/mural.entity';

@Injectable()
export class MuralServices {
  //Inicia criando um repo, para as funçoes http
  constructor(
    @InjectRepository(User)
    private muralRepository: Repository<User>,
  ) {}

  async create(name, message) {
    const mural = await this.muralRepository.create({ name, message }); //Criar
    await this.muralRepository.save(mural); //Salvar
    return mural; //Retornar os dados
  }
  async search() {
    const mural = await this.muralRepository.find(); //Search
    return mural; //Retornar os dados
  }
  async remove(id) {
    const mural = await this.muralRepository.delete({ id }); //Deletar
    return mural; //Retornar os dados
  }
  async edit(id, message) {
    const mural = await this.muralRepository.update(id, { message }); //Uṕdate
    return mural; //Retornar os dados
  }
}
