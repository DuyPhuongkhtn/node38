/// <reference types="multer" />
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class UserController {
    private readonly userService;
    private cloudinaryService;
    constructor(userService: UserService, cloudinaryService: CloudinaryService);
    create(createUserDto: CreateUserDto): Promise<string>;
    findAll(page: any, size: any, filter: any, req: any): Promise<any>;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
    upload(file: any): any;
    uploadCloud(file: Express.Multer.File): Promise<import("cloudinary").UploadApiResponse | import("cloudinary").UploadApiErrorResponse>;
}
