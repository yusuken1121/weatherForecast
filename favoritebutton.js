const button = document.getElementById("favoriteButton");

button.addEventListener("click", () => {
    if (button.innerHTML === "☆") {
        button.innerHTML = "★"
    } else{
        console.log("clicked");
        button.innerHTML = "☆"
    }
})