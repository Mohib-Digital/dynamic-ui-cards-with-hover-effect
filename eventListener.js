let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let card = document.querySelector('.card');
let container = document.querySelector('.container');


body.style.backgroundColor = 'gray'
h1.addEventListener('mouseover', () => {
  h1.style.color ='yellow';
  h1.style.textTransform = 'uppercase';
  h1.style.fontSize = '30px';
  h1.style.fontWeight = 'bold';
  h1.style.letterSpacing = '2px';
  h1.style.cursor = 'pointer';
})


// hover effect
card.addEventListener('mouseover', () => {
  card.style.backgroundColor ='lightblue';
})

card.addEventListener('mouseout', () => {
  card.style.backgroundColor ='pink';
})

// default card number is 0
let count = 0;

card.addEventListener('click', () => {
  // create new element and add card class
  let newCard = document.createElement('div');
  newCard.classList.add('card')
  container.append(newCard);
  
  // double the card number
  newCard.textContent = count++;

  // hover effect
  newCard.onmouseover = function() {
    newCard.style.backgroundColor = 'lightblue';
  };

  newCard.onmouseout = function() {
    newCard.style.backgroundColor = 'pink';
  };

})