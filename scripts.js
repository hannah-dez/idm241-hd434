document.addEventListener('DOMContentLoaded', () => {
  const pinButton = document.querySelector('.pin-btn');

  if (!pinButton) {
      console.error('Pin button not found!');
      return;
  }

  // Set the default state on load
  pinButton.classList.add('default');

  // Toggle active state on button click
  pinButton.addEventListener('click', () => {
      if (pinButton.classList.contains('active')) {
          pinButton.classList.remove('active');
          pinButton.classList.add('default');
      } else {
          // Start the growing circle effect
          pinButton.classList.add('active'); // Temporarily add active for animation
          setTimeout(() => {
              pinButton.classList.remove('default'); // Remove default class
              pinButton.classList.add('active'); // Finally add active class
          }, 600); // Match duration of the animation
      }
  });

  // Add mousedown and mouseup event listeners
  pinButton.addEventListener('mousedown', () => {
      pinButton.classList.add('mouse-down');
  });

  pinButton.addEventListener('mouseup', () => {
      pinButton.classList.remove('mouse-down');
  });
});

// Mouse Events
saveButton.addEventListener('mouseenter', handleMouseEnter);
saveButton.addEventListener('mouseleave', handleMouseLeave);
saveButton.addEventListener('mousedown', handleMouseDown);
saveButton.addEventListener('mouseup', handleMouseUp);

// Touch Events
saveButton.addEventListener('touchstart', handleTouchStart);
saveButton.addEventListener('touchend', handleTouchEnd);

function handleMouseEnter() {
  if (!isSaved) {
    this.classList.add('hover');
  }
}

function handleMouseLeave() {
  this.classList.remove('hover');
}

function handleMouseDown() {
  this.style.transform = 'scale(0.9)';
  if (!isSaved) {
    this.classList.add('mousedown');
  }
}

function handleMouseUp() {
  this.style.transform = 'scale(1)';
  this.classList.remove('mousedown');

  toggleSaveState(this);
  showPopup();
}

function handleTouchStart(e) {
  e.preventDefault();
  this.style.transform = 'scale(0.9)';
  if (!isSaved) {
    this.classList.add('mousedown');
  }
}

function handleTouchEnd(e) {
  e.preventDefault();
  this.style.transform = 'scale(1)';
  this.classList.remove('mousedown');

  toggleSaveState(this);
  showPopup();
}

//Save State + Log/Flag Set
function toggleSaveState(button) {
  isSaved = !isSaved;
  //simulate database log of save state
  console.log('Save state is now:', isSaved ? 'Saved (true)' : 'Not Saved (false)');
  updateButtonState(button);
}

// Pop-Ups - Show
function showPopup() {
  const popup1 = document.getElementById('popup1');
  const popup2 = document.getElementById('popup2');
  
  if (isSaved) {
    popup1.innerHTML = 'Saved to board';
    showAndFlyIn(popup1);
  } else {
    popup2.innerHTML = 'Removed from your board';
    showAndFlyIn(popup2);
  }
}

// Pop-up animation
function showAndFlyIn(popup) {
  setTimeout(() => {
    popup.classList.add('visible');

    setTimeout(() => {
      popup.classList.remove('visible');
    }, 2500); 
  }, 500);
}

//button state
function updateButtonState(button) {
  if (isSaved) {
    button.classList.remove('save');
    button.classList.add('saved');
    button.innerHTML = 'Saved';
  } else {
    button.classList.remove('saved');
    button.classList.add('save');
    button.innerHTML = 'Save';
  }
}