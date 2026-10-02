(() => {
  const trigger = document.querySelector('#ai-chat-trigger');
  if (!trigger) return;

  const host = document.createElement('div');
  host.className = 'ai-panels';
  host.innerHTML = `
    <section class="ai-result-panel" id="ai-purchase-result" role="dialog" aria-modal="false" aria-label="구매내역 조회 결과" hidden>
      <div class="ai-panel-header"><div><strong>구매내역 조회</strong><small>품목별 매입 이력</small></div><button type="button" class="ai-panel-close" data-close-result aria-label="조회 결과 닫기">×</button></div>
      <div class="ai-result-body">
        <div class="ai-result-title">조회조건</div>
        <div class="ai-result-filters"><span>사업장 <b>A사업장</b></span><span>조회기간 <b>2026-04-02 ~ 2026-10-02</b></span><span>품목코드 <b>BOX-500400300</b></span></div>
        <div class="ai-result-title">재고 현황 <small>2026-10-02 08:31 기준</small></div>
        <div class="ai-stock-grid"><div>현재고<strong>420 <small>EA</small></strong></div><div>예약출고<strong>160 <small>EA</small></strong></div><div>확정입고예정<strong>80 <small>EA</small></strong></div><div>안전재고<strong>400 <small>EA</small></strong></div></div>
        <div class="ai-result-title">최근 6개월 구매내역 <small>조회 4건</small></div>
        <div class="ai-result-table-wrap"><table class="ai-result-table"><thead><tr><th>구매일</th><th>구매오더번호</th><th>거래처</th><th>수량</th><th>단가</th><th>입고상태</th></tr></thead><tbody>
          <tr><td>2026-09-18</td><td>PO-260918-001</td><td>한빛포장</td><td class="num">500</td><td class="num">1,200</td><td>입고완료</td></tr>
          <tr><td>2026-09-12</td><td>PO-260912-004</td><td>새봄패키지</td><td class="num">300</td><td class="num">1,150</td><td>입고완료</td></tr>
          <tr><td>2026-08-20</td><td>PO-260820-002</td><td>한빛포장</td><td class="num">400</td><td class="num">1,210</td><td>입고완료</td></tr>
          <tr><td>2026-07-16</td><td>PO-260716-003</td><td>새봄패키지</td><td class="num">350</td><td class="num">1,160</td><td>입고완료</td></tr>
        </tbody></table></div>
        <div class="ai-result-footer">수량 단위 EA · 단가 원 · VAT 별도</div>
      </div>
    </section>
    <section class="ai-chat-panel" id="ai-chat-panel" role="dialog" aria-modal="false" aria-label="AI 업무 대화" hidden>
      <div class="ai-panel-header"><div><strong>AI 업무 대화</strong><small>명림산업 · A사업장</small></div><button type="button" class="ai-panel-close" data-close-chat aria-label="대화창 닫기">×</button></div>
      <div class="ai-chat-subheader"><span>대화 ID CHAT-20261002-018</span><span class="ai-online-dot">업무 도우미</span></div>
      <div class="ai-chat-scroll">
        <div class="ai-chat-date">2026-10-02</div>
        <div class="ai-chat-message mine"><div class="ai-chat-bubble">A사업장의 500×400×300 골판지 박스 재고와 최근 6개월 구매내역을 보여줘.</div><span>08:31</span></div>
        <div class="ai-chat-message bot"><div class="ai-chat-avatar">AI</div><div class="ai-chat-bubble">품목 <b>BOX-500400300</b>을 확인했습니다. 현재고는 420개, 예약출고는 160개, 확정입고예정은 80개입니다.<button type="button" class="ai-inline-action" data-show-result>재고 및 구매내역 보기 <span>›</span></button></div><span>08:31</span></div>
        <div class="ai-chat-message mine"><div class="ai-chat-bubble">예상가용재고가 안전재고 이하가 되면 구매요청 초안을 만들어줘. 결재상신은 내가 확인한 뒤에 해줘.</div><span>08:32</span></div>
        <div class="ai-chat-message bot"><div class="ai-chat-avatar">AI</div><div class="ai-chat-bubble">반복 실행할 업무입니다. 실행조건과 권한을 정한 뒤 에이전트 등록안을 제출할 수 있습니다.<a class="ai-inline-action" href="registration_list.html">등록안 관리로 이동 <span>›</span></a></div><span>08:32</span></div>
      </div>
      <div class="ai-chat-compose"><div class="ai-compose-box"><textarea aria-label="AI에게 업무 요청 입력" placeholder="업무 요청을 입력하세요" rows="2"></textarea><button type="button" class="ai-send-button" aria-label="업무 요청 보내기" title="업무 요청 보내기">➤</button></div><div class="ai-compose-foot">조회 결과와 실행 권한을 확인한 뒤 업무를 진행합니다.</div></div>
    </section>`;
  document.body.append(host);

  const chat = host.querySelector('#ai-chat-panel');
  const result = host.querySelector('#ai-purchase-result');
  const closeResult = () => { result.hidden = true; };
  const closeChat = () => {
    closeResult();
    chat.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus();
  };
  const openChat = () => {
    chat.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    chat.querySelector('[data-close-chat]').focus();
  };
  trigger.setAttribute('aria-controls', 'ai-chat-panel');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.addEventListener('click', () => chat.hidden ? openChat() : closeChat());
  host.querySelector('[data-close-chat]').addEventListener('click', closeChat);
  host.querySelector('[data-close-result]').addEventListener('click', () => {
    closeResult();
    host.querySelector('[data-show-result]').focus();
  });
  host.querySelector('[data-show-result]').addEventListener('click', () => { result.hidden = false; });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || chat.hidden) return;
    if (!result.hidden) closeResult(); else closeChat();
  });
  if (new URLSearchParams(location.search).get('chat') === 'open') openChat();
})();
