import { Controller, Get, Post, Body } from "@nestjs/common";
import { ReviewsService } from './reviews.service';
import { ReviewDTO } from "./review.dto";

@Controller('api/reviews')
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService) { }

    @Get()
    getReviews() {
        return this.reviewsService.getReviews();
    }
    @Post()
    createReview(@Body() data: ReviewDTO) {
        return this.reviewsService.createReview(data);
    }
}