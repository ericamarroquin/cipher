// let sentence = prompt("Enter a sentence, please.");
// console.log(sentence);

function firstLastLetter() {
  const sentence = prompt('Enter a sentence, please');
  const first_letter = sentence.charAt(0);
  const last_letter = sentence.charAt(sentence.length - 1);
  return first_letter.toUpperCase() + last_letter.toUpperCase()
}

console.log(firstLastLetter());