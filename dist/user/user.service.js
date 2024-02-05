"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const utils_1 = require("../utils");
let UserService = class UserService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async create(createUserDto) {
        let fullName = createUserDto.full_name;
        let newAvatar = (0, utils_1.initAvatar)(fullName);
        let newUser = { ...createUserDto, face_app_id: "1234567", avatar: newAvatar };
        await this.prisma.users.create({
            data: newUser
        });
        return "Create successful";
    }
    async findAll(skip, numSize, filter) {
        let data = await this.prisma.users.findMany({
            where: {
                full_name: {
                    contains: filter
                }
            },
            skip: skip,
            take: numSize,
            include: {
                video_comment: true,
                video_like: true
            }
        });
        return data;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map