import { Inject, Injectable } from "@nestjs/common";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { Movie } from "./entities/movie.entity";

@Injectable()
export class MovieService {
  constructor(@Inject("MOVIES_REPOSITORY") private moviesRepository: typeof Movie) {
  }

  async findAll(): Promise<Movie[]> {
    return await this.moviesRepository.findAll();
  }

  async findOne(id): Promise<Movie> {
    return await this.moviesRepository.findOne({ where: { id } });
  }

  create(createMovieDto: CreateMovieDto) {
    const movie = new this.moviesRepository(createMovieDto);
    return movie.save();
  }

  async update(id, updateMovieDto: UpdateMovieDto) {
    const movie = await this.moviesRepository.findOne({ where: { id } });
    await movie.update(updateMovieDto);
  }

  async remove(id): Promise<void> {
    const movie = await this.findOne(id);
    await movie.destroy();
  }
}
