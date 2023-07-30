import { Module } from "@nestjs/common";
import { HelloController } from "./hello.controller";

// 모듈 데코레이터
@Module({
  controllers: [HelloController],
})
export class HelloModule {}
