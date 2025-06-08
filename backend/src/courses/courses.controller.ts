import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard }          from '../auth/jwt-auth.guard';
import { CoursesService }        from './courses.service';

@Controller('courses')
@UseGuards(JwtAuthGuard)
export class CoursesController {
  constructor(private svc: CoursesService) {}

  @Get()
  getAll() {
    return this.svc.findAll();
  }

  @Get(':slug')
  getBySlug(@Param('slug') slug: string) {
    return this.svc.findOneBySlug(slug);
  }
}
