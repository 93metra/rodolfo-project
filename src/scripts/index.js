import '../pages/index.css';

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