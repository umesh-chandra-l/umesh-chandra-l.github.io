// main.js
document.getElementById('year').textContent = new Date().getFullYear();

// mobile nav
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
toggle.addEventListener('click', ()=> nav.classList.toggle('open'));

// highlight active link on scroll
const links = [...document.querySelectorAll('.nav-links a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href')));
const onScroll = () => {
  const y = window.scrollY + 100;
  sections.forEach((sec, i) => {
    if (!sec) return;
    const top = sec.offsetTop, bottom = top + sec.offsetHeight;
    links[i].classList.toggle('active', y >= top && y < bottom);
  });
};
document.addEventListener('scroll', onScroll);
onScroll();
