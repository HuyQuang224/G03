import type { Request } from 'express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    register(data: CreateUserDto): Promise<{
        email: string;
        password: string;
        id: number;
        refreshToken: string | null;
        createdAt: Date;
    }>;
    me(req: Request): Promise<{
        email: string;
        password: string;
        id: number;
        refreshToken: string | null;
        createdAt: Date;
    } | null>;
}
