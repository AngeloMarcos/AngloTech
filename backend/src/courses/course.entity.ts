import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Unique,
} from "typeorm";
import { User } from "../entities/user.entity";
import { Lesson } from "./lesson.entity";
import { Ebook } from "./ebook.entity";

@Entity()
@Unique(["slug"])
export class Course {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  slug!: string;

  @Column({ nullable: true, type: "text" })
  description?: string;

  @ManyToOne(() => User, (user) => user.courses)
  instructor!: User;

  @OneToMany(() => Lesson, (lesson) => lesson.course, { cascade: true })
  lessons!: Lesson[];

  @OneToMany(() => Ebook, (ebook) => ebook.course, { cascade: true })
  ebooks!: Ebook[];
}
