let images = [
  'https://cdn.discordapp.com/attachments/990246398190563348/990261647920746586/Unknown_3.gif',
  'https://cdn.discordapp.com/attachments/882156919526133773/990305239880048771/IMG_0864_2.png',
  'https://cdn.discordapp.com/attachments/882156919526133773/990305240295276574/IMG_0852.png'
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
