import { Controller, Get, Param } from "@nestjs/common";
import { CoursesService } from "./courses.service";

@Controller("courses")
export class CoursesController {
  constructor(private svc: CoursesService) {}

  @Get()
  getAll() {
    return this.svc.findAll();
  }

  @Get(":slug")
  getBySlug(@Param("slug") slug: string) {
    return this.svc.findOneBySlug(slug);
  }
}
