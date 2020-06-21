import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('review')
export class ReviewEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @CreateDateColumn()
    created: Date;

    @Column('text')
    name: string;

    @Column('text')
    subject: string;

    @CreateDateColumn()
    nextReview: Date;

    @Column()
    numReviews: number;
    
}
