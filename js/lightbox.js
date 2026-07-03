/* Screenshot lightbox — click a dashboard thumbnail to enlarge it.
   Without JavaScript the thumbnails still work: they open the image directly. */
(function () {
  var box = document.getElementById('lightbox');
  var img = document.getElementById('lightbox-img');
  if (!box || !img) return;

  document.querySelectorAll('.shot-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      img.src = link.getAttribute('href');
      img.onload = function () {
        // ultra-wide dashboard strips get a readable, scrollable view
        var wide = img.naturalWidth / img.naturalHeight > 4;
        box.classList.toggle('wide', wide);
      };
      box.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function close() {
    box.classList.remove('open');
    img.src = '';
    document.body.style.overflow = '';
  }

  box.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
