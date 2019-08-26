//exercises
const versions = [
    '1.0.0',
    '1.1.5',
    '1.1.7',
    '1.1.90',
    '1.2.0',
    '1.2.2',
    '1.2.5',
    '1.3.0',
    '1.1.50',
    '1.1.190',
    '1.3.7'
];

const getVersion = (version) => {
  const searchVersion = version.split('.');
  const versionLength = searchVersion.reduce((acc, item) => item.length > 0 ? acc + 1 : acc, 0);
  const compare = (arr, acc) => {
    if (acc >= versionLength) {
      return arr;
    }
    const filtred = arr.filter((item) => {
      const current = item.split('.');
      if (current[acc] === searchVersion[acc]) {
        return true;
      }
      return false;
    });
    return compare(filtred, acc + 1);
  };
  const sortFiltred = (arr, acc) => {
    if (acc > 2) {
      return arr;
    }
    const sorted = arr.sort((a, b) => {
      itemA = a.split('.');
      itemB = b.split('.');
      return +itemA[acc] > +itemB[acc];
    });
    return sortFiltred(sorted, acc + 1);
  };
  const resultList = compare(versions, 0);
  const resultFiltred = sortFiltred(resultList, 0);
  const result = resultFiltred[resultFiltred.length - 1];
  console.log(result);
  return result;
};

getVersion('1.1'); // → 1.1.190
getVersion('1.1.7'); // → 1.1.7
getVersion('1.2'); // → 1.2.5
getVersion('1.'); // → 1.3.7
