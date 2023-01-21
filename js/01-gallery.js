import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createGalleryItemsMarcup(galleryItems));

list.addEventListener("click", onActiveImage);

function createGalleryItemsMarcup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
       return `<div class="js-gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    }) .join('');
}
 
function onActiveImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

    instance.show();
}
