function changeLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);

  const elements = document.querySelectorAll('[data-pt], [data-en]');
  elements.forEach(el => {
    el.innerText = el.getAttribute(`data-${lang}`);
  });

  updateTexts(lang);
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

  return age;
}

const updateTexts = (lang) => {
  lang === 'pt' ? (
    document.querySelector('#age-count').innerHTML = `<p>Tenho ${calcAge()} anos e sou desenvolvedor com <br> mais de <strong>2 anos de experiência</strong>. </p>`,
    document.querySelector('#about-me-title').innerHTML = 'Meu nome é <strong>Cristian Rossi Corrêa da Costa</strong>',
    document.querySelector('#about-me-description').innerHTML = 'Sou Desenvolvedor Front-End formado em 2020 em <strong>Sistemas de Informação</strong> pelo Centro Universitário Eurípides de Marília <strong>(UNIVEM)</strong>. Busco <strong>novos desafios</strong> para aprimorar meu conhecimento no <strong>desenvolvimento web</strong>, onde eu possa aplicar minhas habilidades em programação e <strong>contribuir com o time</strong> para criar soluções eficientes <strong>impulsionando o sucesso da empresa</strong> no ambiente digital.'
  ) : (
    document.querySelector('#age-count').innerHTML = `<p>I'm ${calcAge()} years old and I'm a developer with <br> more than <strong>2 years of experience</strong>.</p>`,
    document.querySelector('#about-me-title').innerHTML = 'My name is <strong>Cristian Rossi Corrêa da Costa</strong>',
    document.querySelector('#about-me-description').innerHTML = `I'm a Front-End Developer graduated in 2020 in <strong>Information Systems</strong> from Eurípides de Marília University Center <strong>(UNIVEM)</strong>. I'm looking for <strong>new challenges</strong> to improve my knowledge in <strong>web development</strong>, where I can apply my skills in programming and <strong>contribute to the team</strong> to create efficient solutions <strong>boosting the company's success</strong> in the digital environment.`
  )
}

document.addEventListener("DOMContentLoaded", () => updateTexts('pt'));
