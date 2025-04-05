document.getElementById('year').textContent = new Date().getFullYear();

function getStarted() {
    alert("Get Started button clicked!");
}

function toggleNav() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("hidden");
}

document.getElementById('heroImage').src = "https://dummyimage.com/720x600/000/fff";

function showPage(pageId) {
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.remove('active'));

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
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


  //contact
  function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields");
        return false;
    }

    // Basic email validation (you can improve this)
    if (!email.includes('@')) {
        alert("Invalid email format");
        return false;
    }

    // You can add more complex validation here

    // If all validation passes, you can submit the form (or handle it with AJAX)
    alert("Form submitted successfully!"); // Replace with your actual submission logic
    return true;
}

function loadAbout() {
    fetch('about.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('pageContainer').innerHTML = html;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById('pageContainer').innerHTML = '<p>Failed to load About content.</p>';
        });
}

function loadServices() {
    fetch('services.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('pageContainer').innerHTML = html;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById('pageContainer').innerHTML = '<p>Failed to load Services content.</p>';
        });
}

function loadContact() {
    fetch('contact.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('pageContainer').innerHTML = html;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById('pageContainer').innerHTML = '<p>Failed to load Contact content.</p>';
        });
}


function showPage(pageId) {
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.remove('active'));

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

//submit
function submitForm(event) {
  event.preventDefault();

  const formData = {
      name: document.getElementById('name').value,
      address: document.getElementById('address').value,
      contactNo: document.getElementById('contactNo').value,
      city: document.getElementById('city').value,
      pinCode: document.getElementById('pinCode').value,
      occupation: document.getElementById('occupation').value,
      companyName: document.getElementById('companyName').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
  };

  fetch('/send-email', { // Use the server endpoint
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          alert('Form submitted successfully!');
          document.getElementById('contactForm').reset();
      } else {
          alert('Error submitting form. Please try again.');
      }
  })
  .catch(error => {
      console.error('Error:', error);
      alert('Error submitting form. Please try again.');
  });

  return false;
}
