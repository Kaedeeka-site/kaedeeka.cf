let images = [
  'https://cdn.discordapp.com/attachments/990246398190563348/990261647920746586/Unknown_3.gif',
  'https://cdn.discordapp.com/attachments/965515151795167232/990464577592500265/711.png',
  'https://cdn.discordapp.com/attachments/965515151795167232/990462466192470016/710.png'
]
let imgPage = 0
setInterval(() => {
  if (imgPage >= images.length) {
    imgPage = 0
    $('.deeka').attr('style', `background: linear-gradient(rgba(0,0,0,0),#fff),url('${images[imgPage]}');background-size: cover;`)
    imgPage++
  } else {
    $('.deeka').attr('style', `background: linear-gradient(rgba(0,0,0,0),#fff),url('${images[imgPage]}');background-size: cover;`)
    imgPage++
  }
}, 4000)
