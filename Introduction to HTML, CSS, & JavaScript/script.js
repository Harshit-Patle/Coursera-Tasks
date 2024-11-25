document.getElementById("sub").addEventListener("click", function () {
    const input = document.querySelector(".leave textarea").value.trim();
    if (input) {
        const recomContainer = document.querySelector(".recom");
        const newCard = document.createElement("div");
        newCard.className = "card";
        newCard.textContent = input;
        recomContainer.appendChild(newCard);
        alert("Thank you! Your recommendation has been submitted.");
    } else {
        alert("Please enter a valid recommendation.");
    }
});
