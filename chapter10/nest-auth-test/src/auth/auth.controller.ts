import { LoginGuard } from './auth.guard';
import { CreateUserDto } from './../user/user.dto';
import { AuthService } from './auth.service';
import {
  Controller,
  Post,
  Get,
  Body,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {} // AuthService를 주입받음

  @Post('register') // register 주소로 POST 온 요청 처리
  // class-validator가 자동으로 유효성 검증
  async register(@Body() userDto: CreateUserDto) {
    // authService를 사용해 user 정보 저장
    return await this.authService.register(userDto);
  }

  @Post('login')
  async login(@Request() req, @Response() res) {
    // validateUser를 호출해 유저 정보 획득
    const userInfo = await this.authService.validateUser(
      req.body.email,
      req.body.password,
    );

    // 유저 정보가 있으면 쿠키 정보를 response에 저장
    if (userInfo) {
      res.cookie('login', JSON.stringify(userInfo), {
        httpOnly: false, // 브라우저에서 읽을 수 있도록 함
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7day 단위는 밀리초
      });
    }
    return res.send({ message: 'login success' });
  }

  @UseGuards(LoginGuard)
  @Post('login2')
  async login2(@Request() req, @Response() res) {
    // 쿠키 정보는 없지만 request에 user 정보가 있다면 응답값에 쿠키 정보 추가
    if (!req.cookies['login'] && req.user) {
      // 응답에 쿠키 정보 추가
      res.cookie('login', JSON.stringify(req.user), {
        httpOnly: true,
        maxAge: 1000 * 10, // 로그인 테스트를 고려해 10초로 설정
      });
    }
    return res.send({ message: 'login2 success' });
  }

  @UseGuards(LoginGuard)
  @Get('test-guard')
  testGuard() {
    return '로그인된 때만 이 글이 보입니다.';
  }
}
