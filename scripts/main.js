// Mobile menu toggle
document.getElementById('gen-ham').addEventListener('click', function() {
  var nav = document.getElementById('gen-nav');
  var menu = document.getElementById('gen-menu');
  var isOpen = menu.classList.toggle('open');
  nav.classList.toggle('mobile-open', isOpen);
});
 
// Close menu when clicking outside
document.addEventListener('click', function(e) {
  var nav = document.getElementById('gen-nav');
  var menu = document.getElementById('gen-menu');
  if (!nav.contains(e.target) && menu.classList.contains('open')) {
    menu.classList.remove('open');
    nav.classList.remove('mobile-open');
  }
});

// Place this before your closing  tag
document.querySelectorAll('.btn-atendimento-home').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect   = this.getBoundingClientRect();
    const size   = Math.max(rect.width, rect.height);
    ripple.style.cssText = [
      'position:absolute', 'border-radius:50%', 'pointer-events:none',
      'background:rgba(255,255,255,0.55)',
      'width:'  + size + 'px',
      'height:' + size + 'px',
      'left:'   + (e.clientX - rect.left - size / 2) + 'px',
      'top:'    + (e.clientY - rect.top  - size / 2) + 'px',
      'animation:rippleAnim 0.55s ease-out forwards'
    ].join(';');
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

const track = document.querySelector('.carrossel-track');
const slides = document.querySelectorAll('.slide');

let index = 0;

function updateSlide() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
});

AOS.init();
