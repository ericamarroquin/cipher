let sentence = prompt("Enter a sentence, please.");
console.log(sentence);

function firstLastLetter(sentence) {
  // returns str of first and last letters of sentence
  const first_letter = sentence.charAt(0);
  const last_letter = sentence.charAt(sentence.length - 1);
  return first_letter.toUpperCase() + last_letter.toUpperCase()
}

function reverseFirstLastLetter(sentence) {
  // returns str of last and first letters of sentence
  return sentence.charAt(sentence.length - 1).toUpperCase() + sentence.charAt(0).toUpperCase();
}

function sentenceSwitch() {
  return sentence + reverseFirstLastLetter(firstLastLetter(sentence));
}

function countLetters() {
  const rounded = Math.floor(sentence.length / 2);
  // 'rounded' returns sentence length divided by two, rounded down
  console.log("Sentence length is " + sentence.length);
  console.log("Sentence length halved and rounded down is " + rounded);
  console.log("Character at index " + rounded + " is " + sentence.charAt(rounded))
  return sentence.charAt(rounded) +sentenceSwitch();
}

console.log(countLetters());