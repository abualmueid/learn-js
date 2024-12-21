function rollDice() {
    const noOfDice = document.getElementById('noOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const values = [];
    const images = [];

    for(let i = 0; i < noOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        let image = `<img src="images/${value}.png">`;
        images.push(image);
    }

    diceResult.textContent = values.join(', ');
    diceImages.innerHTML = images.join('');

}