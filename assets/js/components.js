document.addEventListener('DOMContentLoaded', () => {
  const load = (el, path) =>
    fetch(`partials/${path}`).then(r=>r.text()).then(html => { el.outerHTML = html; });

  document.querySelectorAll('[data-include]').forEach(el => {
    const path = el.getAttribute('data-include');
    load(el, path);
  });
});
