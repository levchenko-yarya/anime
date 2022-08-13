import { Injectable } from '@nestjs/common';
import { dataSource } from 'src/dataSource';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Genre } from './genre.entity';

@Injectable()
export class GenreService {
  genreRepository = dataSource.getRepository(Genre);

  async create(createGenreDto: CreateGenreDto) {
    const genre = new Genre();
    genre.name = createGenreDto.name;
    return this.genreRepository.save(genre);
  }

  async findAll(): Promise<Genre[]> {
    return this.genreRepository.find();
  }
}
