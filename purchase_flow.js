(() => {
  const shell = document.querySelector('.purchase-flow .app-shell');
  const workspace = shell?.querySelector('.workspace');
  if (!workspace) return;
  const current = location.pathname.split('/').pop();
  const rail = document.createElement('nav');
  rail.className = 'purchase-rail-menu';
  rail.setAttribute('aria-label', '구매/수입 상세 메뉴');
  rail.innerHTML = `<div class="purchase-rail-title"><strong>구매/수입</strong><span>⟳ &nbsp;⚑ &nbsp;×</span></div>
    <div class="purchase-rail-item">[구매] 기본정보</div>
    <div class="purchase-rail-item">[수입] 기본정보</div>
    <a href="purchase.html" class="purchase-main-menu">[구매] 구매</a>
    <div class="purchase-rail-item">[구매] 입고</div>
    <div class="purchase-rail-item">[구매] 반품</div>
    <div class="purchase-rail-item">[구매] 구매실적분석</div>
    <div class="purchase-rail-item">[구매] 구매검사관리</div>
    <div class="purchase-rail-item">[수입] 수입관리</div>
    <div class="purchase-rail-item">[수입] 수입검사관리</div>`;
  rail.querySelector('.purchase-main-menu').setAttribute('aria-current', 'page');
  if (current === 'purchase_request_list.html' || current === 'request_draft.html') {
    rail.querySelector('.purchase-main-menu').title = '구매요청조회';
  }
  shell.insertBefore(rail, workspace);
  const blankRows = document.querySelector('[data-purchase-blank-rows]');
  if (blankRows) {
    for (let index = 0; index < 19; index += 1) {
      const row = document.createElement('tr');
      row.className = 'purchase-empty-row';
      row.innerHTML = '<td class="rownum">A</td>' + '<td></td>'.repeat(10);
      blankRows.append(row);
    }
  }
})();
