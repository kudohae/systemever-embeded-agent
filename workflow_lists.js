(() => {
  const rows = [...document.querySelectorAll('[data-detail-href]')];
  rows.forEach(row => {
    row.addEventListener('click', () => {
      rows.forEach(item => item.classList.toggle('selected-row', item === row));
      const counter = document.querySelector('[data-selected-count]');
      if (counter) counter.textContent = '선택 1건';
    });
    row.addEventListener('dblclick', () => { location.href = row.dataset.detailHref; });
    row.addEventListener('keydown', event => {
      if (event.key === 'Enter') location.href = row.dataset.detailHref;
    });
  });
})();
