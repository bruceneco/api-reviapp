import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { ReviewsEntity } from './reviews.entity';

@Injectable()
export class ReviewsService {
    constructor(@InjectRepository(ReviewsEntity) private reviewsRepository: Repository<ReviewsEntity>) { }

    async getReviews() {
        return await this.reviewsRepository.find();
    }
}