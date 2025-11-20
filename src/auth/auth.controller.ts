import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';

@Controller('auth')  //auth is the route prefix for all routes in this controller
export class AuthController {

    constructor(private readonly authService: AuthService) {}
    @Post('register')           // routes will be /auth/register
    async register(@Body() registerUserDto:RegisterDto) {
        const createdUser = await this.authService.registerUser(registerUserDto);
        return createdUser
    }

}
