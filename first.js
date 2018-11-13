function confirmEnding(str, target) {

  // "Never give up and good luck will find you."
  // -- Falcor
  return str.split('').splice((str.length - target.length), target.length).join('') === target;
}

console.log(confirmEnding("Bastian", "ian"));