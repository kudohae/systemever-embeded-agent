# SystemEver AI 에이전트 화면 목업

SystemEver 화면 구성을 참고해 만든 HTML 목업입니다. 영림원소프트랩의 공식 화면이 아니며, SystemEver 또는 AI API와 연결되지 않습니다. 모듈 메뉴와 화면 이동만 작동하고, 표시된 업무 처리와 조회 버튼은 작동하지 않습니다.

| 화면 | 파일 |
| --- | --- |
| 재고현황조회 시작 화면 | `index.html` |
| 자연어 업무 대화 | `conversation.html` |
| 에이전트 등록안 | `agent_register.html` |
| 조직 승인 및 ID 발급 | `allow_agent.html` |
| 조건 감지와 실행 이력 | `condition_log.html` |
| 구매요청 초안 | `request_draft.html` |

`index.html`을 브라우저에서 열어 시작합니다. 왼쪽 모듈 버튼을 누르면 확장 메뉴가 열리고, AI 모듈에서 등록안·조직 승인·실행 이력으로 이동할 수 있습니다. 상단 `AI에게 업무 요청`은 대화 화면으로, 구매/수입 모듈의 구매요청 초안은 해당 문서 화면으로 이동합니다. 화면은 `styles.css`와 `navigation.js`를 공유합니다.
