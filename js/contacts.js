const feedBack = document.querySelector('.contacts-info__btn');
const modalForm = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalBtn = document.querySelector('.modal__btn');
const modalThanks = document.querySelector('.modal-thanks');
const modalThanksClose = document.querySelector('.modal-thanks__close');
const modalThanksBtn = document.querySelector('.modal-thanks__btn');


feedBack.addEventListener('click', function(e){
    modalForm.style.display = 'flex';
    modalBtn.addEventListener('click', function(e){
        modalForm.style.display = 'none'
        modalThanks.style.display = 'flex'
        e.preventDefault();
    })
});

modalClose.addEventListener('click', function() {
    modalForm.style.display = 'none';
});

modalThanksBtn.addEventListener('click', function() {
    modalThanks.style.display = 'none';
});

modalThanksClose.addEventListener('click', function() {
    modalThanks.style.display = 'none';
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        modalForm.style.display = 'none'
        modalThanks.style.display = 'none';
    }
});
console.log(feedBack, modalForm);