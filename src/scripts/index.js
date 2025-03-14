import '../style/style.css';
import { langArr } from '../scripts/lang';

// constants
const logo = document.querySelector('.logo__img-wrapper');
const title = document.querySelector('.title');

const pieChartImage = document.querySelector('.chart__image');

// functions
function spinLogo() {
  if(!logo.classList.contains('animation-rotate')) {
    
    logo.classList.add('animation-rotate');

    setTimeout(() => {
      logo.classList.remove('animation-rotate');
    }, 2000);
  }
}

function spinPieChartImg() {
  pieChartImage.classList.toggle('animation-spin');
}

// listeners
title.addEventListener('click', () => {
  spinLogo()
})

logo.addEventListener('mouseover', () => {
  spinLogo()
})

logo.addEventListener('click', () => {
  spinLogo()
})

pieChartImage.addEventListener('click', () => {
  spinPieChartImg()
})

// up-button animation
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  const upButton = document.querySelector('.up-button');

  const observerOptions = {
      root: null, 
      rootMargin: '0px',
      threshold: 0 
  };

  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              upButton.classList.remove('is-visible');
          } else {
              upButton.classList.add('is-visible');
          }
      });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  observer.observe(header);
});

// ================== lang ========================
const esButton = document.querySelector('.language__button_es');
const enButton = document.querySelector('.language__button_en');

esButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  esButton.classList.toggle('language__button_active');
  enButton.classList.toggle('language__button_active');
  checkLanguage();
});

enButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  enButton.classList.toggle('language__button_active');
  esButton.classList.toggle('language__button_active');
  checkLanguage();
});

function checkLanguage() {
  let lang = 'en';
  if(esButton.classList.contains('language__button_active')) {
    lang = 'es';
  } else if(enButton.classList.contains('language__button_active')) {
    lang = 'en';
  };

  for(let key in langArr) {
    const elements = document.querySelectorAll(`.${key}`);
    elements.forEach(element => {
      if (langArr[key][lang]) {
        element.innerText = langArr[key][lang];
      }
    });
  };
}

checkLanguage();

// hornDogAnimation
const tinderButton = document.querySelector('.links__list_relative-item');
const hornDogText = document.querySelector('.horndog-text');

tinderButton.addEventListener('click', (evt) => {
  if(!hornDogText.classList.contains('is-visible')) {
    hornDogText.classList.add('is-visible')
  };
  setTimeout(() => {
    hornDogText.classList.remove('is-visible');
  }, 300);
  setTimeout(() => {
    hornDogText.classList.add('is-visible');
  }, 600);
  setTimeout(() => {
    hornDogText.classList.remove('is-visible');
  }, 900);
});