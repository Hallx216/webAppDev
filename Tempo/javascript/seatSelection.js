document.addEventListener("DOMContentLoaded", function () {
    // Select all available seats
    const seats = document.querySelectorAll(".seat.available");

    seats.forEach(seat => {
        seat.addEventListener("click", function () {
            // Toggle selection
            if (seat.classList.contains("selected")) {
                seat.classList.remove("selected"); // Deselect seat
                seat.style.backgroundImage = "url('../images/chair.png')";
            } else {
                seat.classList.add("selected"); // Select seat
                seat.style.backgroundImage = "url('../images/chair.png')";
            }
        });
    });
});
