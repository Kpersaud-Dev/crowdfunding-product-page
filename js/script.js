const backProjectBtn = document.querySelector('.back'),
      bookmark = document.querySelector('.bookmark'),
      bookmarks = document.querySelector('.bookmarks');

// Number Variables
const totalMoney = document.getElementById('total-money'),
      totalBackers = document.getElementById('total-backers'),
      daysLeft = document.getElementById('days-left');
// Change string values to numbers
let money = parseFloat(totalMoney.textContent),
    backers = parseFloat(totalBackers.textContent);
    

// Progress Bar
const progressBar = document.querySelector('.progress-bar');

// Select Reward Buttons
const selectRewardBtn = document.querySelectorAll('.reward-button');

// Modal variables
const modal = document.querySelector('.modal'),
      modalExit = document.getElementById('modal-exit');
      firstCheckbox = document.getElementById('first-radio'),
      modalCheckbox = document.querySelectorAll('.radio-btn'),
      enterPledge = document.querySelectorAll('.enter-pledge'),
      continueBtn = document.querySelectorAll('.continue-btn'),
      pledgeAmount = document.querySelectorAll('.pledge-amount');

// Success Modal variables
const successModal = document.querySelector('.success'),
      successBtn = document.querySelector('.success-btn');

// Update Backers Function
const updateBackers = () => {
  backers++;
  totalBackers.innerText = backers;
}

// Update Progress Bar
const updateProgress = amount => progressBar.value = amount;


// Update Amount Backed Function
const updateAmountBacked = () => {
  // let newMoney = `$${money + parseInt(pledgeAmount.value)}`;
  let newMoney = `$${money + pledgeAmount.forEach(pledge => {
    console.log(pledge.value);
    return parseInt(pledge.value);
  })}`;
  totalMoney.innerText = newMoney;
  // let result = money + parseInt(pledgeAmount.value);
  let result = money + parseInt(pledgeAmount.forEach(pledge => {
    return parseInt(pledge.value);    
  }));
  console.log(typeof(result));
  money = result;

  pledgeAmount.forEach(pledge => {
    return pledge.value;
  })

  if(result >= 100000) {
    console.log('Fully backed!')
  }

  updateProgress(result);
}




// Update Totals Function
const updateTotals = () => {  
  // Update Amount Backed
  updateAmountBacked();

  //Increase Backers count
  updateBackers();
}



// Event Listeners


// On Load display default values
window.addEventListener('load', () => {
  totalMoney.innerText = `$ ${money}`;
  totalBackers.innerText = `${backers}`;
})

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

// Continue Button 
continueBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'none';
    successModal.style.display = 'flex';
    updateTotals();
  })
})

// Success Modal Button
successBtn.addEventListener('click', () => {
  successModal.style.display = 'none';
})

