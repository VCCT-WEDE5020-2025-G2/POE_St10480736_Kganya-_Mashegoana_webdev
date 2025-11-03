// ================================
// LIGHTBOX FUNCTIONALITY
// ================================
try {
    const gallery = document.querySelector(".image-gallery");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.getElementById("closeBtn");

    if (!gallery || !lightbox || !lightboxImg || !closeBtn) {
        throw new Error("One or more lightbox elements are missing from the DOM.");
    }

    // Event delegation for gallery images
    gallery.addEventListener("click", (e) => {
        const img = e.target.closest("img");
        if (!img) return;

        const allowedSrc = img.src;
        if (!allowedSrc.startsWith(window.location.origin + "/images/")) {
            console.warn("Blocked image with invalid source:", allowedSrc);
            return;
        }

        lightbox.style.display = "flex";
        lightboxImg.src = allowedSrc;
    });

    // Close lightbox on button click or outside click
    closeBtn.addEventListener("click", () => lightbox.style.display = "none");
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) lightbox.style.display = "none";
    });

} catch (err) {
    console.error("Lightbox Error:", err.message);
}

// ================================
// SERVICE INFO BOX FUNCTIONALITY
// ================================
try {
    const servicesContainer = document.getElementById("services");
    const infoBox = document.getElementById("serviceInfo");

    if (!servicesContainer || !infoBox) {
        throw new Error("Service container or info box is missing from the DOM.");
    }

    // Event delegation for service items
    servicesContainer.addEventListener("click", (e) => {
        const item = e.target.closest(".service-item");
        if (!item) {
            console.warn("Clicked element is not a valid service item.");
            return;
        }

        showServiceInfo(item.textContent);
    });

    function showServiceInfo(name) {
        if (!name || typeof name !== "string") {
            console.warn("Invalid service name:", name);
            return;
        }

        infoBox.innerHTML = ""; // Clear previous content

        const title = document.createElement("h4");
        title.textContent = name;

        const desc = document.createElement("p");
        desc.textContent = `We provide high-quality ${name.toLowerCase()} with customized menus and world-class service.`;

        infoBox.appendChild(title);
        infoBox.appendChild(desc);
        infoBox.style.display = "block";
    }

} catch (err) {
    console.error("Service Info Error:", err.message);
}

// ================================
// SMOOTH SCROLLING
// ================================
try {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    if (!navLinks.length) throw new Error("No navigation links found.");

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) {
                console.warn("Target section not found for link:", link.href);
                return;
            }
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

} catch (err) {
    console.error("Smooth Scrolling Error:", err.message);
}
