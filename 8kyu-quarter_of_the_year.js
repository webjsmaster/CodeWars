// 8 kyu https://www.codewars.com/kata/quarter-of-the-year

const quarterOf = (month) => {
    if(month <= 3 ) {
        return 1
    } else if (month > 3 && month <= 6) {
        return 2
    } else if (month > 6 && month <= 9) {
        return 3
    } else return 4
    
}


console.log(quarterOf(3))
console.log(quarterOf(8))
console.log(quarterOf(11))

