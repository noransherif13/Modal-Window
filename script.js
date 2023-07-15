'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
{
    //clicking to open the modal window
    btnsOpenModal[i].addEventListener('click', openModal);
}

//this function to make our code more DRY
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}; 

/* we didn't call the function directly as if we did it'll
execute as soon as js reads this line 
and we want it to be executed only when clicking */

btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})




