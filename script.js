const noBtn = document.getElementById('noBtn');
const yesBtn = document.querySelector('.Yes');
const catImg = document.querySelector('.cat');
const jsText = document.querySelector('.js');

// 20 images and messages for NO
const noImages = [
  'images/22.jpeg',
  'images/13.jpeg',
  'images/5.jpeg',
  'images/10.gif',
  'images/21.jpeg',
  'images/sad6.jpg',
  'images/sad7.jpg',
  'images/sad8.jpg',
  'images/sad9.jpg',
  'images/sad10.jpg',
];

const noTexts = [
  'Rula diya yaar...',
  'Why you bully me?',
  'Tumhari Taarif kru phir haan bologi;🫠',
  'Cat bhi sad ho gayi 😿',
  'Ache Hone Ka Matlab Bhaav Khana Nahi hai🙂',
  'Ye dosti... ab adhoori reh gayi 😭',
  'Tu nahi samjhegi...',
  'Kya itna bura hoon mai? 😿',
  'Tu bhi ruthless nikli 😔',
  'Rula diya yaar...',
  'Mai toh kuch aur soch ke aaya tha...',
  'Friend request declined 💔',
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
