import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('student')
export class StudentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @Column('text')
    email: string;
    
    @Column('text')
    password: string;
    
}
