
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const menuContent = document.querySelector(".menu-content");

    if (hamburger && menuContent) { // Check if elements exist
        hamburger.addEventListener("click", function() {
            menuContent.classList.toggle("active");
        });
    }

    // Review form submission
    const reviewForm = document.getElementById('review-form');
    if (reviewForm) { // Check if the review form exists
        reviewForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('reviewer-name').value;
            const reviewText = document.getElementById('review-text').value;
            const rating = document.getElementById('rating').value;

            const reviewDisplay = document.getElementById('reviews-display');
            reviewDisplay.innerHTML += `<div class="review">
                                            <h4>${name} (${rating} Stars)</h4>
                                            <p>${reviewText}</p>
                                        </div>`;
            
            this.reset(); // Clear form fields
        });
    }

    // Admission form submission
    const admissionForm = document.getElementById('submit-admission');
    if (admissionForm) { // Check if the admission form exists
        admissionForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const fullName = document.getElementById('fullName').value;
            const dateOfBirth = document.getElementById('dateOfBirth').value;
            const gender = document.getElementById('gender').value;
            const school = document.getElementById('school').value;
            const address = document.getElementById('address').value;
            const parentName = document.getElementById('parentName').value;
            const contactNumber = document.getElementById('contactNumber').value;
            const email = document.getElementById('email').value;
            const previousSchool = document.getElementById('previousSchool').value;

            const receipt = `
                <h2>Receipt</h2>
                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>School:</strong> ${school}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Parent/Guardian Name:</strong> ${parentName}</p>
                <p><strong>Contact Number:</strong> ${contactNumber}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Previous School:</strong> ${previousSchool}</p>
            `;

            document.getElementById('receipt').innerHTML = receipt;
            document.getElementById('receipt').style.display = 'block';
        });
    }
});