import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [TypeOrmModule.forRoot(), StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
