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

    const names = ['c', 'd', 'e', 'f', 'g', 'a', 'h'];

    //с какого полутона начинать строить гамму
    const first = names.indexOf(key) + 1;

    const scaleSeq = (first) => functionStructure[harmonyToSet].sequence.reduce((acc, item, i) => {
      if (acc[i] + item >= halfToneAmount) {
        const delta = acc[i] + item - halfToneAmount;
        acc.push(delta);
        return acc;
      }
      acc.push(acc[i] + item);
      return acc;
    }, [first]);

    const namedScale = (scale) => {
      return scale.reduce((acc, item, i) => {
        //        console.log(acc)
        //        console.log('item',  item, 'i', i)
        if (first + i >= 12) {
          console.log(names[(first + i) - 12])
          acc.push(item = {
            tone: item,
            name: names[(first + i) - 12],
            step: i + 1
          })
          return acc;
        }
        if ((first - 1) + i >= names.length) {
          acc.push(item = {
            tone: item,
            name: names[i - 3 - first - 1], //что это??? -3???,
            step: i + 1
          })
          return acc;
        }
        acc.push(item = {
          tone: item,
          name: names[(first - 1) + i],
          step: i + 1
        })
        return acc;
      }, [])
    }

    this.scale = namedScale(scaleSeq(first));
    this.setFunctions = () => {

    this.scale.forEach((item) => {
      if (item.step === 1) {
        this.functions.tonic.primary = item.tone;
      } else  if (item.step === 4) {
        this.functions.subdominant.primary = item.tone;
      } else if (item.step === 5) {
        this.functions.dominant.primary = item.tone;
      }
    });

    const setCords = (func) => {
        const chordStructure = functionStructure.functions.filter((item) => item.function === func);
         // this.functions.tonic.
      }
    }
  };
};

const tonalHarmony = new Tonality('d', 'major');
tonalHarmony.setFunctions();
console.log(tonalHarmony);
