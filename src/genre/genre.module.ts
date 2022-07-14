import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
import { DatabaseModule } from '../database/database.module';
import { genresProviders } from './entities/genre.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [GenreController],
  providers: [GenreService, ...genresProviders],
})
export class GenreModule {}
