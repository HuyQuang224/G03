import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthController {
    private authService;
    private jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    login(data: {
        email: string;
        password: string;
    }): Promise<{
        email: string;
        accessToken: string;
        refreshToken: string | undefined;
    }>;
    refresh(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    } | {
        accessToken: string;
        refreshToken?: undefined;
    }>;
    logout(userId: number): Promise<{
        message: string;
    }>;
}
