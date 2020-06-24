import { ReviewsService } from './reviews.service';
import { ReviewDTO } from "./review.dto";
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    getReviews(): Promise<import("./reviews.entity").ReviewEntity[]>;
    createReview(data: ReviewDTO): Promise<import("./reviews.entity").ReviewEntity>;
}
