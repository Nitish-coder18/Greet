const noBtn = document.getElementById('noBtn');
const yesBtn = document.querySelector('.Yes');
const catImg = document.querySelector('.cat');
const jsText = document.querySelector('.js');

// NO button content (looping)
const noImages = [
  'images/22.jpeg',
  'images/13.jpeg',
  'images/5.jpeg',
  'images/23.jpeg',
  'images/21.jpeg',
  'images/17.jpeg',
  'images/12.jpeg'
];

const noTexts = [
  'Rula diya yaar...',
  'Why you bully me?',
  'Tumhari Taarif kru phir haan bologi;🫠',
  'Cat bhi sad ho gayi 😿',
  'Ache Hone Ka Matlab Bhaav Khana Nahi hai🙂',
  'Aankhon me aansu hai 😭',
  'Ab To Haan Bol do..!!🥲',
  'Last Baar puch Rha mat Mano Mai Phir repeat krungaa..!!😁'
];

// YES button content (looping)
const yesImages = [
  'images/9.jpeg',
  'images/21.jpeg',
  'images/6.jpeg',
  'images/10.gif'
];

const yesTexts = [
  'Yayy! Tum meri friend ban gayi 😄',
  'Aaj khushi ke aansu nikal gaye!',
  'Friendship goals unlocked 🫶',
  'Bas ab party hogi! 🎉'
];

let noClickCount = 0;
let yesClickCount = 0;

// NO button logic
noBtn.addEventListener('click', () => {
  const imgIndex = noClickCount % noImages.length;
  const textIndex = noClickCount % noTexts.length;
  catImg.src = noImages[imgIndex];
  jsText.textContent = noTexts[textIndex];
  noClickCount++;

  spawnEmoji(); // emoji effect for NO
});

// YES button logic
yesBtn.addEventListener('click', () => {
  const imgIndex = yesClickCount % yesImages.length;
  const textIndex = yesClickCount % yesTexts.length;
  catImg.src = yesImages[imgIndex];
  jsText.textContent = yesTexts[textIndex];
  yesClickCount++;

  spawnEmoji('🎉'); // emoji effect for YES
});

// Emoji animation function
const emojis = ['💔', '😿', '🥺', '😭', '😢', '😞', '😩', '🤧'];

function spawnEmoji(customEmoji = null) {
  const emoji = document.createElement('div');
  emoji.textContent = customEmoji || emojis[Math.floor(Math.random() * emojis.length)];
  emoji.classList.add('flying-emoji');

  // Random horizontal position
  emoji.style.left = Math.random() * 90 + '%';
  emoji.style.animationDuration = (Math.random() * 1 + 1.5) + 's';

  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 3000);
}
