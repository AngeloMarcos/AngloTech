import { Module }        from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course }        from './course.entity';
import { Lesson }        from './lesson.entity';
import { Ebook }         from './ebook.entity';
import { CoursesService }      from './courses.service';
import { CoursesController }   from './courses.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Lesson, Ebook])],
  providers: [CoursesService],
  controllers: [CoursesController],
})
export class CoursesModule {}
