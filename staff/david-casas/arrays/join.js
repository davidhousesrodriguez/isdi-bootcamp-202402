delete Array.prototype.join;

function join(array, separator) {
  //TODO implement me
  var result = "";
  if (separator === undefined) {
    separator = ",";
  }

  if (array.length === 0) {
    return result;
  }
  for (var i = 0; i < array.length - 1; i++) {
    result += array[i] + separator;
  }
  result += array[array.length - 1];
  return result;
}

console.log('CASE 1')
var elements = ["Fire", "Air", "Water"];
var result = join(elements);
console.assert(result === "Fire,Air,Water", "Fire,Air,Water");

console.log('CASE 2')
var result = join(elements, "");
console.assert(result === "FireAirWater", "FireAirWater" );

console.log('CASE 3')
var result = join(elements, " ");
console.assert(result === "Fire Air Water", "Fire Air Water");

console.log('CASE 4')
var result = join(elements, "-");
console.assert(result === "Fire-Air-Water", "Fire-Air-Water");

console.log('CASE 5')
var result = join(elements, "+");
console.assert(result === "Fire+Air+Water", "Fire+Air+Water");

