



function getMulplier(multiplier) {
    return function (aNumber) {
        return aNumber * multiplier
    }
}

const double = getMulplier(2)
const tri = getMulplier(3)
const qua = getMulplier(4)

console.log(double(2))
