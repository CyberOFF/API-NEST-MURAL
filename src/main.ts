import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Mural - Vue')
    .setDescription('Mural de Mensagens Básico')
    .setVersion('1.0')
    .addTag('Mural')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.listen(3000, () => {
    console.log('🚀 - Server Is Running');
  });
}
bootstrap();
