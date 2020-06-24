import { Repository } from 'typeorm';
import { StudentEntity } from './student.entity';
import { StudentDTO } from './student.dto';
export declare class StudentsService {
    private studentsRepository;
    constructor(studentsRepository: Repository<StudentEntity>);
    showStudents(): Promise<StudentEntity[]>;
    createStudent(data: StudentDTO): Promise<StudentEntity>;
    readStudent(id: number): Promise<StudentEntity>;
    updateStudent(id: number, data: Partial<StudentDTO>): Promise<StudentEntity>;
    deleteStudent(id: number): Promise<{
        deleted: boolean;
    }>;
}
