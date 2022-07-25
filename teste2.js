

function check (letter) {
    return function (word) {
        return word.includes(letter)
    }
}

const checkOut = check('azul')

console.log(checkOut('um dia azul'))