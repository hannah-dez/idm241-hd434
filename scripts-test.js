document.addEventListener('DOMContentLoaded', () => {
    const imageContainers = document.querySelectorAll('.image-container');
  
    imageContainers.forEach(container => {
      const pinButton = container.querySelector('.pin-btn');
      const shareButton = container.querySelector('.share-button');
      const moreButton = container.querySelector('.more-button');
      const moreButtonsContainer = container.querySelector('.more-buttons-container');
      const modal = container.querySelector('#share-modal');
  
      // Pin Button Click Event
      
      // Add event listeners to all pin buttons
document.querySelectorAll('.pin-btn').forEach((button) => {
  // Handle mouse down
  button.addEventListener('mousedown', () => {
    button.classList.add('mouse-down');
    button.classList.remove('mouse-up');
  });

  // Handle mouse up
  button.addEventListener('mouseup', () => {
    button.classList.add('mouse-up');
    button.classList.remove('mouse-down');
  });

  // Optional: Clear states on mouse leave (cleanup for edge cases)
  button.addEventListener('mouseleave', () => {
    button.classList.remove('mouse-up', 'mouse-down');
  });
});
let hideTimeout;
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

      // Share Button Toggle Modal
      shareButton.addEventListener('click', function () {
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
  
      // Toggle More Buttons Container
      moreButton.addEventListener('click', () => {
        moreButtonsContainer.classList.toggle('show'); // Toggle the 'show' class
      });
  
      // Tooltip Hover Functionality
      function addHoverTooltip(buttonId, modalId) {
        const button = container.querySelector(`#${buttonId}`);
        const modal = container.querySelector(`#${modalId}`);
        let hoverTimer;
  
        button.addEventListener('mouseenter', () => {
          hoverTimer = setTimeout(() => {
            modal.style.opacity = '1'; // Fade in
          }, 100);
        });
  
        button.addEventListener('mouseleave', () => {
          clearTimeout(hoverTimer);
          modal.style.opacity = '0'; // Fade out
        });
      }
  
      // Add tooltips for each additional button
      addHoverTooltip('hidepost', 'hidepost-modal');
      addHoverTooltip('download', 'download-modal');
      addHoverTooltip('report', 'report-modal');
    });
  });
  