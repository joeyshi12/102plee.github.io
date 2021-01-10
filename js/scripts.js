function createText() {
    var text = document.createElement("P");
    text.innerText = "Joey is a fake gamer.";
    document.getElementById("mainContent").appendChild(text);
}


$(document).ready(function(){

    $("#message-Bubble").on("click", function() {
        console.log("sup");
        var box = document.getElementById("message-Box");
        var bubble = document.getElementById("message-Bubble");
        bubble.style.display = "none";
        box.style.height = "600px";
        box.style.width = "400px";
        $(this.hash).toggleClass('active').focus();
    });

    
    $(window).on('beforeunload', function() {
        console.log("sup");
        $(window).scrollTop(0);
    });

    $("#doNothing").on("click", function() {
        return false;
    });
});

