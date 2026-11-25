(function () {
  var r = document.getElementById('root');
  if (!r || !('IntersectionObserver' in window)) return;
  r.classList.add('js');
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  r.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });
})();
