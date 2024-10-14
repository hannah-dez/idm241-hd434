const saveButton = document.getElementById('saveButton');
let isSaved = false; 

updateButtonState(saveButton);

saveButton.addEventListener('mouseenter', function() {
  //console.log('Mouse entered:', isSaved); 
  if (!isSaved) {
    this.classList.add('hover'); 
  }
});

saveButton.addEventListener('mouseleave', function() {
 // console.log('Mouse left:', isSaved); 
  this.classList.remove('hover'); 
});

saveButton.addEventListener('mousedown', function() {
 // console.log('Mouse down:', isSaved); 
  this.style.transform = 'scale(0.9)'; 
  if (!isSaved) {
    this.classList.add('mousedown'); 
  }
});

saveButton.addEventListener('mouseup', function() {
  //console.log('Mouse up:', isSaved); 
  this.style.transform = 'scale(1)'; 
  this.classList.remove('mousedown');

  toggleSaveState(this);
});

function toggleSaveState(button) {
  isSaved = !isSaved; 
 // console.log('State toggled:', isSaved); 
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

