import { Demo } from './dto/demo.type';
export declare class AppService {
    getHello(): string;
    getListUser(id: number, hoTen: string, filter: string, token: string): Demo;
}
