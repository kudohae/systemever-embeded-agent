(() => {
  const menus = {
    '인사/급여': ['[인사] 기본정보', '[인사] 근태관리', '[급여] 급여관리'],
    '회계': ['[회계] 전표관리', '[회계] 장부조회', '[회계] 결산관리'],
    '영업/수출': ['[영업] 수주관리', '[영업] 매출관리', '[수출] 선적관리'],
    '구매/수입': [
      '[구매] 기본정보',
      '[수입] 기본정보',
      ['[구매] 구매', 'purchase.html'],
      '[구매] 입고', '[구매] 반품', '[구매] 구매실적분석',
      '[구매] 구매검사관리', '[수입] 수입관리', '[수입] 수입검사관리'
    ],
    '생산/외주': ['[생산] 생산계획', '[생산] 작업지시', '[외주] 외주관리'],
    '물류': [
      ['[물류] 재고현황조회', 'index.html'],
      '[물류] 입출고관리', '[물류] 재고이동/이동(자재)', '[물류] 재고실사'
    ],
    '원가': ['[원가] 원가계산', '[원가] 원가분석'],
    'AI': [
      ['[AI] 에이전트 현황', 'agent_list.html'],
      ['[AI] 등록안 관리', 'registration_list.html'],
      ['[AI] 조직 승인', 'approval_list.html'],
      ['[AI] 실행 이력', 'execution_list.html'],
      ['[AI] 확인 필요 업무', 'attention_list.html']
    ],
    '운영기본': ['[운영기본] 사용자관리', '[운영기본] 권한관리', '[운영기본] 코드관리']
  };

  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  const shade = document.createElement('div');
  shade.className = 'module-shade';
  shade.hidden = true;
  const drawer = document.createElement('nav');
  drawer.className = 'module-drawer';
  drawer.setAttribute('aria-label', '모듈 상세 메뉴');
  drawer.hidden = true;
  document.body.append(shade, drawer);

  const modules = [...sidebar.querySelectorAll('.module')];
  function closeMenu() {
    drawer.hidden = true;
    shade.hidden = true;
    modules.forEach(button => button.setAttribute('aria-expanded', 'false'));
  }

  function openMenu(button) {
    const name = button.dataset.module;
    if (!name) return;
    if (!drawer.hidden && drawer.dataset.openModule === name) {
      closeMenu();
      return;
    }
    drawer.replaceChildren();
    drawer.dataset.openModule = name;
    const header = document.createElement('div');
    header.className = 'module-drawer-header';
    const title = document.createElement('strong');
    title.textContent = name;
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'module-drawer-close';
    close.setAttribute('aria-label', '메뉴 닫기');
    close.textContent = '×';
    close.addEventListener('click', closeMenu);
    header.append(title, close);
    drawer.append(header);
    (menus[name] || []).forEach(item => {
      const [label, href] = Array.isArray(item) ? item : [item, null];
      const entry = document.createElement(href ? 'a' : 'div');
      entry.className = `module-drawer-item${href ? '' : ' unavailable'}`;
      entry.textContent = label;
      if (href) {
        entry.href = href;
        if (location.pathname.split('/').pop() === href) entry.setAttribute('aria-current', 'page');
      }
      drawer.append(entry);
    });
    modules.forEach(item => item.setAttribute('aria-expanded', String(item === button)));
    shade.hidden = false;
    drawer.hidden = false;
  }

  modules.forEach(button => {
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => openMenu(button));
  });
  shade.addEventListener('click', closeMenu);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
})();
