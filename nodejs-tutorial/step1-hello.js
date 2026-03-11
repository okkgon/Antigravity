// 1. 단순한 출력 (브라우저의 console.log와 동일합니다)
console.log("Hello, Node.js World!");

// 2. Node.js 환경에서만 제공되는 전역 객체(Global Object) 테스트
// 브라우저에서는 window 라는 객체가 있지만, Node.js에서는 global 또는 process 라는 객체를 사용합니다.

console.log("-----------------------------------------");
console.log("현재 이 파일이 있는 절대 경로:", __dirname);
console.log("현재 이 파일의 전체 이름:", __filename);
console.log("내 컴퓨터의 운영체제 플랫폼:", process.platform); // ex: 'win32', 'darwin'(mac), 'linux'
console.log("현재 설치된 Node.js 버전:", process.version);
console.log("-----------------------------------------");
