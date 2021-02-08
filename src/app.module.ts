import { Module } from '@nestjs/common';
import { typeormConfig } from './config/db.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MuralModule } from './mural/mural.module';
@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), MuralModule], //Importar o module typeORM
  controllers: [],
  providers: [],
})
export class AppModule {}
