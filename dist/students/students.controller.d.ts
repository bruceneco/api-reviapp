import { StudentsService } from './students.service';
import { StudentDTO } from './student.dto';
import { StudentEntity } from './student.entity';
export declare class StudentsController {
    private studentsService;
    constructor(studentsService: StudentsService);
    showStudents(): Promise<StudentEntity[]>;
    createStudent(data: StudentDTO): Promise<StudentEntity>;
    readStudent(id: number): Promise<StudentEntity>;
    updateStudent(id: number, data: Partial<StudentDTO>): Promise<StudentEntity>;
    deleteStudent(id: number): Promise<{
        deleted: boolean;
    }>;
}
