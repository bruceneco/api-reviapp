import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { ReviewEntity } from './reviews.entity';
import { ReviewDTO } from "./review.dto";

@Injectable()
export class ReviewsService {
    constructor(@InjectRepository(ReviewEntity) private reviewsRepository: Repository<ReviewEntity>) { }

    async getReviews() {
        return await this.reviewsRepository.find();
    }

    async createReview(data: ReviewDTO) {
        const finalData = {
            name: data.name,
            subject: data.subject,
            nextReview: Date(),
            numReviews: 0
        }
        const review = await this.reviewsRepository.create(finalData);
        await this.reviewsRepository.save(review);
        return review;

    }
}