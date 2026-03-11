# Node.js Development Rules

## 1. 최신 JavaScript 문법 활용 (Modern JavaScript Usage)
*   **ES6+ 문법 엄수**: `var` 대신 `const`와 `let`만 사용합니다 (기본적으로 `const` 사용 권장).
*   **화살표 함수**: 콜백이나 익명 함수에는 가급적 화살표 함수(`() => {}`)를 사용하여 `this` 바인딩 문제를 방지하고 코드를 간결하게 유지합니다.
*   **구조 분해 할당(Destructuring)**: 객체나 배열에서 값을 추출할 때 구조 분해 할당 문법을 사용하여 가독성을 높입니다.

## 2. 비동기 처리 철칙 (Asynchronous Programming)
*   **비동기 함수 선호**: 콜백(Callback) 패턴보다 `Promise` 기반으로 작성하고, 가독성을 위해 `async`/`await` 문법을 적극 활용합니다.
*   **에러 핸들링 필수**: 모든 `async` 함수 내 비동기 호출에는 `try...catch` 구문을 적용하거나 `.catch()`를 연결하여 Promise Rejection 에러가 누락되지 않도록(Unhandled Promise Rejection 방지) 합니다.

## 3. 모듈화 및 아키텍처 (Modules & Architecture)
*   **단일 책임 원칙 (SRP)**: 하나의 모듈(파일)은 하나의 핵심적인 책임만 가지도록 설계 및 분리합니다.
*   **모듈 시스템 일관성**: 프로젝트 환경에 맞춰 CommonJS(`require`/`module.exports`) 또는 ES Modules(`import`/`export`) 중 하나를 일관성 있게 사용합니다. 튜토리얼 진행 시 스텝별 환경 설정 파일(`package.json`의 `type` 필드 등)에 주의합니다.

## 4. 에러 처리 및 로깅 (Error Handling & Logging)
*   **에러 삼키기 금지**: 에러를 무시하거나 콘솔에 단순 출력 후 종료하지 말고, 상황에 맞게 명시적으로 `throw` 하거나 상위 호출자로 전달하여 적절한 처리 계층에서 대응하게 합니다.
*   **Error 객체 사용**: 에러 발생 시 문자열(String)이 아닌 기본 `Error` 객체나 상속받은 커스텀 Error 클래스를 생성하여 던집니다 (예: `throw new Error('Message');`).

## 5. 코드 스타일 및 포맷팅 (Code Style & Formatting)
*   **명명 규칙 (Naming Conventions)**:
    *   변수 및 함수: `camelCase` (예: `getUserData`)
    *   클래스 및 생성자: `PascalCase` (예: `UserService`)
    *   상수 (환경 변수 등): `UPPER_SNAKE_CASE` (예: `MAX_RETRY_COUNT`)
*   **일관된 들여쓰기**: 팀/프로젝트 표준 탭(또는 스페이스) 크기를 일관성 있게 유지합니다. (권장: 스페이스 2칸)
