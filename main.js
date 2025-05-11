// Typing Animation
const typingText = ['Frontend Developer ', 'Backend Developer ', 'Full Stack Developer '];
let i = 0;
let j = 0;
let currentText = '';
let isDeleting = false;

function type() {
  const typingElement = document.getElementById('typing');
  if (!typingElement) return;
  
  currentText = typingText[i];
  typingElement.textContent = isDeleting 
    ? currentText.substring(0, j--) 
    : currentText.substring(0, j++);

  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % typingText.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();

// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Menu Toggle
document.getElementById('menu-btn').addEventListener('click', () => {
  document.getElementById('navbar').classList.toggle('show');
});

// EmailJS Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => alert("Message Sent!"))
    .catch((error) => alert("Failed to send: " + error));
});
