import { Module } from "@nestjs/common";
import { MovieService } from "./movie.service";
import { MovieController } from "./movie.controller";
import { DatabaseModule } from "../database/database.module";
import { moviesProviders } from "./entities/movie.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [MovieController],
  providers: [MovieService, ...moviesProviders]
})
export class MovieModule {
}
