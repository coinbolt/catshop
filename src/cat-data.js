
var IMG_URL = "http://lorempixel.com/600/400/cats/"

//missing 6 is intentional, IIRC it's an ugly cat :)
var catImages = [1,2,3,4,5,7,8,9,10].map(function(n) { return IMG_URL + n})
var catNames = [
  'Skittles',
  'Petey',
  'Patches',
  'Fluffy',
  'Boots',
  'Dudley',
  'Ping',
  'Flair',
  'Whiskers'
]

function getCats(num, lowPrice, highPrice) {
  var cats = []
  for (var i = 0; i < num; ++i) {
    var cat = {
      name: catNames[Math.floor(Math.random() * catNames.length)],
      price: lowPrice + Math.random()*(highPrice - lowPrice)
    }
  }

  return cats
}

module.exports = {
  getCats: getCats
}