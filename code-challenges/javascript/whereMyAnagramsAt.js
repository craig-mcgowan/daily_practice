//www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

https: function anagrams(word, words) {
  //create lettersArr from the word
  const lettersArr = word.split("");

  //for each checkWord in words:
  resultsArr = words.filter((checkWord) => {
    checkArr = checkWord.split("");
    return (
      checkArr.length === lettersArr.length &&
      checkArr.every((letter) => {
        console.log(letter);
        return lettersArr.includes(letter);
      }) &&
      lettersArr.every((letter) => {
        return checkArr.includes(letter);
      })
    );
  });

  return resultsArr;

}
