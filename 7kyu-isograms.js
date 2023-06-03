// 7 kyu https://www.codewars.com/kata/isograms

function isIsogram(str){
    return !str.toLowerCase().split('').some(function (item, index, arr) {
        return arr.indexOf(item) !== index
    })
}


console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("isogram"))
console.log(isIsogram("aba"))
console.log(isIsogram("moOse"))
console.log(isIsogram("isIsogram"))
console.log(isIsogram(""))
