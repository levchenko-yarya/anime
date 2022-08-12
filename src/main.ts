import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { dataSource } from './dataSource';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /*============================
  = setup HBS views for server =
  ============================*/
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  /*================================
  = setup SwaggerUI for API server =
  ================================*/
  const config = new DocumentBuilder()
    .setTitle('Movie example')
    .setDescription('The movie API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  /*=================================================
  = connect typeorm using Typeorm to database MYSQL =
  =================================================*/
  await dataSource.initialize();
  await dataSource.synchronize();

  await app.listen(3000);
}

bootstrap();
