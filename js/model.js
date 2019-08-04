class Tonality {
  constructor(key, harmonyToSet, type) {

      this.key = key,
      this.harmony = harmonyToSet,
      this.type = type ? type : 'natural',
      this.scale;
      this.functions = {
        tonic: {
          primary: undefined,
          chords: {
            '53': {tones: undefined, notes: undefined},
            '6': {tones: undefined, notes: undefined},
            '64': {tones: undefined, notes: undefined}
          }
        },
        subdominant: {
          primary: undefined,
          chords: {
            '53': {tones: undefined, notes: undefined},
            '6': {tones: undefined, notes: undefined},
            '64': {tones: undefined, notes: undefined}
          }
        },
        dominant: {
          primary: undefined,
          chords: {
            '53': {tones: undefined, notes: undefined},
            '6': {tones: undefined, notes: undefined},
            '64': {tones: undefined, notes: undefined}
          }
        }
      }

    const halfToneAmount = 12;
    const chordsStructure = {
      '53': [2, 2],
      '6': [2, 4],
      '64': [4, 2]
    };
    const functionStructure = {
      functions: [{
          step: 1,
          steps: [1, 3, 5],
          function: 'tonic'
        },{
          step: 4,
          steps: [4, 6, 1],
          function: 'subdominant'
        },{
          step: 5,
          steps: [5, 7, 2],
          function: 'subdominant'
        }],
      major: {
        sequence: [2, 2, 1, 2, 2, 2, 1],
        steps: [
          {
            step: 1,
            ht: 1
  }, {
            step: 2,
            ht: 3
  }, {
            step: 3,
            ht: 5
  }, {
            step: 4,
            ht: 6
  }, {
            step: 5,
            ht: 8
  }, {
            step: 6,
            ht: 10
  }, {
            step: 7,
            ht: 12
  }
]
      },
      minor: {
        sequence: [2, 1, 2, 2, 1, 2, 2],
        steps: [
          {
            step: 1,
            ht: 1
  }, {
            step: 2,
            ht: 3
  }, {
            step: 3,
            ht: 4
  }, {
            step: 4,
            ht: 6
  }, {
            step: 5,
            ht: 8
  }, {
            step: 6,
            ht: 9
  }, {
            step: 7,
            ht: 11
  }
]
      }
    };

const setCycle = (firstItem, template, func, resultLength = 8, cycleLength = halfToneAmount) => {
  const firstIndex = template.indexOf(firstItem.substr(0, 1));
  const iter = (acc, i) => {
    if (acc.length >= 8) {
      return acc;
    }
    const newItem = template[i];
    if (i === template.length) {
      return iter(acc, 0);
    }
    const newAcc = [...acc, newItem];
    return iter(newAcc, i + 1)
  }
  return iter([], firstIndex);
};

    const names = ['c', 'd', 'e', 'f', 'g', 'a', 'h'];

const setN = setCycle(key, names);
    //с какого полутона начинать строить гамму
    const firstTone = (key) => {
      const index = names.indexOf(key.substr(0, 1));

      const firstTone = functionStructure[harmonyToSet].steps.reduce((acc, item) => {
        if ( item.step === index) {
            return item.ht;
        }
        return acc;
      }, {});

      if (key.length === 1) {
        return firstTone;
      } else {
        //если тональность со снаком в названии
        const alterSign = key.substr(1);
        if (alterSign === 'is') {
          return firstTone + 1;
        } else if (alterSign === 'es' || alterSign === 's') {
          return firstTone - 1;
        }
      }
    };
    const first = firstTone(key);
console.log('first', first);

//последовательность полутонов
    const scaleSeq = (first) => functionStructure[harmonyToSet].sequence.reduce((acc, item, i) => {
      if (acc[i] + item > halfToneAmount) {
        const delta = acc[i] + item - halfToneAmount;
        acc.push(delta);
        return acc;
      }
      acc.push(acc[i] + item);
      return acc;
    }, [first]);

    const htonesSeq = scaleSeq(first);

    const setScale = (names, htones) => {
      this.scale = names.map((item, i) => {
        return {
          step: i + 1 > 7 ? 1 : i + 1,
          htone: htones[i],
          //учесть в названиях знаки?
          name: item
        }
      })
    };
    setScale(setN, htonesSeq);
    // this.scale = namedScale(scaleSeq(first));
    // this.scale = setNames(scaleSeq(first));
    // this.setFunctions = () => {
    //
    // this.scale.forEach((item) => {
    //   if (item.step === 1) {
    //     this.functions.tonic.primary = item.tone;
    //   } else  if (item.step === 4) {
    //     this.functions.subdominant.primary = item.tone;
    //   } else if (item.step === 5) {
    //     this.functions.dominant.primary = item.tone;
    //   }
    // });
    //
    // const setCords = (func) => {
    //     const chordStructure = functionStructure.functions.filter((item) => item.function === func);
    //      // this.functions.tonic.
    //   }
    // }
  };
};

const tonalHarmony = new Tonality('fis', 'major');
// tonalHarmony.setFunctions();
console.log(tonalHarmony);
