const toggle = document.querySelector('#toggle');
const close = document.querySelector('#close');
const modal = document.querySelector('#modal');
const open = document.querySelector('#open');

// for navbar
toggle.addEventListener('click', () =>
    document.body.classList.toggle('show-nav')
);

// for modal Opening
open.addEventListener('click', () =>
    modal.classList.add('show-modal')
);

// for closing modal
close.addEventListener('click', () =>
    modal.classList.remove('show-modal')
);