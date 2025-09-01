document.addEventListener("DOMContentLoaded", (event) => {
    const boxElement = document.getElementById("box");

    boxElement.addEventListener("mousemove", (event) => {
        const currentTarget = event.currentTarget;
        const positions = currentTarget.getBoundingClientRect();

        const yElement = currentTarget.querySelector("#y-line");
        const xElement = currentTarget.querySelector("#x-line");

        const relativeMouseX = (event.clientX - positions.x);
        const relativeMouseY = (event.clientY - positions.y);

        yElement.style.left = `${relativeMouseX}px`;
        xElement.style.top = `${relativeMouseY}px`;
    });
});