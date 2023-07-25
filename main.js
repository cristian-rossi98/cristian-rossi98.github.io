function changeLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);

  const elements = document.querySelectorAll('[data-pt], [data-en]');
  elements.forEach(el => {
    el.innerText = el.getAttribute(`data-${lang}`);
  });
}
