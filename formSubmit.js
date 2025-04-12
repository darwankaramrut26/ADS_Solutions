function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const contactNo = document.getElementById("contactNo").value.trim();
    const city = document.getElementById("city").value.trim();
    const pinCode = document.getElementById("pinCode").value.trim();
    const emailAddress = document.getElementById("email").value.trim();

    if (!name || !address || !contactNo || !city || !pinCode || !emailAddress) {
        alert("Please fill in all required fields.");
        return;
    }

    const submitButton = event.target.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    // ✅ Initialize EmailJS only once globally or safely here
    if (!emailjs.__init) {
        emailjs.init("ykjbAGrSEmfOC3P6L");
        emailjs.__init = true;
    }

    const templateParams = {
        from_name: name,
        address: address,
        contact_no: contactNo,
        city: city,
        pin_code: pinCode,
        email: emailAddress,
    };

    emailjs.send("service_5kyfvb8", "template_uyfobtd", templateParams)
        .then(function (response) {
            alert("Message sent successfully!");
            // ✅ Corrected form reset target
            document.getElementById("contactForm").reset();
        })
        .catch(function (error) {
            console.error("EmailJS Error:", error);
            alert("Failed to send message. Please try again later.");
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = "Submit";
        });
}
