import '../pages/index.css';

const logo = document.querySelector('.logo__img-wrapper');

logo.addEventListener('mouseover', () => {
  if(!logo.classList.contains('animated-rotate')) {
    
    logo.classList.add('animated-rotate');

    setTimeout(() => {
      logo.classList.remove('animated-rotate');
    }, 2000);
  }
})




