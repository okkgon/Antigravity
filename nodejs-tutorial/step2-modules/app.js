// math.js 파일에서 내보낸 함수들을 가져와서 사용해봅니다.
// 내장 모듈이나 npm 패키지가 아닌, '내가 만든 파일'을 가져올 때는 반드시 경로(./ 또는 ../)를 적어주어야 합니다.

const mathObj = require('./math.js'); // .js 확장자는 생략 가능합니다 (require('./math'))

console.log("=== Node.js 모듈 시스템 실습 ===");
console.log("계산기 모듈 버전:", mathObj.version);

const sum = mathObj.add(10, 20);
const prod = mathObj.multiply(5, 5);

console.log(`10 + 20의 결과: ${sum}`);
console.log(`5 * 5의 결과: ${prod}`);
console.log("===============================");
