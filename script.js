// script.js

// Function to validate RSVP form
function validateRSVPForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = '';
    
    let valid = true;
    
    if (!name) {
        errorElement.textContent += 'Name is required.\n';
        valid = false;
    }
    if (!validateEmail(email)) {
        errorElement.textContent += 'Email is invalid.\n';
        valid = false;
    }
    
    return valid;
}

// Helper function to validate email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// Function to handle image upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('image-preview');

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
    
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!validTypes.includes(file.type)) {
        alert('Please upload a valid image (JPEG, PNG, GIF).');
        event.target.value = ''; // Clear the input
        preview.src = '';
    }
}

// Event listener for form submission
document.getElementById('rsvp-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default submission
    if (validateRSVPForm()) {
        alert('RSVP submitted successfully!');
        // Here you would typically handle the form data submission to a server
    }
});

// Event listener for image upload
document.getElementById('image-upload').addEventListener('change', handleImageUpload);

