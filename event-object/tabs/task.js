const tabs = Array.from(document.querySelectorAll('.tabs'));

tabs.forEach((element) => {
  let tab = Array.from(element.querySelectorAll('.tab'));
  let content = Array.from(element.querySelectorAll('.tab__content'));
  
  tab.forEach((element) => element.addEventListener('click', () => {
    let index = tab.indexOf(element);
    tab.forEach((element) => {
      element.classList.remove('tab_active');
    });
    element.classList.add('tab_active');

    content.forEach((element) => {
    if (content.indexOf(element) !== index) {
      element.classList.remove('tab__content_active');
    }
    content[index].classList.add('tab__content_active');
    });
  }));
});