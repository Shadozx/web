// const cheerio = require('cheerio')
// const request = require('request')
// const fs = require('fs')

// /**
//  *
//  * @param {String} data
//  * @param {Array} rozdili
//  * @returns {Map}
//  */
// function correcting(data, rozdili) {
//   // console.log(data)

//   // Появлення назви розділу
//   let i = data.replace(/([\.\?\)\]\-\d])([А-ЯЁ](?:[а-яё?])+)/g, '$1\n$2')
//   // console.log(
//   //   '===================================================================================================================================\n' +
//   //     i
//   // )
//   i = i.replace(/([а-яё])([А-ЯЁ])/g, '$1\n$2')
//   // console.log(
//   //   '===================================================================================================================================\n' +
//   //     i
//   // )

//   // rozdili.forEach((val) => {
//   //   if (i.indexOf(val) != -1) {
//   //     // i = i.replace(new RegExp(`(${val})`, 'g'), '//$1//')
//   //     result.push(i.split(`${}`))
//   //   }
//   // })
//   let result = new Map()
//   const answer = new Map()
//   if (rozdili.length) {
//     // let m = rozdili.join('|')
//     let arr = i.split('\n')
//     let b
//     // rozdili.forEach((val, index) => {
//     //   const reg = new RegExp(`${val}\n`, 'g')

//     //   if (reg.test(i)) {
//     //     b = i.split(reg)

//     //     result.push(b[index])
//     //   }
//     // })

//     rozdili.forEach((val, i) => {
//       const reg = new RegExp(`${val}[\nА-ЯЁ]`)
//       let index = arr.indexOf(val)
//       if (index != 0) {
//         let temp = arr.splice(0, index)

//         if (rozdili.includes(temp[0])) {
//           temp.splice(0, 1)
//           answer.set(rozdili[i - 1], temp)
//         } else {
//           answer.set('0', temp)
//         }
//       }
//       // console.log(reg.exec(i))
//     })
//     if (arr.length) {
//       let name = arr[0]
//       arr.splice(0, 1)
//       answer.set(name, arr)
//     }
//     // if (result.length == 1) {
//     //   result.push(b[1])
//     // }
//     // result = i.split(new RegExp(`${rozdili.join(m)}`))
//   } else {
//     answer.set('0', i)
//   }
//   // console.log(result)
//   // console.log(rozdili.length)

//   // console.log(answer)

//   // const answer = new Map()

//   // // let result = i.split(new RegExp(`${m}`))

//   // i = i.replace(/\n([\.\?\,\-\!])/g, '$1')

//   // if (result.length - rozdili.length == 1) {
//   //   let counter = 0
//   //   answer.set('0', [result[counter++]])

//   //   rozdili.forEach((val) => {
//   //     let l = answer.set(val, [result[counter++]])
//   //   })
//   // } else if (!rozdili.length) {
//   //   answer.set('0', [result])
//   // } else {
//   //   let counter = 0
//   //   rozdili.forEach((val) => {
//   //     answer.set(val, [result[counter++]])
//   //   })
//   // }

//   // result = i.split(//)
//   // i = i.replace(/([а-яё\?])([А-ЯЁ])/g, '$1\n$2')
//   // console.log(
//   //   '===================================================================================================================================\n' +
//   //     i
//   // )
//   // console.log(
//   //   '===================================================================================================================================\n' +
//   //     i
//   // )
//   // i = i.replace(/(?:^|\n)(.*)\/\//g, '\n//$1//')
//   // console.log(
//   //   '===================================================================================================================================\n' +
//   //     i
//   // )

//   // console.log(answer)
//   // console.log(answer.size)
//   // // console.log()

//   // answer.forEach(function (val, key) {
//   //   result.set(key, val.join('\n'))
//   // })
//   // .replace(/([А-ЯЁа-яё]+\s*)+\/\//g, '//$1//')
//   //.replace(/\w+\n/g)
//   return answer
// }

// // function getData(result) {
// //   function removeFromString(str, index, number) {
// //     var outputStringArray = str.split('')
// //     outputStringArray.splice(index, number)
// //     return outputStringArray.join('')
// //   }
// //   // return result
// //   result = result
// //     .replace(
// //       'Онлайн книга «Теория игр. Искусство стратегического мышления в бизнесе и жизни»',
// //       ''
// //     )
// //     .replace(/(\[\d+\]|(\{\d+\}))\s*/g, '')
// //     .replace(/(Cтраница|Страница)\s*\d*/g, '')
// //     .trim()
// //   return removeFromString(result, result.indexOf('\n\t'), result.length)
// //   // .replace(/([а-яё?])([А-ЯЁ])/g, '$1\n$2')
// //   // .replace(/\n\./g, '.')
// // }

// // getInfo('http://loveread.me/read_book.php?id=45085&p=23')

// // for (let i = 1; i < 5; i++) {
// //   console.log(
// //     i,
// //     '\n========================================\n',
// //     getInfo(`http://loveread.me/read_book.php?id=45085&p=${i}`)
// //   )
// // }

// // console.log(getInfo('http://loveread.me/read_book.php?id=45085&p=1'))
// // console.log(getInfo('http://loveread.me/read_book.php?id=45085&p=2'))
// // console.log(getInfo('http://loveread.me/read_book.php?id=45085&p=3'))
// // console.log(getInfo('http://loveread.me/read_book.php?id=45085&p=4'))

// function deleteProb(str) {
//   function removeFromString(str, index, number) {
//     var outputStringArray = str.split('')
//     outputStringArray.splice(index, number)
//     return outputStringArray.join('')
//   }

//   let result = removeFromString(str, 0, str.indexOf('Страница'))
//   // console.log(result)
//   result = result.replace(/Страница\s*/g, '')
//   // console.log(result)
//   result = result.replace(/(\[\d+\]|(\{\d+\}))\s*/g, '')
//   // console.log(result)
//   result = removeFromString(result, result.indexOf('\n\t'), result.length)
//   // console.log(result)
//   return result
// }
// // let str = `
// // В БОЛЬШИХ КНИЖНЫХ МАГАЗИНАХ мне всегда хочется приобрести много книг сразу, особенно тех, которые посвящены моим любимым темам: менеджменту, маркетингу и образованию. Эту книгу я бы, безусловно, купил, потому что ее мне порекомендовало издательство «Манн, Иванов и Фербер», за что я очень благодарен. Теперь, после ее прочтения, я могу с уверенностью сказать, что обязательно перечитаю ее снова.Теория игр – это раздел математики, изучающий выбор оптимальных стратегий в конфликтных ситуациях, в которых идет борьба между участниками. Каждая из сторон преследует свои интересы и ищет наиболее выгодное решение, возможно, в ущерб соперникам. Самые простые примеры подобных игр – шахматы, карточные игры, спортивные состязания. Все они ведутся по заданным правилам, которые нельзя нарушать. Но в реальной жизни соперники могут идти на все ради победы: угрожают, манипулируют, обманывают, – взять хотя бы взаимоотношения между родителями и непослушным ребенком.На первый взгляд можно сделать вывод, что из-за человеческого фактора и простой случайности исход конфликта предсказать практически невозможно. Но это не так. Каждый наш выбор – это выбор доминирующей стратегии (наиболее выгодной с учетом неизменности стратегий других игроков), которая делает наше поведение предсказуемым в глазах тех, кто в совершенстве владеет теорией игр.Для меня знакомство с теорией игр стало интуитивным. Это произошло, когда я стал работать с крупными клиентами: переговоры с ними требовали более тщательной подготовки. В небольших и быстрых сделках важно в совершенстве знать продукт и понимать потребности клиента. Когда же речь идет о больших суммах, особое значение имеет стратегия поведения клиента, его интересы, альтернативы и цели. Долгие переговоры и встречи действительно напоминали игру, в которой я всегда стремился к тому, чтобы обе стороны вышли победителями. Те же самые игры происходят и между руководителем и подчиненным – например, когда речь заходит об изменении заработной платы или постановке сложной задачи. Поэтому я с волнением читал эту книгу, ведь в ней все, что было для меня непостижимым, оказалось давно продуманной моделью поведения.По моему мнению, особая заслуга авторов в том, что в книге они свели математику к минимуму. Авинаш Диксит и Барри Нейлбафф подобрали обычные и доступные для понимания примеры, чтобы показать, как работают игры в жизни. Они показали, что теория игр – это интересно. Практически с первых страниц авторы вступают в игру с читателем, буквально угадывая ход его мыслей, и через диалог показывают, как можно прийти к верному решению.Материал в книге существенно упрощен по сравнению с языком математики. Несмотря на это, книгу нельзя отнести к числу тех, которые можно прочитать за один вечер. Думаю, заинтересованный читатель, взявший ее в руки, не пожалеет о потраченном времени.Иван Самолов,директор по маркетингуSamolov Groupivan@samolov.ruВсем нашим студентам, у которых мы многому научились (особенно Сету. – Б. Н.)ПредисловиеМЫ НЕ ПЛАНИРОВАЛИ писать новую книгу. Мы собирались лишь внести необходимые изменения и дополнения в свою предыдущую книгу – «Стратегическое мышление». Но все сложилось иначе.Одну из причин, по которой мы решили пересмотреть и исправить предыдущее издание книги, можно объяснить на примере героя Хорхе Луиса Борхеса – Пьера Менара\n, который решил переписать роман Сервантеса «Дон Кихот». Приложив немало усилий, Менар создал новую версию романа, слово в слово повторяющую оригинал. Однако с тех пор, как «Дон Кихот» вышел в свет, прошло 300 лет. Менар использовал в своем романе те же слова, но наделил их совершенно другим смыслом.Увы, наш оригинальный текст не равноценен «Дон Кихоту», поэтому в пересмотренном и исправленном издании все-таки пришлось кое-что изменить. В действительности большая часть книги содержит совершенно новый материал. Возникли новые области применения, новые концепции и новые точки зрения. Со времени публикации первой книги появилось так много нового, что мы сочли нужным дать этому изданию новое название. С другой стороны, хотя мы используем новые слова, замысел остался прежним. Мы хотим изменить ваше восприятие окружающего мира и помочь вам мыслить стратегически, познакомив с концепциями и логикой теории игр.Как и у Пьера Менара, у нас тоже есть новая точка зрения на происходящее. Когда мы писали книгу «Стратегическое мышление», мы были моложе; кроме того, в те времена доминировала идея эгоцентричной конкуренции. С тех пор мы в полной мере осознали, какую важную роль в стратегических ситуациях играет сотрудничество и почему хорошая стратегия непременно должна представлять собой приемлемое сочетание конкуренции и сотрудничества (один из нас написал книгу на эту тему: «Конкурентное сотрудничество в бизнесе»\n).Предисловие к первому изданию книги начиналось так: «Стратегическое мышление – это умение превзойти соперника, зная, что соперник тоже пытается превзойти вас». Теперь к этим словам мы добавляем: это также умение находить пути для сотрудничества, даже если другие руководствуются только собственными интересами, а не бескорыстием. Это умение убедить других (и даже себя самого) в необходимости сделать то, что вы обещаете. Это умение интерпретировать и раскрывать информацию. Это умение поставить себя на место другого человека, для того чтобы предсказать его поступки и повлиять на них.Хотелось бы думать, что книга «Искусство стратегии» отображает эту более зрелую и мудрую точку зрения. Но существует и преемственность. Хотя в новом издании мы предлагаем больше историй из реальной жизни, наша цель остается прежней: помочь вам выработать свой способ мышления в стратегических ситуациях, с которыми вам предстоит столкнуться. Это не книга для чтения во время деловых поездок, предлагающая «семь шагов к гарантированному стратегическому успеху». Ситуации, с которыми вы столкнетесь, будут настолько разнообразными, что вы добьетесь более весомых результатов, зная некоторые общие принципы построения стратегий и адаптируя их к тем стратегическим играм, в которые вы играете.Бизнесмены и корпорации должны разрабатывать эффективные стратегии конкуренции, чтобы выжить, и находить возможности для сотрудничества, чтобы «увеличить пирог». Политики должны придумывать стратегии проведения предвыборных кампаний, чтобы их избрали, и законодательные стратегии, чтобы воплотить свои замыслы в жизнь. Футбольные тренеры разрабатывают стратегии, которых игроки должны придерживаться на поле. Родители, которые пытаются добиться от своих детей хорошего поведения, тоже должны стать стратегами-любителями – дети уже большие специалисты в этом деле.`
// function getInfo(url) {
//   request(url, function (err, res, html) {
//     if (!err && res.statusCode == 200) {
//       let $ = cheerio.load(html)
//       let result = $('div.textBook').text()
//       if (result == null) {
//         result = $('div.MsoNormal').text()
//       }
//       let rozdili = []
//       $('div.take_h1').each(function (i, el) {
//         rozdili.push($(this).text())
//       })

//       // console.log(rozdili)
//       // const answer = getData(result)
//       // let lastVersion = correcting(answer)

//       // lastVersion.split('\n').forEach((str) => {
//       //   if (!str.startsWith('/')) {
//       //     console.log(str)
//       //   }
//       // })
//       let n = correcting(deleteProb(result), rozdili)

//       console.log(n)
//       // console.log([result])
//       // fs.writeFile('result.txt', result, function (err) {
//       //   if (err) {
//       //     console.log(err)
//       //   } else {
//       //     console.log('Done!')
//       //   }
//       // })

//       //.replace(/\r?\n/g, ''))
//       // console.log(result.replace(/\s+/, ''))

//       //           .trim()
//       //           .replace(
//       //             'Онлайн книга «Теория игр. Искусство стратегического мышления в бизнесе и жизни»',
//       //             ''

//       //           .replace(/Cтраница \d*/g, '')
//       //           .trim()
//       //       )
//       //       /**Онлайн книга «Теория игр. Искусство стратегического мышления в бизнесе и жизни»

//       //                                                                                 Cтраница 23

//       //                                                                                         Страница

//       //                                                                                  */
//     }
//   })
// }
// //=======================================================================================================

// // getInfo(1, `http://loveread.me/read_book.php?id=45085&p=1`)
// // getInfo(2, `http://loveread.me/read_book.php?id=45085&p=2`)

// // getInfo(2, `http://loveread.me/read_book.php?id=45085&p=2`)
// // getInfo(4, `http://loveread.me/read_book.php?id=45085&p=4`)
// // getInfo(5, `http://loveread.me/read_book.php?id=45085&p=5`)

// // request(
// //   'http://loveread.me/read_book.php?id=45085&p=1',
// //   function (err, res, html) {
// //     if (!err && res.statusCode == 200) {
// //       let $ = cheerio.load(html)
// //       const result = $('div.textBook').html()
// //       let m = result.slice(
// //         result.indexOf('<p class'),
// //         result.lastIndexOf('<table width')
// //       )

// //       m = m.split(
// //         /(<p class="MsoNormal">.*?<\/p>)|(<div class="take_h1">.*?<\/div>)/g
// //         // /(\<(\/?[^>]+)>)/g
// //       )

// //       m.filter((str) => str).map((val) => val.replace(/\n/g, ''))
// //       // console.log([m])
// //       fs.writeFile('result.txt', m, function (err) {
// //         if (err) {
// //           console.log('Pizda')
// //           // console.log(err.name)
// //         }
// //         console.log('DONE')
// //       })

// //       // let rozdili = m.filter((val) =>
// //       //   /<div class="take_h1">.*?<\/div>/.test(val)
// //       // )
// //       // console.log(rozdili)

// //       // if (rozdili.length) {
// //       // let m = rozdili.join('|')
// //       // let arr = i.split('\n')
// //       // let b
// //       // rozdili.forEach((val, index) => {
// //       //   const reg = new RegExp(`${val}\n`, 'g')

// //       //   if (reg.test(i)) {
// //       //     b = i.split(reg)

// //       //     result.push(b[index])
// //       //   }
// //       // })
// //       //   rozdili.forEach((val, i) => {
// //       //     const reg = new RegExp(`${val}[\nА-ЯЁ]`)
// //       //     let index = arr.indexOf(val)
// //       //     if (index != 0) {
// //       //       let temp = arr.splice(0, index)

// //       //       if (rozdili.includes(temp[0])) {
// //       //         temp.splice(0, 1)
// //       //         answer.set(rozdili[i - 1], temp)
// //       //       } else {
// //       //         answer.set('0', temp)
// //       //       }
// //       //     }
// //       //     // console.log(reg.exec(i))
// //       //   })
// //       //   if (arr.length) {
// //       //     let name = arr[0]
// //       //     arr.splice(0, 1)
// //       //     answer.set(name, arr)
// //       //   }
// //       //   // if (result.length == 1) {
// //       //   //   result.push(b[1])
// //       //   // }
// //       //   // result = i.split(new RegExp(`${rozdili.join(m)}`))
// //       // } else {
// //       //   answer.set('0', i)
// //       // }
// //     } else {
// //       console.log('Pizda!')
// //     }
// //   }
// // )

// // const url = 'http://loveread.me/read_book.php?id=45085&p=4'
// // const url = 'http://loveread.ec/read_book.php?id=76991&p=1'
// function Get(url) {
//   // const reg = //
//   // if()

//   request(url, function (err, res, html) {
//     // console.log(html)

//     function getNameSite(url) {
//       return url.slice(url.indexOf('//') + 1).split('/')[1]
//     }
//     let el = null
//     if (getNameSite(url) == 'loveread.me') {
//       // el =
//     }
//     if (!err && res.statusCode == 200) {
//       let $ = cheerio.load(html)
//       const result = $('body').html()
//       // $('p.MsoNormal').each(function () {
//       //   result.push($(this).text())
//       // })
//       // fs.writeFile('result.txt', result, function (err) {
//       //   if (err) {
//       //     console.log('Pizda')
//       //   }
//       //   console.log('Done!')
//       // })
//       // console.log(result)
//       let n = result.split('')
//       let start = result.indexOf('<p class="MsoNormal">'),
//         end = result.lastIndexOf('<table width')

//       let m = result.slice(start, end)
//       console.log(start, end)
//       // console.log(m)
//       // )

//       // console.log(result)
//       // console.log(result.match(/<p class=\"?MsoNormal\"?/g).length)
//       // let a = []
//       // $ = cheerio.load(html)
//       // $('div.take_h1').each(function () {
//       //   a.push($(this).text())
//       // })

//       m = m.replace(/<br>/g, '')
//       m = m.replace(/\n/g, '')
//       // // console.log([m])

//       // // console.log(html.match(/<div class="take_h1">.*?<\/div>/))
//       m = m.replace(
//         /(<p class="MsoNormal">.*?<\/p>|<div class="take_h1">.*?<\/div>)/g,
//         '\n$1'
//       )
//       // // console.log(m)
//       m = m.split(
//         /(<p class="MsoNormal">.*?<\/p>)|(<div class="take_h1">.*?<\/div>)/g
//         //   // /(\<(\/?[^>]+)>)/g
//       )
//       console.log(m)
//       m = m
//         .filter((str) => str)
//         .map((val) => val.replace(/\n/g, ''))
//         .filter((str) => str)
//       // console.log([m])
//       // // console.log('======================================================\n', m)
//       console.log(m)
//       fs.writeFile('result.txt', m.join('\n'), function (err) {
//         if (err) {
//           console.log('Pizda')
//           // console.log(err.name)
//         }
//         console.log('DONE')
//       })
//     }
//   })
// }
// // Get('http://loveread.ec/read_book.php?id=76991&p=2')
// // // getInfo('http://loveread.ec/read_book.php?id=76991&p=2')
// // const rp = require('request-promise')

// // rp('http://loveread.me/read_book.php?id=101185&p=1').then((html) => {
// //   console.log(html)
// // })
// const url = 'http://loveread.me/read_book.php?id=45085&p=5'
// getInfo(url)
// // console.log(url.slice(url.indexOf('//') + 1).split('/')[1])

// // Get('http://loveread.me/read_book.php?id=45085&p=4')

// 'use strict'

// const Fs = require('fs')
// const Path = require('path')
// const Axios = require('axios')

// async function downloadImage() {
//   const url = 'https://unsplash.com/photos/AaEQmoufHLk/download?force=true'
//   const path = Path.resolve(__dirname, 'images', 'code.jpg')
//   console.log(path)
//   // axios image download with response type "stream"
//   const response = await Axios({
//     method: 'GET',
//     url: url,
//     responseType: 'stream',
//   })

//   // pipe the result stream into a file on disc
//   response.data.pipe(Fs.createWriteStream(path))

//   // return a promise and resolve when download finishes
//   return new Promise((resolve, reject) => {
//     response.data.on('end', () => {
//       resolve()
//     })

//     response.data.on('error', () => {
//       reject()
//     })
//   })
// }

// downloadImage()

const axios = require('axios').default
const cheerio = require('cheerio')
// const Book = require('../models/book')
// const Page = require('../models/page')
// const { getAmount, getInfo } = require('./parser')
const async = require('async')
const iconv = require('iconv-lite')
const parser = require('../helpers/parser')
async function getDescription(url) {
  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
      responseEncoding: 'binary',
    })
    const buf = response.data

    if (response.request.host.startsWith('loveread')) {
      if (response.request.host == 'loveread.me') {
        const html = buf.toString()
        const $ = cheerio.load(html)
        const description = $('div.blTextBook > div > p').text()
        console.log(
          description
            .replace(/\s+/g, ' ') // заменить длинные пробелы одним
            .replace(/^\s/, '') // удалить пробелы в начале строки
            .replace(/\s$/, '') // удалить пробелы в конце строки
        )
      } else if (response.request.host == 'loveread.ec') {
        const html = iconv.decode(buf, 'windows-1251')
        const $ = cheerio.load(html, { decodeEntities: false })

        const description = $('tr.td_center_color > td > p.span_str').text()
        console.log(
          description
            // .replace(/<[^>]+>/g, '')
            .replace(/\s+/g, ' ') // заменить длинные пробелы одним
            .replace(/^\s/, '') // удалить пробелы в начале строки
            .replace(/\s$/, '') // удалить пробелы в конце строки
            .replace(/&nbsp;/g, ' ')
        )
      }
    }
  } catch (e) {
    console.log(e)
  }
}

;(async () => {
  const response = await parser.getDescription(
    'http://loveread.me/view_global.php?id=50001'
  )
  console.log(response)
})()
// getDescription('http://loveread.ec/view_global.php?id=76991')
// getDescription('http://loveread.ec/view_global.php?id=1166')
