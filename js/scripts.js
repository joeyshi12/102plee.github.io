function createText() {
    var text = document.createElement("P");
    text.innerText = "Joey Sucks.";
    document.getElementById("mainContent").appendChild(text);
}

document.addEventListener('click', function(event) {
    if (!event.target.matches('.messageBubble')) return;
    event.preventDefault();
    var bubble = document.getElementById("message-Bubble");
    var box = document.getElementById("message-Box");
    box.style.height = "600px";
    box.style.width = "400px";
    bubble.style.display = "none";
  
  }, false);
