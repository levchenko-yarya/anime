import { Model } from "mongoose";
import { Inject, Injectable } from "@nestjs/common";
import { Movie } from "./interfaces/movie.interface";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";

@Injectable()
export class MovieService {
  constructor(@Inject("MOVIE_MODEL") private movieModel: Model<Movie>) {
  }

  async findAll() {
    return await this.movieModel.find().exec();
  }

  async findOne(id) {
    return await this.movieModel.findById(id).exec();
  }

  async create(createMovieDto: CreateMovieDto) {
    const movie = await new this.movieModel(createMovieDto);
    return movie.save();
  }

  update(id, updateMovieDto: UpdateMovieDto) {
    return this.movieModel.findByIdAndUpdate(id, updateMovieDto, { new: true });
  }

  remove(id) {
    return this.movieModel.findByIdAndRemove(id);
  }
}
