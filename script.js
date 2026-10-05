const languageJump = document.getElementById('languageJump');
const languageFilter = document.getElementById('languageFilter');
const languageGrid = document.getElementById('languageGrid');
const noResults = document.getElementById('noResults');
const year = document.getElementById('year');
const lastUpdate = document.getElementById('lastUpdate');

languageJump?.addEventListener('click', () => {
  document.getElementById('languages')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => languageFilter?.focus(), 500);
});

languageFilter?.addEventListener('input', (event) => {
  const query = event.target.value.trim().toLowerCase();
  let visible = 0;
  [...languageGrid.querySelectorAll('.language-card')].forEach((card) => {
    const match = card.dataset.language.includes(query);
    card.classList.toggle('hidden', !match);
    if (match) visible += 1;
  });
  noResults.classList.toggle('show', visible === 0);
});

year.textContent = new Date().getFullYear();

function getLatestMonday(date = new Date()) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? 6 : day - 1;
  d.setDate(d.getDate() - diff);
  return d;
}
const monday = getLatestMonday();
const formatted = monday.toLocaleDateString('en-GB', { weekday:'long', day:'2-digit', month:'short', year:'numeric' });
lastUpdate.textContent = `Last update: ${formatted}`;

// Keep the original search endpoint behavior while allowing normal GET submission.
document.getElementById('docSearch')?.addEventListener('submit', (e) => {
  const query = document.getElementById('query').value.trim();
  if (!query) {
    e.preventDefault();
    document.getElementById('query').focus();
  }
});
