const buttons = Array.from(document.querySelectorAll('.dropdown__value'));

buttons.forEach((element) => element.addEventListener('click', () => {
  let list = element.closest('.dropdown').querySelector('.dropdown__list');
  let items = Array.from(element.closest('.dropdown').querySelectorAll('.dropdown__item'));

  list.classList.add('dropdown__list_active');

  items.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      list.classList.remove('dropdown__list_active');
      element.closest('.dropdown').querySelector('.dropdown__value').textContent = element.textContent;
    })
  });
}));