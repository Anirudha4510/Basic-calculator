document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonValue = this.textContent;
            if (buttonValue === 'C') {
                display.value = '';
            } else if (buttonValue === '←') {
                display.value = display.value.slice(0, -1);
            } else if (buttonValue === '=') {
                try {
                    // Evaluate the expression
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                }
            } else if (buttonValue === '%') {
                // Convert percentage to decimal
                display.value = parseFloat(display.value) / 100;
            } else {
                display.value += buttonValue;
            }
        });
    });

    document.addEventListener('keydown', function(e) {
        if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.'].includes(e.key)) {
            display.value += e.key;
        } else if (e.key === 'Backspace') {
            display.value = display.value.slice(0, -1);
        } else if (e.key === 'Enter') {
            e.preventDefault();  // Prevent the default action (inserting a newline)
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'Error';
            }
        } else if (e.key === 'Escape') {
            display.value = '';
        } else if (e.key === '%') {
            // Convert percentage to decimal
            display.value = parseFloat(display.value) / 100;
        }
    });
});
