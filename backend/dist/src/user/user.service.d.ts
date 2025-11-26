import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto & {
        confirmPassword?: string;
    }): Promise<{
        email: string;
        password: string;
        id: number;
        refreshToken: string | null;
        createdAt: Date;
    }>;
    findByEmail(email: string): Promise<{
        email: string;
        password: string;
        id: number;
        refreshToken: string | null;
        createdAt: Date;
    } | null>;
    findById(id: number): Promise<{
        email: string;
        password: string;
        id: number;
        refreshToken: string | null;
        createdAt: Date;
    } | null>;
}
