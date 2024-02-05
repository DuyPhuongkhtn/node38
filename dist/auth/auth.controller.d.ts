import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import loginDTO from './dto/login.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: loginDTO): Promise<any>;
    signUp(): string;
    create(createAuthDto: CreateAuthDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAuthDto: UpdateAuthDto): string;
    remove(id: string): string;
}
