// 7 kyu https://www.codewars.com/kata/digits-explosion

function explode(s) {
    let res = ''
    for (var i = 0; i < s.length; i++) {
        let t = Number(s[i])
        for (var j = 0; j < t; j++) {
            res += t
          }
      }
    return res
}

console.log(explode("312"))
console.log(explode("102269"))
