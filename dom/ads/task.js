const rotatorArray = Array.from(document.querySelectorAll('.rotator'));

rotatorArray.forEach(element => {
  let rotatorCases = Array.from(element.querySelectorAll('.rotator__case'));
  let counter = 0;

  setInterval(() => {
    rotatorCases[counter].classList.remove('rotator__case_active');
    if(counter === rotatorCases.length - 1) {
      counter = -1;
    }
    counter ++;
    rotatorCases[counter].classList.add('rotator__case_active');
  }, 1000 );

} );