// document.addEventListener("DOMContentLoaded", () => {
//     const images = document.querySelectorAll(".image");
  
//     images.forEach((img) => {
//       img.classList.add("image-hidden");  // Initial hidden state
//     });
  
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.remove("image-hidden");
//             entry.target.classList.add("in-view");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );
  
//     images.forEach((img) => observer.observe(img));
//   });

const images = document.querySelectorAll('.image');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) { // Check if the user is scrolling down
        const revealPoint = window.innerHeight / 1.3; // Adjust trigger point

        images.forEach(image => {
            const position = image.getBoundingClientRect().top;

            if (position < revealPoint) {
                image.classList.add('active');
            }
        });
    }

    lastScrollY = currentScrollY;
});