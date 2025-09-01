// Aguarda todo o DOM ser carregado antes de rodar o código
document.addEventListener("DOMContentLoaded", (event) => {

    // Seleciona o elemento que tem id="box"
    const boxElement = document.getElementById("box");

    // Adiciona um listener de movimento do mouse dentro da "box"
    boxElement.addEventListener("mousemove", (event) => {

        // Pega o elemento atual que está recebendo o evento (no caso, a box)
        const currentTarget = event.currentTarget;

        // Obtém as posições e dimensões da box em relação à janela (top, left, width, height etc.)
        const positions = currentTarget.getBoundingClientRect();

        // Seleciona dentro da box o elemento que representa a linha vertical (id="y-line")
        const yElement = currentTarget.querySelector("#y-line");

        // Seleciona dentro da box o elemento que representa a linha horizontal (id="x-line")
        const xElement = currentTarget.querySelector("#x-line");

        // Calcula a posição do mouse em X relativa à borda esquerda da box
        const relativeMouseX = (event.clientX - positions.x);

        // Calcula a posição do mouse em Y relativa à borda superior da box
        const relativeMouseY = (event.clientY - positions.y);

        // Move a linha vertical (y-line) para a posição X do mouse dentro da box
        yElement.style.left = `${relativeMouseX}px`;

        // Move a linha horizontal (x-line) para a posição Y do mouse dentro da box
        xElement.style.top = `${relativeMouseY}px`;
    });
});
