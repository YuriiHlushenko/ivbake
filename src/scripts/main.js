'use strict';

window.onload = function() {
  function slider(sliderName) {
    const images = document.querySelectorAll(`.${sliderName} .${sliderName}-line img`);
    const sliderLine = document.querySelector(`.${sliderName} .${sliderName}-line`);
    let count = 0;
    let width;

    function init() {
      width = document.querySelector(`.${sliderName}`).offsetWidth;
      sliderLine.style.width = width * images.length + 'px';

      images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
      });
      rollSlider();
    }

    init();
    window.addEventListener('resize', init);

    document.querySelector(`.${sliderName}__button--next`).addEventListener('click',
      function() {
        count++;

        if (count >= images.length) {
          count = 0;
        }
        rollSlider();
      });

    document.querySelector(`.${sliderName}__button--prev`).addEventListener('click',
      function() {
        count--;

        if (count < 0) {
          count = images.length - 1;
        }
        rollSlider();
      });

    function rollSlider() {
      sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }
  }

  slider('slider');
  slider('sliderBento');
};

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
