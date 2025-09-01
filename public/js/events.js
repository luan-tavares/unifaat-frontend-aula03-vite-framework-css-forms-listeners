document.addEventListener("DOMContentLoaded", () => {
    const sectionElement = document.querySelector("section");
    const buttonElement = sectionElement.querySelector("#btn");
    const inputTextElement = document.querySelector("input[type=\"text\"]");
    const logElement = document.getElementById("log");

    function renderEvent(e, title) {

        const lines = [
            `# ${title}`,
            `type: ${e.type}`,
            `target: ${e.target.tagName}`,
            `currentTarget: ${e.currentTarget?.tagName ?? "WINDOW"}`,
        ];
        if (e instanceof KeyboardEvent) {
            lines.push(`key: ${e.key}`, `code: ${e.code}`);
        }

        logElement.textContent += "\n" + lines.join("\n") + "\n---------------\n";
    }

    window.addEventListener("click", (event) => {
        logElement.textContent = "";
        console.log(event);
        renderEvent(event, "WINDOW click (capturing)");
    }, { capture: true });

    buttonElement.addEventListener("click", (event) => {
        renderEvent(event, "BUTTON click (bubbling)");
    });

    sectionElement.addEventListener("click", (event) => {
        renderEvent(event, "SECTION click (bubbling)");
    });

    sectionElement.addEventListener("click", (event) => {
        renderEvent(event, "SECTION click (capture)");
    }, { capture: true });


    inputTextElement.addEventListener("keydown", (event) => {
        event.preventDefault();
        logElement.textContent = "";
        renderEvent(event, "INPUT keydown (após preventDefault)");
    });
});
