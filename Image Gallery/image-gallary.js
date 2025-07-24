const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.contain img');

let currentIndex = 0;
let isZoomed = false;

function updateGallery(index) {
  if (index < 0) index = thumbnails.length - 1;
  if (index >= thumbnails.length) index = 0;

  currentIndex = index;
  mainImage.src = thumbnails[index].src;
  mainImage.alt = thumbnails[index].alt;

  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
}


prevBtn.addEventListener('click', () => updateGallery(currentIndex - 1));
nextBtn.addEventListener('click', () => updateGallery(currentIndex + 1));


thumbnails.forEach((thumb, i) => {
  thumb.addEventListener('click', () => updateGallery(i));
});


document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') updateGallery(currentIndex + 1);
  if (e.key === 'ArrowLeft') updateGallery(currentIndex - 1);
});


mainImage.addEventListener('click', () => {
  isZoomed = !isZoomed;
  mainImage.classList.toggle('zoomed', isZoomed);
});

updateGallery(currentIndex);