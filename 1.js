const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

  switch (choice) {
    case 'black':
      update('black', 'white');
      break;
    case 'purple':
      update('purple', 'white');
      break;
    case 'yellow':
      update('yellow', 'white');
      break;
    case 'psychedelic':
      update('orange', 'white');
      break;
    default:
      update('white', 'black');
  }
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
