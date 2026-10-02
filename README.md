# SystemEver AI 에이전트 화면 목업

제공된 SystemEver 재고조회·사원명단조회·사원상세 화면을 참고해 만든 HTML 목업입니다. 교육용 사이트의 로그인 후 화면을 직접 탐색한 결과물은 아닙니다. 영림원소프트랩의 공식 화면이 아니며, SystemEver 또는 AI API와 연결되지 않습니다. 모듈 메뉴, 목록→상세 이동, 상세 탭 전환과 전역 AI 대화창 및 구매내역 패널 열기는 작동합니다. 표시된 업무 처리와 실제 조회는 작동하지 않습니다.

| 화면 | 파일 |
| --- | --- |
| 재고현황조회 시작 화면 | `index.html` |
| 자연어 업무 대화 바로가기 | `conversation.html` → `index.html?chat=open` |
| AI 에이전트 현황 목록 | `agent_list.html` |
| AI 에이전트 상세정보 | `agent_detail.html` |
| 등록안 관리 목록 | `registration_list.html` |
| 등록안 상세 | `agent_register.html` |
| 승인 완료 등록안 상세 | `registration_approved.html` |
| 조직 승인 대기 목록 | `approval_list.html` |
| 승인 대기 건 상세 | `approval_pending.html` |
| 승인 완료 건 상세 | `allow_agent.html` |
| 실행 이력 목록 | `execution_list.html` |
| 초안 생성 실행 상세 | `condition_log.html` |
| 중복 제외 실행 상세 | `execution_duplicate.html` |
| 확인 필요 업무 목록 | `attention_list.html` |
| 구매요청 초안 | `request_draft.html` |

`index.html`을 브라우저에서 열어 시작합니다. AI 모듈의 다섯 메뉴는 각각 목록에서 시작하며, 행을 더블클릭하면 상세 화면으로 이동합니다. 등록안 `DRAFT-018`은 승인되어 `AG-PUR-001`의 현행 명세 v1이 되었고, `DRAFT-019`는 같은 에이전트의 안전재고 기준을 바꾸는 승인 대기 명세 v2입니다. 모든 화면의 상단 `AI 대화` 버튼으로 오른쪽 대화창을 열 수 있고, 대화 속 `재고 및 구매내역 보기`를 누르면 왼쪽에 조회 결과가 펼쳐집니다. 구매요청 초안은 구매/수입 문서 화면에 있습니다.
