// 이 파일은 "계산기" 역할을 하는 별도의 모듈입니다.
// 다른 파일에서 이 함수들을 가져다 쓸 수 있도록 export(내보내기) 해야 합니다.

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// CommonJS 방식의 모듈 내보내기 (가장 기본적이고 널리 쓰이는 방식)
module.exports = {
  add: add,
  multiply: multiply,
  version: '1.0.0'
};
