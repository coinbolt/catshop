
var IMG_URL = "http://lorempixel.com/600/400/cats/"

var cats = [{
  id: 1,
  name: 'Fluffy',
  price: 34,
  image: IMG_URL + '1'
}, {
  id: 2,
  name: 'Skittles',
  price: 34,
  image: IMG_URL + '2'
}, {
  id: 3,
  name: 'Petey',
  price: 34,
  image: IMG_URL + '3'
}, {
  id: 4,
  name: 'Patches',
  price: 34,
  image: IMG_URL + '4'
}, {
  id: 5,
  name: 'Boots',
  price: 34,
  image: IMG_URL + '5'
}, {
  id: 6,
  name: 'Dudley',
  price: 34,
  image: IMG_URL + '7'
}];

function getCats(num, lowPrice, highPrice) {
  return cats
}

module.exports = {
  getCats: getCats
}
