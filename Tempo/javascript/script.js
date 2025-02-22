// function myFunction() {
//   alert("Button clicked! Redirecting to Sign In page.");
// }
//
//
//
// function myFunction1() {
//   alert("Button clicked! Redirecting to Sign In page.");
// }


function validateAndSearch(event) {
    event.preventDefault(); // Prevent form submission

    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const errorMessage = document.getElementById('error-message');

    // Clear previous error message
    errorMessage.textContent = "";

    // Basic validation: check if source, destination, and date are filled
    if (!source || !destination || !date) {
        errorMessage.textContent = "Please fill in all fields!";
        return false; // Return false to stop the search
    }

    // Check if source and destination are not the same
    if (source.toLowerCase() === destination.toLowerCase()) {
        errorMessage.textContent = "Source and destination cannot be the same!";
        return false; // Return false to stop the search
    }

    return true; // If all validations pass, return true
}

function validateDate(event) {
    const dateInput = document.querySelector('input[type="date"]');
    const errorMessage = document.getElementById('error-message');
    const selectedDate = new Date(dateInput.value);
    const today = new Date();

    // Clear previous error message
    errorMessage.textContent = "";

    // Check if the date is in the future
    if (selectedDate <= today) {
        errorMessage.textContent = "Please select a date that is in the future!";
        return false; // Return false to stop the search
    }

    return true; // If date is valid, return true
}

// function handleSearchClick(event) {
//     if (validateDate(event) && validateAndSearch(event)) {
//         // Proceed with the search action (simulated or actual)
//         alert("Buses are found!");
//     }
// }



function validateEmail() {
    const emailInput = document.getElementById('email').value;
    const emailMessage = document.getElementById('email-message');
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (gmailRegex.test(emailInput)) {
      emailMessage.textContent = "Valid Gmail address!";
      emailMessage.style.color = "green";
    } else {
      emailMessage.textContent = "Please enter a valid Gmail address (e.g., example@gmail.com)";
      emailMessage.style.color = "red";
    }
  }

  // Next button handler
  function handleSubmit(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email').value;
    alert("Email entered: " + emailInput);
  }





  function validateForm(event) {
    // Prevent form submission if validation fails
    event.preventDefault();

    // Get the form elements
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const username = document.getElementById('username');
    const phoneNumber = document.getElementById('phoneNumber');
    const genderMale = document.getElementById('option1');
    const genderFemale = document.getElementById('option2');
    const genderOthers = document.getElementById('option3');

    // Error message elements
    const errorMessage = document.getElementById('errorMessage');
    let errorMessages = [];

    // Check if first name is empty
    if (!firstName.value.trim()) {
      errorMessages.push("First name is required.");
    }

    // Check if last name is empty
    if (!lastName.value.trim()) {
      errorMessages.push("Last name is required.");
    }

    // Check if username is empty
    if (!username.value.trim()) {
      errorMessages.push("Username is required.");
    }

    // Check if phone number is empty or invalid
    const phonePattern = /^[0-9]{10}$/;  // simple pattern for 10-digit phone number
    if (!phoneNumber.value.trim() || !phonePattern.test(phoneNumber.value.trim())) {
      errorMessages.push("Enter a valid 10-digit phone number.");
    }

    // Check if gender is selected
    if (!genderMale.checked && !genderFemale.checked && !genderOthers.checked) {
      errorMessages.push("Please select your gender.");
    }

    // Show error messages or submit the form
    if (errorMessages.length > 0) {
      errorMessage.innerHTML = errorMessages.join('<br>');
      errorMessage.style.color = 'red';
    } else {
      // If no errors, form is valid (you can submit the form here)
      errorMessage.innerHTML = '';
      alert('Form submitted successfully!');
      // Optionally submit the form if you want:
      // document.getElementById('signUpForm').submit();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const sourceSelect = document.getElementById("source");
    const destinationSelect = document.getElementById("destination");
    const swapButton = document.getElementById("swapButton");
    const form = document.getElementById("busSearchForm");

    // Function to update destination options based on source selection
    function updateDestinationOptions() {
        const selectedSource = sourceSelect.value;
        const allOptions = ["Delhi", "Mumbai", "Bangalore", "Chennai"];

        // Reset destination dropdown
        destinationSelect.innerHTML = '<option value="" disabled selected>Select Destination</option>';

        // Add options except the selected source
        allOptions.forEach(city => {
            if (city !== selectedSource) {
                let option = document.createElement("option");
                option.value = city;
                option.textContent = city;
                destinationSelect.appendChild(option);
            }
        });
    }

    // Event listener for source selection
    sourceSelect.addEventListener("change", updateDestinationOptions);

    // Swap button functionality
    swapButton.addEventListener("click", function () {
        const temp = sourceSelect.value;
        sourceSelect.value = destinationSelect.value;
        destinationSelect.value = temp;
        updateDestinationOptions();
    });

    // Form submission event
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const source = sourceSelect.value;
        const destination = destinationSelect.value;
        const date = document.getElementById("date").value;

        if (!source || !destination) {
            document.getElementById("error-message").textContent = "Please select both source and destination.";
            return;
        }

        // Redirect to results page with query parameters
        window.location.href = `BusList.html?source=${encodeURIComponent(source)}&destination=${encodeURIComponent(destination)}&date=${encodeURIComponent(date)}`;
    });
});
