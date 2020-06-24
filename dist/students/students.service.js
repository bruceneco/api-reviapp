"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const student_entity_1 = require("./student.entity");
const typeorm_2 = require("@nestjs/typeorm");
let StudentsService = class StudentsService {
    constructor(studentsRepository) {
        this.studentsRepository = studentsRepository;
    }
    async showStudents() {
        return await this.studentsRepository.find();
    }
    async createStudent(data) {
        const student = await this.studentsRepository.create(data);
        await this.studentsRepository.save(student);
        return student;
    }
    async readStudent(id) {
        return await this.studentsRepository.findOne({ where: { id } });
    }
    async updateStudent(id, data) {
        await this.studentsRepository.update({ id }, data);
        return await this.studentsRepository.findOne({ id });
    }
    async deleteStudent(id) {
        await this.studentsRepository.delete({ id });
        return { deleted: true };
    }
};
StudentsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(student_entity_1.StudentEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], StudentsService);
exports.StudentsService = StudentsService;
//# sourceMappingURL=students.service.js.map