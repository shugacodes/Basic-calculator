const displayResult = document.getElementById('display-result');
const buttonNumber = document.querySelectorAll(".button-number");
const operator = document.querySelectorAll(".operator");
const clear = document.getElementById("clear");
const equalTo = document.getElementById("equal-to");



document.addEventListener('DOMContentLoaded', function() {

    buttonNumber.forEach(button => {
        button.addEventListener('click', () => {

            if (displayResult.value === "Invalid input"){
                displayResult.value =""
            }

            displayResult.value += button.textContent;
        });
    });


    operator.forEach(button => {
        button.addEventListener('click', () => {
            displayResult.value += button.textContent;
        });
    });
    


    equalTo.addEventListener('click', () => {
        const input = displayResult.value;
    
        try {
            // Allow only valid characters for evaluation
            const cleanExpression = input.replace(/[^0-9+/*.\-]/g, "");
    
            // Evaluate input
            const result = eval(cleanExpression);
    
            // Check if the result is a valid number
            if (typeof result === 'number' && isFinite(result)) {
                // Update result
                displayResult.value = result;
            } else {
                throw new Error('Invalid result');
            }
        } catch (error) {
            // Handle syntax errors or invalid input
            console.error('Error evaluating expression:', error);
            // Display an error message to the user
            displayResult.value = 'Invalid input';
        }
    });
    


});