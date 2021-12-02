//Added a function that switched rows & colums and then checks so both horizontal and vertical are checked.

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  let switchLetters = letters[0].map((col, c) => letters.map((row, r) => letters[r][c]));
  const horizontalJoin2 = switchLetters.map(ls => ls.join(''));
  for (let l of horizontalJoin2) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;


//Original fixed code
// const wordSearch = (letters, word) => {
//     const horizontalJoin = letters.map(ls => ls.join(''))
//     for (l of horizontalJoin) {
//         if (l.includes(word)) return true
//     }
//     return false;
// }

// module.exports = wordSearch

