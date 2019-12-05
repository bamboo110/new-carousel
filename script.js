const slide = document.querySelector('.slide');
const card = document.querySelectorAll('.card');

// button
const button = document.querySelectorAll('.bar');

// counter
let counter = 1;
const size = card[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// button listener

const start = button[0];
const center = button[1];
const end = button[2];

start.addEventListener('click', () =>{
  if (counter <= 0) return; 
    slide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

end.addEventListener('click', () =>{
  if (counter >= card.length - 1) return; 
    slide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

