import { Genre } from "./genre.entity";

export const genresProviders = [
  {
    provide: "GENRES_REPOSITORY",
    useValue: Genre
  }
];