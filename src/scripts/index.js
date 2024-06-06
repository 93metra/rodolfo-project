import '../pages/index.css';

const logo = document.querySelector('.logo__img-wrapper');

logo.addEventListener('mouseover', () => {
  if(!logo.classList.contains('animation-rotate')) {
    
    logo.classList.add('animation-rotate');

    setTimeout(() => {
      logo.classList.remove('animation-rotate');
    }, 2000);
  }
})


