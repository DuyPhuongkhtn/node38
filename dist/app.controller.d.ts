import { AppService } from './app.service';
import { Demo } from './dto/demo.type';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getListUser(id: any, hoTen: any, filter: any, token: any): Demo;
    createUser(body: any): any;
}
