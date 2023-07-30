import { AuthService } from './auth.service';
import { Injectable, CanActivate } from '@nestjs/common';

@Injectable()
// CanActivate 인터페이스 구현
export class LoginGuard implements CanActivate {
  // authService를 주입받음
  constructor(private authService: AuthService) {}

  // CanActiate 인터페이스의 메서드
  async canActivate(context: any): Promise<boolean> {
    // 컨텍스트에서 리퀘스트 정보를 가져옴
    const request = context.switchToHttp().getRequest();

    // 쿠키가 있으면 인증된 것
    if (request.cookies['login']) {
      return true;
    }

    // 쿠키가 없으면 request의 body 정보 확인
    if (!request.body.email || !request.body.password) {
      return false;
    }

    // 인증 로직은 기존의 authService.validateUser 사용
    const user = await this.authService.validateUser(
      request.body.email,
      request.body.password,
    );

    // 유저 정보가 없으면 false 반환
    if (!user) {
      return false;
    }

    // 있으면 request에 user 정보를 추가하고 true 반환
    request.user = user;
    return true;
  }
}
