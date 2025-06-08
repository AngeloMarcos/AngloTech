import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository }              from '@nestjs/typeorm';
import { Repository }                    from 'typeorm';
import { Course }                        from './course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private repo: Repository<Course>,
  ) {}

  findAll(): Promise<Course[]> {
    return this.repo.find({
      relations: ['instructor'],
      select: ['id','title','slug','description'],
    });
  }

  async findOneBySlug(slug: string): Promise<Course> {
    const course = await this.repo.findOne({
      where: { slug },
      relations: ['instructor','lessons','ebooks'],
    });
    if (!course) throw new NotFoundException('Curso não encontrado');
    return course;
  }
}
