// Aguarda o carregamento completo do DOM antes de rodar o código
document.addEventListener("DOMContentLoaded", () => {

    // Seleciona o elemento <section> do HTML
    const sectionElement = document.querySelector("#content-section");

    // Dentro da section, seleciona o elemento com id="btn"
    const buttonElement = sectionElement.querySelector("#btn");

    // Seleciona o input de texto (primeiro que tiver type="text")
    const inputTextElement = document.querySelector('input[type="text"]');

    // Seleciona o elemento que tem o id="log" (para exibir os logs de eventos)
    const logElement = document.getElementById("log");

    // Função responsável por montar e renderizar as informações do evento capturado
    function renderEvent(event, title) {

        // Cria um array com informações básicas do evento
        const lines = [
            `# ${title}`,                           // Título descritivo do evento
            `type: ${event.type}`,                      // Tipo do evento (click, keydown, etc.)
            `target: ${event.target.tagName}`,          // Elemento alvo do evento
            `currentTarget: ${event.currentTarget?.tagName ?? "WINDOW"}`, // Elemento que tratou o evento (ou WINDOW se for global)
        ];

        // Se o evento for de teclado, adiciona informações extras (tecla e código da tecla)
        if (event instanceof KeyboardEvent) {
            lines.push(`key: ${event.key}`, `code: ${event.code}`);
        }

        // Concatena as informações formatadas no log, separadas por "---------------"
        logElement.textContent += "\n" + lines.join("\n") + "\n---------------\n";
    }

    // Adiciona um listener de clique na window (fase bubbling, padrão)
    window.addEventListener("click", (event) => {
        renderEvent(event, "WINDOW click (bubbling)"); // Renderiza informações no log
    });

    // Adiciona um listener de clique na window (fase capturing, antes do bubbling)
    window.addEventListener("click", (event) => {
        logElement.textContent = "";              // Limpa o log                  
        renderEvent(event, "WINDOW click (capturing)"); // Renderiza informações no log
    }, { capture: true }); // O { capture: true } ativa a captura antes da propagação normal

    // Adiciona um listener de clique no botão (fase bubbling)
    buttonElement.addEventListener("click", (event) => {
        renderEvent(event, "BUTTON click (bubbling)");
    });

    // Adiciona um listener de clique na section (fase bubbling)
    sectionElement.addEventListener("click", (event) => {
        renderEvent(event, "SECTION click (bubbling)");
    });

    // Adiciona um listener de clique na section (fase capturing)
    sectionElement.addEventListener("click", (event) => {
        renderEvent(event, "SECTION click (capture)");
    }, { capture: true });

    // Adiciona um listener de keydown no input de texto
    inputTextElement.addEventListener("keydown", (event) => {
        event.preventDefault();                    // Bloqueia a ação padrão (digitar texto no input)
        logElement.textContent = "";               // Limpa o log
        renderEvent(event, "INPUT keydown (após preventDefault)"); // Mostra detalhes da tecla pressionada
    });
});
