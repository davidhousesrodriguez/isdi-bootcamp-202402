delete Array.prototype.repeat

function at(array, index) {
    // TODO implement me
}

// CASE 1

var nums = [100, 200, 300, 400, 500]

var num = at(nums, 3)

console.log(num)
// 400

// CASE 2

var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

var char = at(chars, 4)

console.log(char)
// ' '

// CASE 3

var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

var char = at(chars, -3)

console.log(char)
// 'n'

// CASE 4

var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

var char = at(chars, -30)

console.log(char)
// undefined

function repeat(string, count) {
  //1- crea una variable auxiliar "result" para almacenar el string que se va a repetir.
  //2- inicializar variable con un string vacio
  var newStr = ``;
  //3- inicializar bucle for con una variable auxiliar "i"
  //4- añadidr la condicion de contftinuaidad del bucle for limitada a count veces
  //5- incrementar variable "i" una vez cada iteracion
  for (var i = 0; i < count; i++) {
    result = result + string;
  }
  //6- asigna a la variable auxiliar "result" su valor anterior mas el valor del string(todo ello dentro del cuerpo del for)
  return result;
  //7- retornar "result"
  //8- si no hay resultado que nos devuelva una error.
}

// CASE 1

var s = "happy! ";

var result = repeat(s, 3);

console.log(result);
// 'happy! happy! happy!'
