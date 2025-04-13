const noBtn = document.getElementById('noBtn');
const catImg = document.querySelector('.cat');
const jsText = document.querySelector('.js');

const images = [
  'images/sad1.jpg',
  'images/sad2.jpg',
  'images/sad3.jpg',
  'images/sad4.jpg',
  'images/sad5.jpg',
  'images/sad6.jpg',
  'images/sad7.jpg',
  'images/sad8.jpg',
  'images/sad9.jpg',
  'images/sad10.jpg',
  'images/sad11.jpg',
  'images/sad12.jpg',
  'images/sad13.jpg',
  'images/sad14.jpg',
  'images/sad15.jpg',
  'images/sad16.jpg',
  'images/sad17.jpg',
  'images/sad18.jpg',
  'images/sad19.jpg',
  'images/sad20.jpg'
];

const texts = [
  'Abhi toh haan keh sakti ho 😔',
  'Why you bully me?',
  'Mujhe yakin tha tu friend banegi...',
  'Ye dosti... ab adhoori reh gayi 😭',
  'Tu nahi samjhegi...',
  'Kya itna bura hoon mai? 😿',
  'Tu bhi ruthless nikli 😔',
  'Rula diya yaar...',
  'Mai toh kuch aur soch ke aaya tha...',
  'Friend request declined 💔',
  'Cat bhi sad ho gayi 😿',
  'Aankhon me aansu hai 😭',
  'Mere emotions ka kya?',
  'Arey ruk jaa... soch le!',
  'Kya dosti bhi itni mushkil hai?',
  'Toote dil ki awaaz sun sakti ho? 💔',
  'Sochne me kya jaata hai?',
  'Tu "yes" keh degi socha tha...',
  'Bas kar... ab aur nahi sahunga 😓',
  'Ab repeat mode me dukh chalega...'
];

let clickCount = 0;

noBtn.addEventListener('click', () => {
  const index = clickCount < images.length ? clickCount : images.length - 1;
  catImg.src = images[index];
  jsText.textContent = texts[index];
  clickCount++;
});

document.querySelector('.Yes').addEventListener('click', () => {
  alert('Yayyy!!! You are now friends 😄');
});
