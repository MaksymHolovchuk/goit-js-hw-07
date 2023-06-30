import { galleryItems } from './gallery-items.js';

// Change code below this line


const galleryContainer = document.querySelector('.gallery');
galleryContainer.addEventListener('click', onClick);
let instance;

const createGalleryItems = ({ preview, original, description }) => 
    `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;


const galleryList = galleryItems.map(e => createGalleryItems(e)).join('');
galleryContainer.insertAdjacentHTML('afterbegin', galleryList);

function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const galleryImg = event.target.dataset.source;
  instance = basicLightbox.create(` <img  src="${galleryImg}">
    `, {
    onShow: () => {
      document.addEventListener('keydown', onPressKeyEsc);
    },
    onClose: () => {
      document.removeEventListener('keydown', onPressKeyEsc)
    },
  },
  );
  instance.show();
}
function onPressKeyEsc(event) {
    if (event.code ==='Escape' && instance)
    { instance.close(); }
}
