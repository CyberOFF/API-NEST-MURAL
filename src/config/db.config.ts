import { TypeOrmModuleOptions} from '@nestjs/typeorm' 
// Improtar o typeorm module

//Exportar uma const de configuração de BD.
export const typeormConfig:TypeOrmModuleOptions = {
    type:'postgres',
    host:'localhost',
    port: 5000,
    username:'postgres',
    password:'ps',
    database:'Mural',
    // entities: 
    entities:[__dirname + '/../**/**.entity.{js,ts}'],//diretorio atual, volta a pasta, entra em todas as pastas, **(Nome de todos os arquivos), puxar tudo que tiver com final .entity com extensoes .ts e .js
    synchronize: false//Toda vez que salvar, vai sincronizar com o banco//Ligar so quando tiver que atualizar o banco


}