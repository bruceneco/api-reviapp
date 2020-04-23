import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { StudentEntity } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentDTO } from './student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentsRepository: Repository<StudentEntity>,
  ) {}

  async showStudents() {
    return await this.studentsRepository.find();
  }

  async createStudent(data: StudentDTO) {
    const student = await this.studentsRepository.create(data);
    await this.studentsRepository.save(student);
    return student;
  }

  async readStudent(id: number) {
    return await this.studentsRepository.findOne({ where: { id } });
  }

  async updateStudent(id: number, data: Partial<StudentDTO>) {
    await this.studentsRepository.update({ id }, data);
    return await this.studentsRepository.findOne({ id });
  }

  async deleteStudent(id: number) {
    await this.studentsRepository.delete({ id });
    return { deleted: true };
  }
}
