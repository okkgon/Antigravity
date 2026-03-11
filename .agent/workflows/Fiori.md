---
description: 데이터 모델(Entity)로부터 Fiori CRUD XML View 및 JS Controller 생성하기
---
# Fiori CRUD 생성 워크플로우

이 워크플로우는 사용자가 제공한 데이터 모델(Entity)을 기반으로 기본 CRUD 로직을 포함하는 표준 SAP Fiori XML View 뼈대와 JS Controller를 생성합니다.

## 단계

1. **Entity 세부 정보 요청:**
   사용자에게 대상 데이터 모델(Entity 식별자), 기본 키, 그리고 관리하고자 하는 주요 속성/필드를 물어봅니다. 사용자의 응답을 기다립니다.

2. **XML View 생성 (Fiori 가이드라인):**
   `webapp/view/` 디렉토리 내에 `{EntityName}.view.xml` (또는 프로젝트 명명 규칙에 따른 이름) 파일로 XML View를 생성합니다.
   - 표준 Fiori 디자인 구조(예: `sap.f.DynamicPage` 또는 `sap.m.semantic.SemanticPage`)를 사용합니다.
   - Read(조회) 작업을 위한 `sap.m.Table` 또는 `sap.ui.table.Table`을 포함합니다.
   - 생성, 편집, 삭제 작업을 위한 버튼이 있는 툴바를 추가합니다.
   - 지정된 Entity 필드에 표준 데이터 바인딩을 사용합니다.

3. **JS Controller 생성 (CRUD 로직):**
   `webapp/controller/` 디렉토리 내에 대응되는 JS Controller인 `{EntityName}.controller.js` 파일을 생성합니다.
   - 표준 UI5 보일러플레이트 `sap.ui.define(...)`을 포함합니다.
   - `onInit()`: View 상태 모델 및 라우터 이벤트를 초기화합니다.
   - `onCreate()`: 생성 다이얼로그를 열거나 상세 페이지로 이동합니다.
   - `onUpdate()` / `onEdit()`: 선택된 항목에 대해 편집 모드로 전환하거나 편집 다이얼로그를 엽니다.
   - `onDelete()`: 확인 다이얼로그(`sap.m.MessageBox.confirm`)와 OData `.remove()` 호출 로직을 추가합니다.
   - `onSave()`: 변경 사항 저장 로직(예: `oModel.create()`, `oModel.update()` 또는 `oModel.submitChanges()`)을 포함합니다.

4. **작업 공간에 파일 저장:**
   `write_to_file` 도구를 사용하여 생성된 XML View 및 JS Controller 파일을 SAP UI5 작업 공간 내 올바른 경로(일반적으로 `sap/webapp/view/` 및 `sap/webapp/controller/` 내부)로 저장합니다.

5. **사용자 알림:**
   사용자에게 CRUD 템플릿 생성이 성공적으로 완료되었음을 알리고, 생성된 파일과 구현된 작업에 대한 간략한 개요를 제공합니다.
