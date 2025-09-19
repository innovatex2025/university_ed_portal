document.addEventListener("DOMContentLoaded", function () {
  const countdownElement = document.querySelector(".countdown__module");
  const buttonElement = document.querySelector(".start-quiz a"); // Select the button element
  const targetDateStr = countdownElement.getAttribute("data-date");
  const targetDateParts = targetDateStr.split("/");
  const targetDate = new Date(
    parseInt(targetDateParts[0], 10),
    parseInt(targetDateParts[1], 10) - 1,
    parseInt(targetDateParts[2], 10)
  ).getTime();

  function updateCountdown() {
    const now = Date.now();
    let distance = targetDate - now;

    if (distance <= 0) {
     // clearInterval(countdownInterval);
     // countdownElement.innerHTML = "<p> </p>";

      // Change the button text and link when the countdown ends
      document.querySelector(".hero__title2").textContent =  "Registration has ended. Please begin the quiz.";
      buttonElement.textContent = "Start Quiz";
      buttonElement.href = "https://innovatex-fe.pages.dev/"; // Update with the correct quiz URL
      return;
    }

    // All calculations floored to avoid rounding flicker
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Only update textContent, never innerHTML
    countdownElement.querySelector(".days").textContent = days;
    countdownElement.querySelector(".hours").textContent = hours;
    countdownElement.querySelector(".minutes").textContent = minutes;
    countdownElement.querySelector(".seconds").textContent = seconds;
  }

  updateCountdown(); // First update instantly
  const countdownInterval = setInterval(updateCountdown, 1000);
});

