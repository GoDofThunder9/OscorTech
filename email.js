document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("kFud42dCdtwbSmvsX"); // Your EmailJS Public Key

    const form = document.querySelector(".cta-form form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = {
            to_email: "contact.oscortech@gmail.com", // Replace with your own email
            from_name: form.name.value, // User's name
            from_email: form.email.value, // User's email
            phone: form.phone.value, // User's phone
            message: form.description.value, // User's message
        };

        // Send email via EmailJS
        emailjs.send("service_inv2b6o", "template_hj294an", formData)
            .then((response) => {
                console.log("Email sent successfully!", response);
                alert("Your message has been sent!");
                form.reset(); // Clear the form
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Failed to send email. Please try again later.");
            });
    });
});
