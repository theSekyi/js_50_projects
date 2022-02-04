const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let currentIdx = 1;

next.addEventListener('click', () => {
  currentIdx++;
  addActive(circles, currentIdx);
  console.log(currentIdx);
});

prev.addEventListener('click', () => {});

function addActive(circles, currentIdx) {
  circles.forEach((circle, idx) => {
    circle.classList.add('active');
  });
}
