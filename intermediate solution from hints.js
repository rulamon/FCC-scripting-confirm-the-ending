function confirmEnding(str, target) {

  // "Never give up and good luck will find you."
  // -- Falcor
  return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("Bastian", "ian"));