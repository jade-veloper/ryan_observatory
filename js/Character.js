function Character() {
  this.mainElem = document.createElement('div');
  this.mainElem.classList.add('character');
  this.mainElem.innerHTML = `
    <div class="character-container character-body">
      <div class="character-face character-body-face face-front"></div>
      <div class="character-face character-body-face face-back"></div>
    </div>
    <div class="character-container character-leg-right">
      <div class="character-face character-leg-face face-front"></div>
      <div class="character-face character-leg-face face-back"></div>
    </div>
    <div class="character-container character-leg-left">
     <div class="character-face character-leg-face face-front"></div>
     <div class="character-face character-leg-face face-back"></div>
    </div>
  `;

  document.querySelector('.world').appendChild(this.mainElem);

  // 스크롤 중인지 아닌지 체크
  this.scrollState = false;

  // 마지막 스크롤 위치
  this.lastScrollTop = 0;
  this.init();
}

Character.prototype = {
  constructor: Character,
  init: function() {
    const self = this;
    window.addEventListener('scroll', function() {
      clearTimeout(self.scrollState);

      if (!self.scrollState) {
        self.mainElem.classList.add('walking');
      }

      self.scrollState = setTimeout(function() {
        self.scrollState = false;
        self.mainElem.classList.remove('walking');
      }, 300);

      // 이전 스크롤 위치와 현재 스크롤 위치를 비교
      if (self.lastScrollTop > pageYOffset) {
        // 이전 스크롤 위치가 크다면 : 스크롤 올림
        self.mainElem.setAttribute('data-direction', 'backward');
      } else {
        // 현재 스크롤 위치가 크다면: 스크롤 내림
        self.mainElem.setAttribute('data-direction', 'forward');
      }
      self.lastScrollTop = pageYOffset;
    });
  }
};
