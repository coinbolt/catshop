
var IMG_URL = 'http://lorempixel.com/600/400/cats/';

var cats = [{
  id: 1,
  name: 'Fluffy',
  price: 25,
  image: IMG_URL + '1'
}, {
  id: 2,
  name: 'Skittles',
  price: 56,
  image: IMG_URL + '2'
}, {
  id: 3,
  name: 'Petey',
  price: 2,
  image: IMG_URL + '3'
}, {
  id: 4,
  name: 'Patches',
  price: 63,
  image: IMG_URL + '4'
}, {
  id: 5,
  name: 'Boots',
  price: 21,
  image: IMG_URL + '5'
}, {
  id: 6,
  name: 'Dudley',
  price: 17,
  image: IMG_URL + '7'
}];

function getCats() {
  return cats
}

module.exports = {
  getCats: getCats
};
