document.addEventListener('DOMContentLoaded', () => {
  let titles = document.querySelectorAll('.accordion__title');
  titles.forEach(title => {
    title.addEventListener('click', function () {
      this.parentElement.classList.toggle('active');
    });
  });
});