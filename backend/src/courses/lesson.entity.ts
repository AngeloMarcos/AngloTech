import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Course } from "./course.entity";

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  videoUrl!: string;

  @Column()
  "order"!: number;

  @ManyToOne(() => Course, (course) => course.lessons)
  course!: Course;
}
