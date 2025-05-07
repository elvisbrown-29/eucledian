document.addEventListener("DOMContentLoaded", () => {
    const number1Input = document.getElementById("number1");
    const number2Input = document.getElementById("number2");
    const calculateBtn = document.getElementById("calculate-btn");
    const stepsContainer = document.getElementById("steps-container");
    const stepsDiv = document.getElementById("steps");
    const resultContainer = document.getElementById("result-container");
    const resultDiv = document.getElementById("result");
    const themeToggle = document.getElementById("theme-toggle");
    const currentYear = document.getElementById("current-year");

    // Set the current year in the footer
    currentYear.textContent = new Date().getFullYear();

    // Toggle dark/light mode
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const icon = themeToggle.querySelector(".toggle-icon");
        icon.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Calculate GCD using the Euclidean Algorithm
    calculateBtn.addEventListener("click", () => {
        const num1 = parseInt(number1Input.value, 10);
        const num2 = parseInt(number2Input.value, 10);

        // Validate input
        if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
            alert("Please enter valid positive integers.");
            return;
        }

        // Clear previous results
        stepsDiv.innerHTML = "";
        resultDiv.textContent = "";

        // Perform the Euclidean Algorithm
        let a = num1;
        let b = num2;
        const steps = [];

        while (b !== 0) {
            const remainder = a % b;
            steps.push(`Divide ${a} by ${b}, remainder is ${remainder}.`);
            a = b;
            b = remainder;
        }

        // Display steps
        steps.forEach((step, index) => {
            const stepDiv = document.createElement("div");
            stepDiv.classList.add("step");
            stepDiv.textContent = `Step ${index + 1}: ${step}`;
            stepsDiv.appendChild(stepDiv);
        });

        // Display result
        resultDiv.textContent = `The result is ${a}`;
        stepsContainer.classList.remove("hidden");
        resultContainer.classList.remove("hidden");
    });
});