function emailValidation() {
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

  function signInNextHandle(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email').value;
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
