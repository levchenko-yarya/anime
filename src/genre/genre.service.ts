import { Inject, Injectable } from "@nestjs/common";
import { CreateGenreDto } from "./dto/create-genre.dto";
import { UpdateGenreDto } from "./dto/update-genre.dto";
import { Genre } from "./entities/genre.entity";

@Injectable()
export class GenreService {
  constructor(
    @Inject("GENRES_REPOSITORY")
    private genresRepository: typeof Genre
  ) {
  }

  async create(createGenreDto: CreateGenreDto) {
    const genre = await new this.genresRepository(createGenreDto);
    return genre.save();
  }

  async findAll(): Promise<Genre[]> {
    return this.genresRepository.findAll<Genre>();
  }

  findOne(id: number) {
    return `This action returns a #${id} genre`;
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    return `This action updates a #${id} genre`;
  }

  remove(id: number) {
    return `This action removes a #${id} genre`;
  }
}
