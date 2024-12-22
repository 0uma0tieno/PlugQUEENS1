// JavaScript code for adding interactivity if necessary
// Example: Adding a smooth scroll to the "Shop Now" button

document.querySelector('.cta').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#products').scrollIntoView({
        behavior: 'smooth'
    });
});