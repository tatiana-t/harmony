class Tonality {
  constructor(key, harmon, type) {
    const halfToneAmount = 12;
    const harmony = {
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

    //    const seq = [
    //      //без дубль-диезов и дубль-бемолей
    //      ['c', 'his'],
    //      ['cis', 'des'],
    //      ['d'],
    //      ['dis', 'es'],
    //      ['e', 'fes'],
    //      ['f', 'eis'],
    //      ['fis', 'ges'],
    //      ['g'],
    //      ['gis', 'as'],
    //      ['a'],
    //      ['ais', 'b'],
    //      ['h']
    //    ];
    const names = ['c', 'd', 'e', 'f', 'g', 'a', 'h'];


    //с какого полутона начинать строить гамму
    //    const first = (key) => names.reduce((acc, item, i) => {
    //      if (item.indexOf(key) >= 0) {
    //        return i + 1;
    //      }
    //      return acc;
    //    });
    const first = names.indexOf(key) + 1;



    const scaleSeq = (first) => harmony[harmon].sequence.reduce((acc, item, i) => {
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
          //          console.log(i)
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
    //    console.log(scaleSeq(first));
    //    console.log(namedScale(scaleSeq(first)));


  }



};




const tonalHarmony = new Tonality('d', 'major');
console.log(tonalHarmony);
//const test = first('d', seq);
//const testScale = scale(test);
//const namedScale = setNamedScale(testScale);
//console.log(test, testScale, namedScale);
