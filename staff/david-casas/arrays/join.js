function join (array, separator) {
    var element = ""

    if (array.length === 0 || separator.length === 0) {
        return result
    }

    for (var i = 0; i < array.length - 1; i++) {
        result += array[i] + separator
    }

    for (var i = array.length - 1; i < array.length - 2; i--) {
        result += array[i]
    }
    return result
}

// CASE 1
console.log("CASE 1")
var animals = ["Dog", "Cat", "Snake"]
// "Dog,Cat,Snake"

// CASE 2
console.log ("CASE 2")
var waves = ["Hola", "Hello", "Ciao"]
// "Hola-Hello-Ciao"

//CASE 3
console.log("CASE 3")
var sports = ["Basket", "Soccer", "Baseball"]
// "Basket/Soccer/Baseball"
