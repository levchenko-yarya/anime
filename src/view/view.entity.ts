import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class View {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;
}
