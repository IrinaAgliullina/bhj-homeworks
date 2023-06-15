const fontSizeControls = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

fontSizeControls.forEach(element => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    
    fontSizeControls.forEach(element => {
      element.classList.remove('font-size_active');
    })
    element.classList.add('font-size_active');
    
    if(element.getAttribute('data-size') === 'small') {
      book.classList.remove('book_fs-big');
      book.classList.add('book_fs-small');
    } else if (element.getAttribute('data-size') === 'big') {
      book.classList.remove('book_fs-small');
      book.classList.add('book_fs-big');
    } else {
      book.classList.remove('book_fs-small');
      book.classList.remove('book_fs-big');
    }
  });
})