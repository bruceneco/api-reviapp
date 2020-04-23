import { Post, Controller, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentDTO } from './student.dto';
import { StudentEntity } from './student.entity';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  showStudents() {
      return this.studentsService.showStudents();
  }

  @Post()
  createStudent(@Body() data: StudentDTO) {
      return this.studentsService.createStudent(data);
  }

  @Get(':id')
  readStudent(@Param('id') id: number) {
      return this.studentsService.readStudent(id);
  }

  @Put(':id')
  updateStudent(@Param('id') id: number, @Body() data: Partial<StudentDTO>) {
      return this.studentsService.updateStudent(id, data);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: number) {
      return this.studentsService.deleteStudent(id);
  }
}
