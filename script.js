// Function to append numbers and operators to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Use eval() to evaluate the mathematical expression
        display.value = eval(display.value); 
    } catch (error) {
        // If there's an error (e.g., malformed expression), show 'Error'
        display.value = 'Error';
    }
}
