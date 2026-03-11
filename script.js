// Form submission
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
});

// Mobile menu toggle (optional)
const nav = document.querySelector('header nav ul');
document.querySelector('header h1').addEventListener('click', ()=>{
    nav.classList.toggle('show');
});
