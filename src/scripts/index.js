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