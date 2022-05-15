import { Model } from "mongoose";
import { Inject, Injectable } from "@nestjs/common";
import {Movie} from './interfaces/movie.interface';
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";

@Injectable()
export class MovieService {
  constructor(
    @Inject('MOVIE_MODEL')
    private movieModel: Model<Movie>
  ) {
  }

  create(createMovieDto: CreateMovieDto) {
    return "This action adds a new movie";
  }

  findAll() {
    return `This action returns all movie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
