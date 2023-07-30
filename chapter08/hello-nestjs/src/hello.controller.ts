import { Controller, Get } from "@nestjs/common";

@Controller() // 컨트롤러 데코레이터
// 외부에서 사용하므로 export를 붙여준다.
export class HelloController {
  @Get() // GET 요청 처리 데코레이터
  hello() {
    return "안녕하세요! NestJS로 만든 첫 애플리케이션입니다.";
  }
}
