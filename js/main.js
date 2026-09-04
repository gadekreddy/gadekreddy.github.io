// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
hamburger.addEventListener('click', () => {
navMenu.classList.toggle('active');
});
}

// Products Dropdown (tap-to-open on mobile, hover on desktop)
document.querySelectorAll('.nav-dropdown > a').forEach(link => {
link.addEventListener('click', (e) => {
if (window.innerWidth <= 768) {
const parent = link.parentElement;
if (!parent.classList.contains('open')) {
e.preventDefault();
document.querySelectorAll('.nav-dropdown.open').forEach(el => el.classList.remove('open'));
parent.classList.add('open');
}
}
});
});

// Tab Functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabBtns.forEach(btn => {
btn.addEventListener('click', () => {
const targetTab = btn.getAttribute('data-tab');

// Remove active class from all buttons and panes
tabBtns.forEach(b => b.classList.remove('active'));
tabPanes.forEach(p => p.classList.remove('active'));

// Add active class to clicked button and corresponding pane
btn.classList.add('active');
document.getElementById(targetTab).classList.add('active');
});
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({
behavior: 'smooth',
block: 'start'
});
}
});
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
const navbar = document.querySelector('.navbar');
if (window.scrollY > 100) {
navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
} else {
navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
}
});

// Form Validation (for contact page)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
contactForm.addEventListener('submit', (e) => {
e.preventDefault();

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;

if (name && email && message) {
alert('Thank you for your message! We will get back to you soon.');
contactForm.reset();
} else {
alert('Please fill in all fields.');
}
});
}
