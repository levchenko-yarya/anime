import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { RegisterDto } from '../user/register.dto';
import { LoginDto } from './login.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('register')
  async register(@Body() registerDTO: RegisterDto) {
    const user = await this.userService.create(registerDTO);
    const payload = { login: user.login };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

  @Post('login')
  async login(@Body() loginDTO: LoginDto) {
    const user = await this.userService.findByLogin(loginDTO);
    const payload = { login: user.login };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

  @Get('onlyauth')
  @UseGuards(AuthGuard('jwt'))
  async auth() {
    return 'only auth users';
  }

  @Get('anyone')
  async public() {
    return 'this can be seen by anyone';
  }
}
