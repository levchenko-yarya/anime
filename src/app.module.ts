import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GenreModule } from "./genre/genre.module";
import { MovieModule } from "./movie/movie.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [GenreModule, MovieModule, UserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}