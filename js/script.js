//function Tonalty(main) {
//     if (item in this.abc === main) {
//        this.main = item
//    };
//    this.tonic = main in this.abc;
//    this.scale = {
//        1: main,
//        2: main + 2, //по полутонам прибавлять
//        3: main + 4,
//        4: main + 5,
//        5: main + 7,
//        6: main + 9,
//        7: main + 11
//    }
//    this.alteration = {
//        '#': 1,
//        'b': -1,
//        'bekar': 0
//    }
//    this.abc = {
//        C: 1,
//        D: 2,
//        E: 3,
//        F: 4,
//        G: 5,
//        A: 6,
//        B: 7 - 0.5,
//        H: 7
//    }
//}
//
//Tonalty.prototype.subdominant = 4;
//Tonalty.prototype.dominant = 5;
//Tonalty.prototype.tonic = 1;
//
//Gmaj = new Tonalty();
//
//console.log(Gmaj);


// var base = [
//   {
//     ton: 'D',
//     lad: 'dur',
//     chord: 'S',
//     obr: '64',
//     answer: 'ре-соль-си'
//   },
//   {
//     ton: 'G',
//     lad: 'moll',
//     chord: 'S',
//     obr: '6',
//     answer: 'до-ми-соль'
//   }
// ]
// var index = 0;
var tonBlock = document.querySelector('.block__tonality');
// var chord = document.querySelector('.block__chord');
// var answer = document.querySelector('.block__answer');
// var showBtn = document.querySelector('.block__btn');
// var nextBtn = document.querySelector('.arrow_next');
//
//
// function showQuestion(index) {
//   ton.innerHTML = base[index].ton + ' ' + base[index].lad;
//   chord.innerHTML = base[index].chord+ ' ' + base[index].obr;
//   answer.classList.add('block__answer_hide');
//   answer.innerHTML = base[index].answer;
// };
//
// showQuestion(index);
// showBtn.addEventListener('click', function () {
//   answer.classList.remove('block__answer_hide');
// })
//
// nextBtn.addEventListener('click', function () {
//   index++;
//   showQuestion(index);
// })

function getCurrent(current) {
  //получаем индекс заданной тональности из гаммы
  let compare;
  // if (typeof current === 'string') {
  //
  //  // compare = item === current;
  // } else if (typeof current === 'number') {
  //
  // }
  current = current.toUpperCase();
  scale.forEach(function (item, i) {
    if (item === current) {
      //console.log(i);
      current = i;
    }
  });
  return current
}

function getNextItem(current) {
  //возвращает следующую по квинтовому кругу ноту
  current = current || 0;
  let count = 0;
  for (let i = current; i < scale.length; i++) {
    //console.log(arr[i], i, count);
    if (count === STEPUP) {
      // console.log(scale[i], count);
      return scale[i]
    }
    if (i === scale.length - 1) {
      i = -1;
    }
    count++;
  }
}

function getKeyCount(key) {
  //получаем количество ключевых знаков
  key = key.toUpperCase();
  let count = 0;
  let current = 0;
  let nextItem = 'C';

  while (key !== nextItem) {
    nextItem = getNextItem(current);
    current = getCurrent(nextItem);
    count++;
  }
  return count;
}

function getKeys(count) {
  //получаем ключевые диезы
  if (count === 0) {
    return 'no key signs'
  }
  let signs = [];
  let nextItem;
  let current = 6; //первый ключевой знак - фа (scale[3])
  for (let i = 0; i < count; i++) {
    nextItem = getNextItem(current);
    signs.push(nextItem);
    current = getCurrent(nextItem);
  }
  return signs
}

let scale = ['C', 'D', 'E', 'F', 'G', 'A', 'H'];
const STEPUP = 4; //квинта квинтового круга для диезов
const STEPDOWN = 3; //кварта вниз для бемолей

function getRandomTon() {
  const ton = Math.floor(Math.random() * scale.length);
  return scale[ton];
};

// let current = getCurrent('d');
// let getNextSign = getNextItem(current);

//console.log('текущая тональность: ', +current, 'следующая тональность: ' + getNextSign);

// let signs = getKeyCount('d');
// console.log(signs);
//
// let showSigns = getKeys(signs);
// console.log(showSigns);

let scaleModel = {
  steps: {
    'I': 'C',
    'II': 'D',
    'III': 'E',
    'IV': 'F',
    'V': 'G',
    'VI': 'A',
    'VII': 'H'
  },
  //key: this.scale[0],
  //dominant: this.scale[4],
  //subDominant: this.scale[3],
  setScale: function (main) {
    // main = main.toUpperCase();
    //
    // scale.forEach(function (item, i) {
    //   if (item === main) {
    //     this.steps['I'] = main;
    //   }
    // })

  }
};

let currentTon = {
  main: '',
  steps: [
    {name: 'C', step: ''},
    {name: 'D', step: ''},
    {name: 'E', step: ''},
    {name: 'F', step: ''},
    {name: 'G', step: ''},
    {name: 'A', step: ''},
    {name: 'H', step: ''}
  ]
};
let random = getRandomTon();
currentTon.main = random;
let index;

setSteps();
console.log(currentTon);

function setSteps() {
  currentTon.steps.forEach((item, i) => {
    if (item.name === currentTon.main) {
      item.step = 1;
      let index = 2;
      for (i; i<currentTon.steps.length; i++) {
        if (i === currentTon.steps.length - 1) {
          i = 0
        }
        currentTon.steps[i].step = index;
        index++
      }
    }
  });
  // let counter = 0;
  // index =  1;
  // for (let i = 0; i < scale.length; i++) {
  //  if (counter === scale.length) {
  //    return
  //  }
  //   //console.log()
  //   if (currentTon.steps[i].step === 1) {
  //     currentTon.steps[i + 1].step = index + 1;
  //     index += 1
  //   }
  //
  //   if (i === scale.length - 1) {
  //     i = -1
  //   }
  //   counter++
  // }
}
function setFunction() {
  currentTon.steps.forEach(function(item, i) {
    if (currentTon.steps[i].step === '4') {
      currentTon.steps[i].function = 'S';
      currentTon.steps[i + 1].function = 'D';
    }
  })

}
setFunction();
console.log(currentTon);
function showQuestion(ton) {

  tonBlock.innerHTML = ton + ' ' + 'dur'; //временно всегда мажор

  //chord.innerHTML = base[index].chord+ ' ' + base[index].obr;
  //answer.classList.add('block__answer_hide');
  //answer.innerHTML = base[index].answer;
};
showQuestion(random);