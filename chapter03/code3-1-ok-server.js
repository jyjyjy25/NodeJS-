const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html"); // 1. 응답 헤더 설정
  res.end("OK"); // 2. "OK"를 응답하고 종료
});

server.listen("3000", () => console.log("OK 서버 시작!")); // 3. 접속 대기

/* 
아래와 같은 형태도 가능하다.
http
  .createServer((req, res) => {
    res.setHeader("Content-type", "text/html"); // 1. 응답 헤더 설정
    res.end("OK"); // 2. "OK"를 응답하고 종료
  })
  .listen("3000", () => console.log("OK 서버 시작!")); // 3. 접속 대기
*/
