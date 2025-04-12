document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('heroImage').src = "https://dummyimage.com/720x600/000/fff";

  //Images
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
  function showPage(pageId) {
    document.querySelectorAll('.page-content').forEach(page => {
      page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
  }
  
  function toggleNav() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("hidden");
  }
  
  function getStarted() {
    alert("Thanks for getting started with ADEnterprises!");
  }
  
  function submitForm(event) {
    event.preventDefault();
    alert("Thank you for contacting us. We'll get back to you soon!");
    return false;
  }

function toggleTheme() {
  const body = document.body;
  const toggleButton = document.getElementById("themeToggle");

  // Toggle classes
  const isLight = body.classList.contains("light");

  if (isLight) {
    body.classList.remove("light");
    body.classList.add("dark");
    toggleButton.textContent = "☀️ Light Mode";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    toggleButton.textContent = "🌙 Dark Mode";
  }

  // Store preference
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
}

// Set default theme and bind event
document.addEventListener("DOMContentLoaded", () => {
  // Year update
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Default theme from local storage
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(savedTheme);

  const toggleButton = document.getElementById("themeToggle");
  if (toggleButton) {
    toggleButton.textContent =
      savedTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";

    // ✅ Bind the click event here!
    toggleButton.addEventListener("click", toggleTheme);
  }

  // Default image
  const heroImage = document.getElementById("heroImage");
  if (heroImage) {
    heroImage.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085";
  }
})

const toggleButton = document.getElementById("themeToggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});