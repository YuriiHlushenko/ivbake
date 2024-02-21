'use strict';

window.onload = function() {
  function slider(sliderName) {
    const images = document.querySelectorAll(
      `.${sliderName} .${sliderName}-line img`);
    const sliderLine = document.querySelector(
      `.${sliderName} .${sliderName}-line`);
    let count = 0;
    let width;

    function init() {
      width = document.querySelector(`.${sliderName}`).offsetWidth;
      sliderLine.style.width = width * images.length + 'px';

      images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
      });

      sliderLine.style.transform = 'none';
    }

    function next() {
      count++;

      if (count >= images.length) {
        count = 0;
      }
      rollSlider();
    };

    init();
    window.addEventListener('resize', init);

    document.querySelector(`.${sliderName}__button--next`).addEventListener(
      'click', function() {
        next();
      });

    document.querySelector(`.${sliderName}__button--prev`).addEventListener(
      'click', function() {
        count--;

        if (count < 0) {
          count = images.length - 1;
        }
        rollSlider();
      });

    function rollSlider() {
      sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }

    setTimeout(() => next(), 2000);
    setTimeout(() => next(), 9000);
    setTimeout(() => next(), 11000);
  }

  slider('slider');
  slider('sliderBento');
  slider('sliderFeedback');

  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener(
      'click', function() {
        if (card.classList.contains('card--hover')) {
          card.classList.remove('card--hover');
        } else {
          card.classList.add('card--hover');
        }
      });
  });

  cards.forEach(card => card.classList.add('card--hover'));

  setTimeout(
    () => cards.forEach(card => card.classList.remove('card--hover'))
    , 4000);

  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
      document.body.classList.add('page__body--with-menu');
    } else {
      document.body.classList.remove('page__body--with-menu');
    }
  });
};
