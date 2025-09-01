document.addEventListener("DOMContentLoaded", (event) => {
    const formElement = document.getElementById("form");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const formInputElementCollection = formElement.querySelectorAll("input, select, textarea");
        const data = new FormData;
        formInputElementCollection.forEach((element) => {
            if (element.tagName == "INPUT") {
                if (element.type === "radio") {
                    if (!element.checked) {
                        return;
                    }
                    data.append(element.name, element.value);
                    return;
                }
                if (element.type === "checkbox") {
                    data.append(element.id, element.checked);
                    return;
                }
            }
            data.append(element.id, element.value);
        });
        console.log(Object.fromEntries(data));
    })

});