const slide = document.querySelector('.slide');
const card = document.querySelectorAll('.card');

// button
const button = document.querySelectorAll('.bar');

// width
const size = card[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * 1) + 'px)';

// button listener

const start = document.querySelector('.start');
const center = document.querySelector('.center');
const end = document.querySelector('.end');

center.classList.add('active');
center.classList.remove('bar');

start.addEventListener('click', () =>{
  slide.style.transition = 'transform 0.4s ease-in-out';
  slide.style.transform = 'translateX(' + (-size * 0) + 'px)';

  start.classList.add('active');
  start.classList.remove('bar');
  center.classList.add('bar');
  end.classList.add('bar');
});

center.addEventListener('click', () =>{
  if(slide.style.transform === 'translateX(' + (-size * 2) + 'px)'){
    slide.style.transform = 'translateX(' + (-size * (1)) + 'px)';
  } else if (slide.style.transform === 'translateX(' + (-size * 0) + 'px)'){
    slide.style.transform = 'translateX(' + (-size * (1)) + 'px)';
  } else {
    return;
  }

  center.classList.add('active');
  center.classList.remove('bar');
  start.classList.add('bar');
  end.classList.add('bar');
});

end.addEventListener('click', () =>{
  slide.style.transition = 'transform 0.4s ease-in-out';
  slide.style.transform = 'translateX(' + (-size * 2) + 'px)';

  end.classList.add('active');
  end.classList.remove('bar');
  start.classList.add('bar');
  center.classList.add('bar');
  
});


