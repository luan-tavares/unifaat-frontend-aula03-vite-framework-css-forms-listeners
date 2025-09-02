// Aguarda todo o HTML ser carregado antes de executar o código
document.addEventListener("DOMContentLoaded", () => {

    // Adiciona um listener de scroll na janela (window)
    window.addEventListener("scroll", (event) => {

        // Pega a referência do alvo atual do evento (aqui é o window)
        const currentTarget = event.currentTarget;

        // Captura a posição vertical do scroll da janela (em pixels)
        const scrollTop = currentTarget.scrollY;


        // Para elementos comuns, usa-se scrollTop
        // const scrollTop = event.currentTarget.scrollTop;

        // Mostra no console o valor atual do scroll
        console.log(scrollTop);

        // Atualiza o conteúdo do elemento #scroll mostrando o valor do scroll
        document.querySelector("#scroll").innerHTML = `${scrollTop}px`;
    });

});