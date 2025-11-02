// LIGHTBOX AND SERVICE INFO BOX FUNCTIONALITY
const galleryImages = document.querySelectorAll(".image-gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");


galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});


closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});


lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});

const serviceItems = document.querySelectorAll(".service-item");
const infoBox = document.getElementById("serviceInfo");

serviceItems.forEach(item => {
    item.addEventListener("click", () => {
        infoBox.style.display = "block";
        infoBox.innerHTML = `
            <h4>${item.textContent}</h4>
            <p>We provide high-quality ${item.textContent.toLowerCase()} with customized menus and world-class service.</p>
        `;
    });
});
