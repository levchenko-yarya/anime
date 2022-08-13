import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { dataSource } from './dataSource';
import { View } from './view/view.entity';
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
  await dataSource
    .initialize()
    .then(async () => {
      /*-- seeding view movie --*/
      const view1 = new View();
      view1.id = 1;
      view1.name = 'Запланировано';
      await dataSource.manager.save(view1);
      const view2 = new View();
      view2.id = 2;
      view2.name = 'Смотрю';
      await dataSource.manager.save(view2);
      const view3 = new View();
      view3.id = 3;
      view3.name = 'Просмотрено';
      await dataSource.manager.save(view3);
    })
    .catch((error) => console.log(error));
  await dataSource.synchronize();

  await app.listen(3000);
}

bootstrap();
