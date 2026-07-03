/* Animations for animated.html — scroll reveals + number count-ups.
   Does nothing unless <body class="animated"> and motion is allowed. */
(function () {
  if (!document.body.classList.contains('animated')) return;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('revealed');
    });
    return;
  }

  /* ─── Scroll reveals ─── */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    observer.observe(el);
  });

  /* ─── Count-up numbers (elements with data-count) ─── */
  function countUp(el) {
    var text = el.textContent.trim();
    var match = text.match(/^([^0-9]*)([\d,]+)(.*)$/);
    if (!match) return;
    var prefix = match[1];
    var target = parseInt(match[2].replace(/,/g, ''), 10);
    var suffix = match[3];
    if (!target || target < 2) return; // nothing to animate for tiny numbers

    var duration = 1300;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      var value = Math.round(target * eased);
      el.textContent = prefix + value.toLocaleString('en-US') + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var counted = new WeakSet();
  var countObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !counted.has(entry.target)) {
        counted.add(entry.target);
        countUp(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('[data-count]').forEach(function (el) {
    countObserver.observe(el);
  });
})();
