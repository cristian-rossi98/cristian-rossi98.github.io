function changeLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);

  const elements = document.querySelectorAll('[data-pt], [data-en]');
  elements.forEach(el => {
    el.innerText = el.getAttribute(`data-${lang}`);
  });
}

const calcAge = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Os meses no objeto Date vão de 0 a 11
  const day = date.getDate();
  let age = year - 1998;

  if (month < 11 || (month === 11 && day < 27)) {
    age--;
  }

  document.querySelector('#age-count').innerHTML = `Tenho ${age} anos sou desenvolvedor com <br> mais de <strong>2 anos</strong> de experiência.`
}

document.addEventListener("DOMContentLoaded", calcAge())
