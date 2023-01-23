import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, description, original }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
           <img
           class="gallery__image"
           src="${e.target.dataset.source}"
           data-source="${e.target.dataset.source}"
           alt="${e.target.alt}"/>`,
    {
      onShow: () => {
        window.addEventListener("keydown", onModalCloseByEscape);
      },
      onClose: () => {
        window.removeEventListener("keydown", onModalCloseByEscape);
      },
    }
  );

  instance.show();

  function onModalCloseByEscape(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
