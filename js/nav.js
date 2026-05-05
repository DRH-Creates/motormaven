(function () {
  var btn = document.querySelector('.nav-hamburger');
  if (!btn) return;
  var nav = btn.closest('nav');

  function close() {
    nav.classList.remove('nav-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open navigation menu');
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = nav.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', String(isOpen));
    btn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  nav.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', close);
  });

  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) close();
  });
})();
