// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

// console.log(galleryItems);
const listGallery = document.querySelector('.gallery');
listGallery.style.listStyle = 'none';
listGallery.addEventListener('click', showPicture);

const createCardPicture = galleryItems.map(
  ({ preview, original, description }) => {
    return ` 
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  }
);

listGallery.insertAdjacentHTML('beforeend', createCardPicture.join(''));
function showPicture(evt) {
  evt.preventDefault();

  const isGalleyImg = evt.target.classList.contains('gallery__image');

  if (!isGalleyImg) {
    return;
  }
}
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
