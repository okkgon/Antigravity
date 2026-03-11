# SAP Fiori UI5 Development Rules

## 1. 아키텍처 엄수 (Strict Architecture)
*   **XML View 필수**: 모든 프론트엔드 UI는 반드시 XML View로 작성합니다.
*   **로직 분리**: 비즈니스 로직은 JavaScript Controller에 분리하여 완전한 MVC 패턴을 유지합니다.
*   **DOM 조작 금지**: HTML 태그나 jQuery를 이용한 DOM 직접 조작은 절대 금지합니다.
*   **UI5 컨트롤 사용**: 반드시 UI5 컨트롤과 Data Binding을 사용합니다.

## 2. 모듈화 포맷 (Modular Format)
*   **AMD 포맷 준수**: 모든 JS 컨트롤러와 유틸리티 파일은 `sap.ui.define` 및 `sap.ui.require` AMD(Asynchronous Module Definition) 포맷을 엄격하게 준수합니다.
*   **전역 변수 금지**: 전역 변수 노출 및 사용을 엄격히 금지합니다.

## 3. OData 통신 및 에러 핸들링 (OData & Error Handling)
*   **표준 비동기 통신**: 백엔드(ABAP RAP OData 서비스 등)와 통신할 때 OData Model(V2/V4)의 표준 비동기 메서드를 사용합니다.
*   **사용자 친화적 에러 처리**: 통신 에러나 백엔드 예외 발생 시, 원시 에러 로그만 콘솔에 남기지 말고 `sap.m.MessageBox`나 `sap.m.MessageToast`를 활용하여 사용자 친화적인 메시지로 처리합니다.

## 4. 모던 JS 활용 (Modern JavaScript Usage)
*   **ES6+ 문법 활용**: UI5 프레임워크와 호환되는 선에서 ES6+ 문법(화살표 함수, 구조 분해 할당, `const`/`let`)을 적극 활용합니다.
*   **this 바인딩 주의**: Controller 내에서 콜백이나 비동기 작업 시 `this` 바인딩 컨텍스트가 뷰 컨트롤러를 정확히 가리키도록 화살표 함수나 `.bind(this)`를 적절히 사용합니다.
