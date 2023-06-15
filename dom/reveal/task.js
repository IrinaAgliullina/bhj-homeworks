const reveal = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', () => {
  
  reveal.forEach(element => {
    const {top, bottom} = element.getBoundingClientRect();
    const elementHeight = bottom - top;

    if(top < window.innerHeight - elementHeight) {
      element.classList.add('reveal_active');
    }
  }); 
})