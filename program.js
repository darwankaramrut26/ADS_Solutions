// Toggle Nav Menu
function toggleNav() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('hidden');
  }
  
  // Scroll to Hero
  function getStarted() {
    const section = document.getElementById('hero');
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Set current year
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('year').textContent = new Date().getFullYear();
  });
  
  // Form validation
  function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return false;
    }
    alert("Thanks for contacting us, " + name + "!");
    return true;
  }
  

  //Image 
  const images = [
    "https://img.freepik.com/free-vector/programmers-working-flat-style_23-2148203320.jpg",
    "https://img.freepik.com/free-vector/software-development-team-concept_23-2148819604.jpg",
    "https://img.freepik.com/free-vector/coding-concept-illustration_114360-1265.jpg",
    "https://img.freepik.com/free-vector/app-development-concept-with-flat-design_23-2147854106.jpg",
    "https://img.freepik.com/free-vector/isometric-coding-concept_23-2148250676.jpg"
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  const heroImage = document.getElementById('heroImage');
  heroImage.src = images[randomIndex];