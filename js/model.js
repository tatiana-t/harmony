const majorSeq = [2, 2, 1, 2, 2, 2, 1];
const minorSeq = [2, 1, 2, 2, 1, 2, 2];

class Tonality {
  constructor(key, harmony, type) {
    const halfToneAmount = 12;
    //    const seq = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const seq = [
      //без дубль-диезов и дубль-бемолей
      ['c', 'his'],
      ['cis', 'des'],
      ['d'],
      ['dis', 'es'],
      ['e', 'fes'],
      ['f', 'eis'],
      ['fis', 'ges'],
      ['g'],
      ['gis', 'as'],
      ['a'],
      ['ais', 'b'],
      ['h']
    ];
    const names = ['c', 'd', 'e', 'f', 'g', 'a', 'h'];
    this.major = [2, 2, 1, 2, 2, 2, 1];
    this.minor = [2, 1, 2, 2, 1, 2, 2];

    //с какого полутона начинать строить гамму
    const first = (key) => seq.reduce((acc, item, i) => {
      if (item.indexOf(key) >= 0) {
        return i;
      }
      return acc;
    });

    this.scaleSeq = (first) => this[harmony].reduce((acc, item, i) => {
      if (acc[i] + item >= halfToneAmount) {
        const delta = acc[i] + item - halfToneAmount;
        acc.push(delta);
        return acc;
      }
      acc.push(acc[i] + item);
      return acc;
    }, [first]);

    this.scale = () => {
      return this.scaleSeq.map((item) => {
        item = {
          tone: item,
          name: names[i]
        }
      })
    }

  }



};
const seq = [
      //без дубль-диезов и дубль-бемолей
      ['c', 'his'],
      ['cis', 'des'],
      ['d'],
      ['dis', 'es'],
      ['e', 'fes'],
      ['f', 'eis'],
      ['fis', 'ges'],
      ['g'],
      ['gis', 'as'],
      ['a'],
      ['ais', 'b'],
      ['h']
    ];
const names = ['c', 'd', 'e', 'f', 'g', 'a', 'h'];
const major = [2, 2, 1, 2, 2, 2, 1];
const minor = [2, 1, 2, 2, 1, 2, 2];
const first = (key, arr) => arr.reduce((acc, item, i) => {
  //  console.log(item, key);
  //  console.log('indexOf ', item.indexOf(key), i);
  if (item.indexOf(key) >= 0) {
    return i;
  }
  return acc;
});
const scale = (first) => major.reduce((acc, item, i) => {
  if (acc[i] + item >= 12) {
    const delta = acc[i] + item - 12;
    acc.push(delta);
    return acc;
  }
  acc.push(acc[i] + item);
  return acc;
}, [first]);

const setNamedScale = (scale) => {
  return scale.map((item, i) => {
    if (first + i >= 12) {
      console.log(names[(first + i) - 12])
      return item = {
        tone: item,
        name: names[(first + i) - 12]
      }
    }
    return item = {
      tone: item,
      name: names[first + i]
    }
  })
}

const test = first('d', seq);
const testScale = scale(test);
const namedScale = setNamedScale(testScale);
console.log(test, testScale, namedScale);
