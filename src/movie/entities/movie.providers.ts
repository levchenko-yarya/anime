import { Movie } from './movie.entity';

export const moviesProviders = [
  {
    provide: 'MOVIES_REPOSITORY',
    useValue: Movie,
  },
];
