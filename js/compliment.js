const compliments = [
    "You look great today",
    "What\'s up cool guy?",
    "Hope you have a fantastic day",
    "Keep your chin up champ!",
    "You have the best ideas",
    "You bring the best out of everyone!",
    "I appreciate you",
    "You light up the room",
    "You\'re awesome!"
];

document.getElementById("complimentButton").onclick = () => {
    const idx = Math.floor(Math.random() * compliments.length)
    const compliment = compliments[idx];
    let complimentParagraph = document.getElementById("compliment")
    if (!complimentParagraph) {
        complimentParagraph = document.createElement("p");
        complimentParagraph.setAttribute("id", "compliment");
        complimentParagraph.setAttribute("style", "compliment");
        document.getElementById("complimentContainer").appendChild(complimentParagraph);
    }
    complimentParagraph.innerText = compliment;
}

