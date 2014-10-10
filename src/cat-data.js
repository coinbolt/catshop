var util = require('util')

var IMG_URL = "http://lorempixel.com/600/400/cats/"

//missing 6 is intentional, IIRC it's an ugly cat :)
var catImages = [1,2,3,4,5,7,8,9,10].map(function(n) { return util.format("imgs/%s.jpg", n) })
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

var quotes = [
  {
    "text": "If you are not free to choose wrongly and irresponsibly, you are not free at all.",
    "author": "Jacob Hornberger"
  },
  {
    "text": "I predict future happiness for Americans if they can prevent the government from wasting the labors of the people under the pretense of taking care of them.",
    "author": "Thomas Jefferson"
  },
  {
    "text": "When the people find that they can vote themselves money, that will herald the end of the republic.",
    "author": "Benjamin Franklin"
  },
  {
    "text": "There are two ways to conquer and enslave a country. One is by the sword. The other is by debt.",
    "author": "John Adams"
  },
  {
    "text": "I have never understood why it is greed to want to keep the money you have earned, but not greed to want to take somebody else’s money.",
    "author": "Thomas Sowell"
  },
  {
    "text": "Nations are not ruined by one act of violence, but gradually and in an almost imperceptible manner by the depreciation of their circulating currency, through its excessive quantity.",
    "author": "Copernicus"
  },
  {
    "text": "I believe that every individual is naturally entitled to do as he pleases with himself and the fruits of his labor, so far as it in no way interferes with any other men’s rights.",
    "author": "Satoshi Nakamoto"
  },
  {
    "text": "The first lesson of economics is scarcity: There is never enough of anything to satisfy all those who want it. The first lesson of politics is to disregard the first lesson of economics.",
    "author": "Thomas Sowell"
  },
  {
    "text": "The direct use of physical force is so poor a solution to the problem of limited resources that it is commonly employed only by small children and great nations.",
    "author": "David Friedman"
  },
  {
    "text": "It is well enough that people of the nation do not understand our Banking and Monetary system, for if they did, I believe there would be a Revolution before tomorrow morning.",
    "author": "Henry Ford"
  },
  {
    "text": "The first panacea for a mismanaged nation is inflation of the currency; the second is war. Both bring a temporary prosperity; both bring a permanent ruin. But both are the refuge of political and economic opportunists.",
    "author": "Ernest Hemingway"
  },
  {
    "text": "Whomsoever controls the volume of money in any country is absolute master of all industry and commerce and when you realize that the entire system is very easily controlled, one way or another, by a few powerful men at the top, you will not have to be told how periods of inflation and depression originate.",
    "author": "James Garfield"
  },
  {
    "text": "Inflation is taxation without representation.",
    "author": "Milton Friedman"
  },
  {
    "text": "No nation could preserve its freedom in the midst of continual warfare.",
    "author": "James Madison"
  },
  {
    "text": "The further a society drifts from truth, the more it will hate those that speak it.",
    "author": "George Orwell"
  },
  {
    "text": "The great virtue of a free market system is that it does not care what color people are; it does not care what their religion is; it only cares whether they can produce something you want to buy. It is the most effective system we have discovered to enable people who hate one another to deal with one another and help one another.",
    "author": "Milton Friedman"
  },
  {
    "text": "The problem is big government. If whoever controls government can impose his way upon you, you have to fight constantly to prevent the control from being harmful. With small, limited government, it doesn't much matter who controls it, because it can't do you much harm.",
    "author": "Harry Browne"
  },
  {
    "text": "The problem with politics isn't the money; it's the power.",
    "author": "Harry Browne"
  },
  {
    "text": "Yes, (we will not find a solution to political problems in cryptography), but we can win a major battle in the arms race and gain a new territory of freedom for several years. Governments are good at cutting off the heads of a centrally controlled networks like Napster, but pure P2P networks like Gnutella and Tor seem to be holding their own.",
    "author": "Satoshi Nakamoto"
  }
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
