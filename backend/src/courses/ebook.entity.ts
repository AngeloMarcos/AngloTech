import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Course } from './course.entity';

@Entity()
export class Ebook {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  fileUrl!: string;

  @ManyToOne(() => Course, (course) => course.ebooks)
  course!: Course;
}
