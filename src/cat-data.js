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
      id: i,
      image: catImages.splice(Math.floor(Math.random() * catImages.length), 1),
      name: catNames.splice(Math.floor(Math.random() * catNames.length), 1),
      price: Math.round((lowPrice + Math.random()*(highPrice - lowPrice)) * 1000) / 1000
    }
    cats.push(cat)
  }
  return cats
}

module.exports = {
  getCats: getCats
}
