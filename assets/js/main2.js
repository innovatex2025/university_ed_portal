document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.querySelector('.countdown__module');
    const targetDateStr = countdownElement.getAttribute('data-date');

    // Parse the target date string correctly
    const targetDateParts = targetDateStr.split('/');
    const targetDate = new Date(
        parseInt(targetDateParts[0], 10), // Year
        parseInt(targetDateParts[1], 10) - 1, // Month (0-based index)
        parseInt(targetDateParts[2], 10) // Day
    ).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "<p>The countdown has ended.</p>";
            return;
        }

        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in the respective elements
        countdownElement.querySelector('.days').textContent = days;
        countdownElement.querySelector('.hours').textContent = hours;
        countdownElement.querySelector('.minutes').textContent = minutes;
        countdownElement.querySelector('.seconds').textContent = seconds;
    }

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 100);

    // Initial call to set the countdown immediately upon page load
    updateCountdown();
});
