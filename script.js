const randomNumber = Math.floor(Math.random() * 10) + 1;
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");

let attempts = 0;

guessButton.addEventListener("click", function() {
    // Obtenha o valor da entrada do usuário
    const guess = parseInt(guessInput.value);  
    // Incrementa o contador de tentativas
    attempts++;
    // Verifique se o palpite está correto
    if (guess === randomNumber) {
        message.textContent = `Parabéns! Você acertou em ${attempts} tentativas.`;
        message.style.color = 'red';
        guessButton.disabled = true;
    }
    // Verifique se o palpite foi maior
    else if (guess > randomNumber) {
        message.textContent = `Tente um valor mais BAIXO!`;
        message.style.color = 'yellow';
    }
    // Verifique se o palpite foi menor
    else {
        message.textContent = `Tente um valor mais ALTO!`;
        message.style.color = 'orange';
    }

    guessInput.value = "";
});
