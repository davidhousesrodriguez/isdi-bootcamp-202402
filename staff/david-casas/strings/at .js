//delete String.prototype.at;

function at(string, index) {
  // crear uan variable auxiliar "character" para el caracter uqe vamos a extraer
  //mirar el indice si es positivo o negativo so... plantear dos flujos (+ o -)
  // si el indice es positivo extraer el caracter del strig a partir del indice (pasandoselo por []) y asignarlo a la variable "character"
  // si el indice es negativo calcular la posicion del caracter a extraer restando a la longitud del string el valor del indice, pasando el resultado de esta resta entre corchetes y asignarlo a la variable "character"
  //retornar el valor de "character"

  var character;

  if (index >= 0) {
    character = string[index];
  } else {
    var newIndex = string.length + index;
    character = string[newIndex];
  }
  return character;
}

// CASE 1

var s = "hola mundo";

var char = at(s, 6);
console.log(char);
// 'u'

// CASE 2

var s = "hola mundo";

var char = at(s, 20);
console.log(char);
// undefined

// CASE 3

var s = "hola mundo";

var char = at(s, -4);
console.log(char);
// 'u'
