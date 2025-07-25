const noButton = document.getElementById('noButton');
const h2 = document.querySelector('h2');
let clickCount = 0;

const mensagens = [
    "Tem certeza? 😑",
    "Não faz isso comigo! 🥺",
    "Não gosta de mim? 😞",
    "Só resta uma opção kkkk",
];

noButton.addEventListener('click', () => {
    clickCount++;
    if (clickCount <= mensagens.length) {
        h2.textContent = mensagens[clickCount - 1];
    }
    if (clickCount < 4) {
        // Gera posições aleatórias dentro da janela
        const x = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));

        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    } else { 
        noButton.style.display = 'none'; // Esconde o botão após 5 cliques
    }
});

const yesButton = document.getElementById('yesButton');
const h1 = document.querySelector('h1');

const mensagensSim = [
    "Nos vemos às 18 meu amor",
];

yesButton.addEventListener('click', () => {
    h1.textContent = mensagensSim[0]; // Altera o h1
    h2.style.display = 'none'; // Esconde o h2
    noButton.style.display = 'none'; // Esconde o botão "não"
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const emoji = document.createElement('span');
            emoji.textContent = '😍';
            emoji.className = 'floating-emoji';
            emoji.style.left = `${Math.random() * 90 + 5}%`;
            emoji.style.fontSize = `${Math.random() * 2 + 2}rem`;
            document.body.appendChild(emoji);

            setTimeout(() => {
                emoji.remove();
            }, 3000);
        }, i * 150); // cada emoji sobe com 150ms de diferença
    }
});