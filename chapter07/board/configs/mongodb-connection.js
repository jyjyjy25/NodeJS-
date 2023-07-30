const { MongoClient } = require("mongodb");
// 1. 몽고디비 연결 주소
const uri =
  "mongodb+srv://jyjyjy25:jyjyjy1106%40@nestcluster.bn5imoq.mongodb.net/?retryWrites=true&w=majority";

module.exports = function (callback) {
  // 2. 몽고디비 커넥션 연결 함수 반환
  return MongoClient.connect(uri, callback);
};
