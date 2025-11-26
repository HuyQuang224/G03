import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private userService;
    private jwtService;
    private prisma;
    constructor(userService: UserService, jwtService: JwtService, prisma: PrismaService);
    validateUser(email: string, password: string): Promise<{
        email: string;
        password: string;
        id: number;
        refreshToken: string | null;
        createdAt: Date;
    }>;
    generateTokens(user: any, isLogin?: boolean): Promise<{
        accessToken: string;
        refreshToken: string;
    } | {
        accessToken: string;
        refreshToken?: undefined;
    }>;
    saveRefreshToken(userId: number, refreshToken: string): Promise<void>;
    getUserByRefreshToken(refreshToken: string): Promise<{
        email: string;
        password: string;
        id: number;
        refreshToken: string | null;
        createdAt: Date;
    } | null>;
    removeRefreshToken(userId: number): Promise<void>;
}
