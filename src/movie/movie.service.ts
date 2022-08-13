import { Injectable } from '@nestjs/common';
import { dataSource } from 'src/dataSource';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './movie.entity';

@Injectable()
export class MovieService {
  movieRepository = dataSource.getRepository(Movie);

  async findAll(): Promise<Movie[]> {
    return await this.movieRepository.find();
  }

  async findOne(id: number): Promise<Movie> {
    return await this.movieRepository.findOne({ where: { id } });
  }

  async create(createMovieDto: CreateMovieDto) {
    const movie = new Movie();
    movie.name = createMovieDto.name;
    movie.description = createMovieDto.description;
    movie.year = createMovieDto.year;
    movie.episodes = createMovieDto.episodes;
    movie.url = createMovieDto.url;
    return await this.movieRepository.save(movie);
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    return await this.movieRepository
      .createQueryBuilder()
      .update(Movie)
      .where({ id: id })
      .set({
        name: updateMovieDto.name,
        description: updateMovieDto.description,
        year: updateMovieDto.year,
        episodes: updateMovieDto.episodes,
        url: updateMovieDto.url,
      })
      .execute();
  }

  async remove(id: number): Promise<void> {
    await this.movieRepository.delete(id);
  }
}
