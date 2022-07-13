import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GenreModule } from "./genre/genre.module";
import { MovieModule } from "./movie/movie.module";
import { UserModule } from "./user/user.module";
import { ViewModule } from './view/view.module';
import { StatusModule } from './status/status.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [GenreModule, MovieModule, UserModule, ViewModule, StatusModule, RolesModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}