//interface
// Сетка ширина ячейки 10, высота - 7
// Клик -> координаты клика -> путем сравнения вычисляем к какому интервалу принадлежит точка -> определяем название ноты -> рисуем ноту
let view = {
  clickCoordinates: {
    top: '',
    left: ''
  },
  lastSymbol: {
    top: '',
    left: ''
  }
};
let coords = {
  top: '',
  left: ''
};
let block = document.querySelector('.write-block');
block.addEventListener('click', (e) => {
  //console.log(e);
  // coords.top = e.offsetY;
  // coords.left = e.offsetX;
  console.log(e.offsetY);
  getNote(e.offsetX, e.offsetY)
  //return {top: , left: e.offsetLeft}
});

const getNote = (x, y)=> {
  let xPosition = '';
  let yPosition = '';
  if (block.querySelectorAll('.note').length === 0) {
    xPosition = 0;
  } else {
    //xPosition = //должен знать о расположении последнего знака
  }

  if (y % 6 === 0) {
    yPosition = y;
  } else if ( y%6 >3) {
    yPosition = y + (y % 6)
  } else if ( y % 6 <= 3) {
    yPosition = y - (y % 6)
  }
  console.log(y, yPosition);
  return yPosition
}
