import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('student')
export class ReviewsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;
    
    @CreateDateColumn()
    created: Date;

    @Column('text')
    name: string;

    @Column('text')
    subject: string;

    @Column()
    nextReview: Date;

    @Column()
    numReviews: number;
    
}
