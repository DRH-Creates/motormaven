(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var targetY = window.scrollY;
  var currentY = window.scrollY;
  var ease = 0.07;
  var frame;

  function tick() {
    currentY += (targetY - currentY) * ease;
    window.scrollTo(0, currentY);
    if (Math.abs(targetY - currentY) > 0.5) {
      frame = requestAnimationFrame(tick);
    }
  }

  window.addEventListener('wheel', function (e) {
    e.preventDefault();
    targetY = Math.max(
      0,
      Math.min(targetY + e.deltaY, document.documentElement.scrollHeight - window.innerHeight)
    );
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(tick);
  }, { passive: false });
})();
