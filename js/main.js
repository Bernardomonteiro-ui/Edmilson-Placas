// Edmilson Placas — interações leves (menu, animações de entrada, modo revisão)
(function () {
  // Modo revisão: abra o site com ?revisao para destacar todos os [CONFIRMAR]
  if (/[?&]revisao/.test(location.search)) document.body.classList.add('review-mode');

  // Menu mobile
  var header = document.querySelector('.header');
  var burger = document.querySelector('.burger');
  burger.addEventListener('click', function () {
    var open = header.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      header.classList.remove('menu-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  // Animações de entrada ao rolar
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 80 + 'ms';
      io.observe(el);
    });
  } else {
    items.forEach(function (el) { el.classList.add('is-in'); });
  }

  // Ano atual no rodapé
  document.getElementById('ano').textContent = new Date().getFullYear();
})();
