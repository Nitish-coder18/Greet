const noBtn = document.getElementById('noBtn');
const yesBtn = document.querySelector('.Yes');
const catImg = document.querySelector('.cat');
const jsText = document.querySelector('.js');

// 20 images and messages for NO
const noImages = [
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

const noTexts = [
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

// 5 images and messages for YES
const yesImages = [
  'images/happy1.jpg',
  'images/happy2.jpg',
  'images/happy3.jpg',
  'images/happy4.jpg',
  'images/happy5.jpg'
];

const yesTexts = [
  'Yayy! Tu meri friend ban gayi 😄',
  'Aaj khushi ke aansu nikal gaye!',
  'Cat bhi dance kar rahi hai! 💃',
  'Friendship goals unlocked 🫶',
  'Bas ab party hogi! 🎉'
];

let noClickCount = 0;
let yesClickCount = 0;

noBtn.addEventListener('click', () => {
  const index = noClickCount < noImages.length ? noClickCount : noImages.length - 1;
  catImg.src = noImages[index];
  jsText.textContent = noTexts[index];
  noClickCount++;
});

yesBtn.addEventListener('click', () => {
  const index = yesClickCount < yesImages.length ? yesClickCount : yesImages.length - 1;
  catImg.src = yesImages[index];
  jsText.textContent = yesTexts[index];
  yesClickCount++;
});
