
document.getElementById('generate').addEventListener('click', () => {
    const numbersContainer = document.getElementById('numbers');
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        setTimeout(() => {
            const numberElement = document.createElement('span');
            numberElement.classList.add('number');
            numberElement.textContent = number;
            numberElement.style.backgroundColor = getNumberColor(number);
            numberElement.style.transform = 'scale(0)';
            numbersContainer.appendChild(numberElement);
            setTimeout(() => {
                numberElement.style.transform = 'scale(1)';
            }, 50);
        }, index * 100);
    });
});

function getNumberColor(number) {
    if (number <= 10) return '#f44336'; // Red
    if (number <= 20) return '#ff9800'; // Orange
    if (number <= 30) return '#4caf50'; // Green
    if (number <= 40) return '#2196f3'; // Blue
    return '#9c27b0'; // Purple
}
