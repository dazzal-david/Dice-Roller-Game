function rollDice () {
    const inputDice = document.getElementById('inputDice').value;
    const resultText = document.getElementById('resultNumber');
    const resultImage = document.getElementById('resultImage');
    const values = [];
    const images = [];

    for (let i = 0; i < inputDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/${value}.png" alt="${value}">`);
    }

    resultText.textContent = `${values.join(', ')}`;
    resultImage.innerHTML = images.join(' ');
}