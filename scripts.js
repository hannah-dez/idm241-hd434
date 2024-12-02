document.addEventListener('DOMContentLoaded', () => {
  const pinButton = document.querySelector('.pin-btn');
  const popup4 = document.getElementById('popup4');
  const popup5 = document.getElementById('popup5');
  let hideTimeout;

  if (!pinButton) {
      console.error('Pin button not found!');
      return;
  }

  if (!popup4 || !popup5) {
      console.error('Popups not found!');
      return;
  }

  // Set the default state on load
  pinButton.classList.add('default');

  function showPopup(popup) {
      popup.classList.add('show');
      
      clearTimeout(hideTimeout);

      hideTimeout = setTimeout(() => {
          popup.classList.remove('show');
      }, 2000);
  }

  // Toggle active state on button click
  pinButton.addEventListener('click', () => {
      if (pinButton.classList.contains('active')) {
          pinButton.classList.remove('active');
          pinButton.classList.add('default');
          showPopup(popup5); 
      } else {
          pinButton.classList.add('active');
          setTimeout(() => {
              pinButton.classList.remove('default');
              pinButton.classList.add('active');
              showPopup(popup4); 
          }, 600);
      }
  });

  // Prevent popup from disappearing when hovered over
  function preventHideOnHover(popup) {
      popup.addEventListener('mouseenter', () => {
          clearTimeout(hideTimeout); // Cancel hide timeout on hover
      });
      
      popup.addEventListener('mouseleave', () => {
          hideTimeout = setTimeout(() => popup.classList.remove('show'), 700); // Restart hide timeout on mouse leave
      });
  }


  preventHideOnHover(popup4);
  preventHideOnHover(popup5);

  // mousedown and mouseup event listeners
  pinButton.addEventListener('mousedown', () => {
      pinButton.classList.add('mouse-down');
  });

  pinButton.addEventListener('mouseup', () => {
      pinButton.classList.remove('mouse-down');
  });
});


//alpha-------------------------------------------------------------------------------
// Mouse Events
const pinButton = document.querySelector('.pin-btn')
pinButton.addEventListener('mouseenter', handleMouseEnter);
pinButton.addEventListener('mouseleave', handleMouseLeave);
pinButton.addEventListener('mousedown', handleMouseDown);
pinButton.addEventListener('mouseup', handleMouseUp);

// Touch Events
pinButton.addEventListener('touchstart', handleTouchStart);
pinButton.addEventListener('touchend', handleTouchEnd);

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
//-----------------------------------------------------FInAl BUILD----------------------------------------------------------------------------------
//SHARE MODAL SHOW
const modal = document.getElementById('share-modal');
const shareButton = document.querySelector('.share-button');

// Toggle modal visibility on button click
shareButton.addEventListener('click', function() {
    if (modal.style.display === 'none' || modal.style.display === '') {
        modal.style.display = 'block'; // Show modal
        setTimeout(() => {
            modal.classList.add('show'); // Add the class to trigger the scaling
        }, 10); // Small delay to allow the display change to take effect
    } else {
        modal.classList.remove('show'); // Remove the scaling effect
        setTimeout(() => {
            modal.style.display = 'none'; // Hide modal after animation
        }, 300); // Delay the hiding to allow the scale transition to finish
    }
});

//ADDITIONAL BUTTONS SHOW
const popUpPin = document.querySelector('.pop-up-pin');

const moreButton = document.querySelector('.more-button');
const moreButtonsContainer = document.querySelector('.more-buttons-container');


moreButton.addEventListener('click', () => {
  moreButtonsContainer.classList.toggle('show'); // Toggle the 'show' class
});

//HOVER MODAL ON ADDITIONAL BUTTONS
const hidepostButton = document.getElementById('hidepost');
const hidepostModal = document.getElementById('hidepost-modal');
let hoverTimer;

hidepostButton.addEventListener('mouseenter', () => {
  // Start a timer to show the modal after 1 second
  hoverTimer = setTimeout(() => {
    hidepostModal.style.opacity = '1'; // Fade in the modal
  }, 100);
});

hidepostButton.addEventListener('mouseleave', () => {
  // Clear the timer if the mouse leaves before 1 second
  clearTimeout(hoverTimer);
  hidepostModal.style.opacity = '0'; // Fade out the modal
});

// Function to add hover functionality to a button and its tooltip modal
function addHoverTooltip(buttonId, modalId) {
  const button = document.getElementById(buttonId);
  const modal = document.getElementById(modalId);
  let hoverTimer;

  button.addEventListener('mouseenter', () => {
    // Show the modal after 1 second delay
    hoverTimer = setTimeout(() => {
      modal.style.opacity = '1'; // Fade in
    }, 100);
  });

  button.addEventListener('mouseleave', () => {
    // Clear the timer and fade out the modal
    clearTimeout(hoverTimer);
    modal.style.opacity = '0'; // Fade out
  });
}

// Add tooltips for each button
addHoverTooltip('hidepost', 'hidepost-modal');
addHoverTooltip('download', 'download-modal');
addHoverTooltip('report', 'report-modal');