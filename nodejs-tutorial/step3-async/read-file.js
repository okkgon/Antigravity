const path = require('path');

// fs는 File System의 약자로, Node.js에서 기본 제공하는 파일 입출력 모듈입니다.
const fs = require('fs');

console.log("=== 1번: 프로그램 시작! ===");

// 비동기(Asynchronous) 방식으로 파일 읽기
// 이 함수는 파일을 읽어오라고 '명령만 내리고' 바로 다음 코드로 넘어갑니다.
fs.readFile(path.join(__dirname, 'data.txt'), 'utf8', (err, data) => {
  // 이 부분(콜백 함수)은 파일 읽기가 완전히 끝난 뒤에 나중에 실행됩니다.
  if (err) {
    console.error("파일 읽기 실패:", err);
    return;
  }
  console.log("=== 3번: 파일 읽기 완료! ===");
  console.log(data);
});

console.log("=== 2번: 파일 읽기를 지시하고, 저는 다른 일을 먼저 합니다. ===");
