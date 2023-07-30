const { MongoClient, ServerApiVersion } = require("mongodb");

// 1. MongoDB 연결 정보
const uri =
  "mongodb+srv://jyjyjy25:<password>@nestcluster.bn5imoq.mongodb.net/?retryWrites=true&w=majority";

// 2. MongoDB 클라이언트 객체 생성
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  // 3. MongoDB에 접속
  await client.connect();
  // 4. admin DB 인스턴스
  const adminDB = client.db("test").admin();
  // 5. 데이터베이스 정보 가져오기
  const listDatabases = await adminDB.listDatabases();
  console.log(listDatabases);
  return "OK";
}

// 6. 실행 함수
run()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
