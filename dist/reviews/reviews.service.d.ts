import { Repository } from "typeorm";
import { ReviewEntity } from './reviews.entity';
import { ReviewDTO } from "./review.dto";
export declare class ReviewsService {
    private reviewsRepository;
    constructor(reviewsRepository: Repository<ReviewEntity>);
    getReviews(): Promise<ReviewEntity[]>;
    createReview(data: ReviewDTO): Promise<ReviewEntity>;
}
