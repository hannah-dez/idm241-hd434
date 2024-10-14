const saveButton = document.getElementById('saveButton');
let isSaved = false;

updateButtonState(saveButton);

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
}

function toggleSaveState(button) {
  isSaved = !isSaved;
  updateButtonState(button);
}

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


// Mode Code