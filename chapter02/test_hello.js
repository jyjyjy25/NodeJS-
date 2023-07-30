import http from "k6/http";

export const options = {
  vus: 100, // 가상 유저 설정
  duration: "10s", // 몇 초 동안 테스트를 진행할지 설정
}; // 100명이 10초 동안 계속 요청을 보내는 설정

export default function () {
  // 성능 테스트 시 실행되는 함수
  http.get("http://localhost:8001");
}

// 가상 유저 100명이 10초 동안 http://localhost:8000에 동시에 계속해서 요청을 보낸다는 의미이다.
