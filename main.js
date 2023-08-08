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

  document.querySelector('#age-count').innerHTML = `<p data-pt="Tenho ${age} anos sou desenvolvedor com mais de 2 anos de experiência." data-en="I'm ${age} years old and I'm a developer with more than 2 years of experience.">Tenho ${age} anos sou desenvolvedor com <br> mais de <strong>2 anos</strong> de experiência. </p>`
}

document.addEventListener("DOMContentLoaded", calcAge())
