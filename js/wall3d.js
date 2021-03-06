(function() {
  const houseElem = document.querySelector('.house');
  const barElem = document.querySelector('.progress-bar');
  let maxScrollValue;

  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener('scroll', function() {
    const scrollPer = pageYOffset / maxScrollValue;
    const zMove = scrollPer * 1200 - 490;
    houseElem.style.transform = `translateZ(${zMove}vw)`;

    //progress bar
    barElem.style.width = scrollPer * 100 + '%';
  });

  window.addEventListener('resize', resizeHandler);

  resizeHandler();

  new Character();
})();
