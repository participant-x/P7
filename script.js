// Add a "Back to Top" button functionality
document.addEventListener('DOMContentLoaded', function () {
    // Create the button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.textContent = "Back to Top";
    backToTopBtn.style.position = "fixed";
    backToTopBtn.style.bottom = "20px";
    backToTopBtn.style.right = "20px";
    backToTopBtn.style.padding = "10px 15px";
    backToTopBtn.style.backgroundColor = "#6c63ff";
    backToTopBtn.style.color = "white";
    backToTopBtn.style.border = "none";
    backToTopBtn.style.borderRadius = "5px";
    backToTopBtn.style.cursor = "pointer";
    backToTopBtn.style.display = "none"; // Hidden by default
    document.body.appendChild(backToTopBtn);

    // Show the button when scrolled down
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // Scroll to top when the button is clicked
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
