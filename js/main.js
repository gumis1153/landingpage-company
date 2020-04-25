const figuresFirstTop = document.querySelectorAll('svg.ontime');
const figuresSecondTop = document.querySelectorAll('svg.delay');

const about = document.getElementById('about');

window.addEventListener('scroll', () => {
  let scrolled = window.pageYOffset;
  let rateFirstTop = scrolled * 1.25;
  let rateSecondTop = scrolled * 1.7;

  figuresFirstTop.forEach((i) => {
    i.style.transform = `translate( -50%, ${rateFirstTop}px)`;

    // zanikanie figur
    if (window.innerHeight / 2 <= window.scrollY) {
      figuresFirstTop.forEach((i) => {
        i.style.opacity = 0;
        i.style.zIndex = -1;
      });
    } else {
      i.style.opacity = 1;
      i.style.zIndex = 0;
    }

    // zapobiega powiekszaniu się strony w wysokość
    if (window.innerHeight <= window.scrollY) {
      i.style.display = 'none';
    } else {
      i.style.display = 'block';
    }
  });

  figuresSecondTop.forEach((i) => {
    i.style.transform = `translate( -50%, ${rateSecondTop}px)`;

    // zanikanie figur
    if (window.innerHeight / 2 <= window.scrollY) {
      figuresSecondTop.forEach((i) => {
        i.style.opacity = 0;
        i.style.zIndex = -1;
      });
    } else {
      i.style.opacity = 1;
      i.style.zIndex = 0;
    }

    // zapobiega powiekszaniu się strony w wysokość
    if (window.innerHeight <= window.scrollY) {
      i.style.display = 'none';
    } else {
      i.style.display = 'block';
    }
  });

  const photo = document.querySelector('.rectangle img');

  if (window.scrollY >= about.offsetTop * 0.5) {
    photo.style.transform = 'translate(-50%, 10%) rotate(5deg)';
    photo.style.opacity = 1;
  }
});

// scroll
const exploreBtn = document.getElementById('explore_btn');

exploreBtn.addEventListener('click', () => {
  window.scroll({
    top: document.getElementById('about').offsetTop + 70,
    left: 0,
    behavior: 'smooth',
  });
});
