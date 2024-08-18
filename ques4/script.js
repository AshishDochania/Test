const expandBtn = document.getElementById('expandBtn');
const rotateBtn = document.getElementById('rotateBtn');
const slideBtn = document.getElementById('slideBtn');
const slidingDiv = document.getElementById('slidingDiv');


expandBtn.addEventListener('click', function() {
    expandBtn.classList.toggle('expanded');
});

rotateBtn.addEventListener('click', function() {
    rotateBtn.classList.toggle('rotated');
});


slideBtn.addEventListener('click', function() {
    slidingDiv.classList.toggle('slid-in');
});