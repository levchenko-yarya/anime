import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GenreModule } from './genre/genre.module';
import { MovieModule } from './movie/movie.module';
import { UserModule } from './user/user.module';
import { ViewModule } from './view/view.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    GenreModule,
    MovieModule,
    ViewModule,
    StatusModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
