// Variables
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let btn = document.querySelector('#new-quote');


// Quotes Array

const quotes = [{
  quote:`"The only limit to our realization of tomorrow is our doubts of today."`,
  author: `Franklin D. Roosevelt`
},{ quote : `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,author :`Winston Churchill`
},{
  quote : `"Strength grows in the moments when you think you can't go on but you keep going anyway."`, author:`Zubairu Awudu`
}, {quote:`"Believe you can and you're halfway there."`, author:`Theodore Roosevelt`
},{
  quote:`"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it."`,
  author:`Henry Ford`
},{
  quote:`"You don't have to be perfect to be amazing."`,
  author:`Zubairu Awudu`
},{
  quote:`"The struggle you're in today is developing the strength you need for tomorrow."`,
  author:`Robert Tew`
},{
  quote:`"Challenges are what make life interesting; overcoming them is what makes life meaningful."`,
  author:`Joshua J. Marine`
},{
  quote:`"Courage is not the absence of fear, but the triumph over it." `,
  author:`Nelson Mandela`
},{
  quote:`"The only way to do great work is to love what you do."`,
  author:`Steve Jobs`
},{
  quote:`"Do not wait to strike till the iron is hot; but make it hot by striking."`,
  author:`William Butler Yeats`
},{
  quote:`"You never know how strong you are until being strong is your only choice."`,
  author:`Bob Marley
`
},{
  quote:`"Act as if what you do makes a difference. It does."`,
  author:`William James`
},{
  quote:`"Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't."`,
  author:`Rikki Rogers`
},{
  quote:`"Life isn't about waiting for the storm to pass, but learning to dance in the rain."`,
  author:`Vivian Greene`
},];

/// Process in generating the a new quote..
btn.addEventListener('click', function(){

  let random =  Math.floor(Math.random()* quotes.length);

  quote.innerText = quotes[random].quote;
  author.innerText = quotes[random].author;
})