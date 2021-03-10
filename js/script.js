const backProjectBtn = document.querySelector('.back'),
      bookmark = document.querySelector('.bookmark'),
      bookmarks = document.querySelector('.bookmarks');

// Number Variables
const totalMoney = document.getElementById('total-money'),
      totalBackers = document.getElementById('total-backers'),
      daysLeft = document.getElementById('days-left');

// Progress Bar
const progressBar = document.querySelector('.progress-bar');

// Select Reward Buttons
const selectRewardBtn = document.querySelectorAll('.reward-button');

// Modal variables
const modal = document.querySelector('.modal');
const modalExit = document.getElementById('modal-exit');
const firstCheckbox = document.getElementById('first-radio');
const modalCheckbox = document.querySelectorAll('.radio-btn');
const enterPledge = document.querySelectorAll('.enter-pledge');


// Event Listeners

backProjectBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

bookmarks.addEventListener('click', () => {
  bookmarks.classList.toggle('clicked');
  bookmark.innerText = 'Bookmarked';

  // Toggle Bookmark text
  if(!bookmarks.classList.contains('clicked')) {
    bookmark.innerText = 'Bookmark';
  }
})

modalExit.addEventListener('click', () => {
  modal.style.display = 'none';
})


selectRewardBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'flex';
  })
})

// First Checkbox Event Listener
// Div does not have the same number of elements

firstCheckbox.addEventListener('change', () => {
  if(firstCheckbox.checked) {
    firstCheckbox.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'block';
  } else {
    firstCheckbox.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'none';
  }
})

// Other Checkbox event listeners
modalCheckbox.forEach(box => {
  box.addEventListener('change', () => {
    if(box.checked) {
      box.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'block';
    } else {
      box.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'none';
    }
  })
})

