import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ReviewEntity } from "./reviews.entity";
import { ReviewsController } from "./reviews.controller";
import { ReviewsService } from "./reviews.service";

@Module({
    imports: [TypeOrmModule.forFeature([ReviewEntity])],
    controllers: [ReviewsController],
    providers: [ReviewsService]
})
export class ReviewsModule{}