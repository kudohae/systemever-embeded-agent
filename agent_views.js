(() => {
  const row = document.querySelector('[data-agent-detail]');
  if (row) {
    row.addEventListener('click', () => row.classList.add('selected-row'));
    row.addEventListener('dblclick', () => { location.href = row.dataset.agentDetail; });
    row.addEventListener('keydown', event => {
      if (event.key === 'Enter') location.href = row.dataset.agentDetail;
    });
  }

  const tabs = [...document.querySelectorAll('[data-agent-tab]')];
  const panels = [...document.querySelectorAll('[data-agent-panel]')];
  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(item => {
      const active = item === tab;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });
    panels.forEach(panel => { panel.hidden = panel.dataset.agentPanel !== tab.dataset.agentTab; });
  }));
})();
