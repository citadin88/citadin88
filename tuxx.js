document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('body > div > main > div.reload') || document.querySelector('.reload');
  if (element) {
    element.click();
  }
});
