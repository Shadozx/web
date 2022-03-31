const cheerio = require('cheerio')
const axios = require('axios').default
const parser = require('../helpers/parser')
// axios
//   .get('http://loveread.me/read_book.php?id=45085&p=153#gl_219')
//   .then((response) => {
//     const $ = cheerio.load(response.data)
//     $('p.MsoNormal').each(function () {
//       console.log($(this).text())
//     })
//   })

// ;(async () => {
//   const data = await parser.getInfo(
//     'http://loveread.me/read_book.php?id=45085&p=153'
//   )
//   console.log(data)
// })()
// console.log('&gt;')
var paramsString = new URL('http://loveread.me/read_book.php?id=45085&p=1')
// var searchParams = new URLSearchParams(paramsString)

// Итерируем параметры поиска.
// console.log(searchParams.keys())
let arr = [1, 2, 3, 4, 5, 6, 7]
let r = Math.random()
let l = arr.length
let rl = r * l
let m = Math.floor(rl)
console.log(m)
