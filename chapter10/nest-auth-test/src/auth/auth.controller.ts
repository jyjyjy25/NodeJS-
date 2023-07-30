import { CreateUserDto } from './../user/user.dto';
import { AuthService } from './auth.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {} // AuthService를 주입받음

  @Post('register') // register 주소로 POST 온 요청 처리
  // class-validator가 자동으로 유효성 검증
  async register(@Body() userDto: CreateUserDto) {
    // authService를 사용해 user 정보 저장
    return await this.authService.register(userDto);
  }
}
