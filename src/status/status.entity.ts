import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Movie } from 'src/movie/movie.entity';
import { User } from 'src/user/user.entity';
import { View } from 'src/view/view.entity';

@Entity()
export class Status {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Movie, (movie) => movie.id)
  movie: Movie;

  @ManyToOne(() => View, (view) => view.id)
  view: View;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
