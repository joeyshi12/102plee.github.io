var compliments = ['You look great today', 'What\'s up cool guy?', 'Hope you have a fantastic day?', 'Keep your chin up champ!'];

function createText() {
    var text = document.createElement("P");
    const randIdx = Math.floor(Math.random() * compliments.length)
    text.innerText = compliments[randIdx];
    document.getElementById("mainContent").appendChild(text);
}

var blobopen = false;

$(document).ready(function(){

    $(document).on('click', function (e) {
        if (blobopen) {
            if ($(e.target).closest("#message-Box").length === 0 && $(e.target).closest("#message-Bubble").length === 0) {
                var box = document.getElementById("message-Box");
                var bubble = document.getElementById("message-Bubble");
                box.style.height = "75px";
                box.style.width = "75px";

                setTimeout(
                    function() {
                        bubble.style.display = "block";
                    }, 500);

                console.log("no");
                blobopen = false;
            }
        }
    });

    $("#message-Bubble").on("click", function() {
        if (!blobopen) {
            console.log("sup");
            var box = document.getElementById("message-Box");
            var bubble = document.getElementById("message-Bubble");
            bubble.style.display = "none";
            box.style.height = "600px";
            box.style.width = "400px";
            blobopen = true;
        }
    });



    // $("#message-Box").on('focusout', function () {
    //     console.log("sup dude");
    //     var box = document.getElementById("message-Box");
    //     var bubble = document.getElementById("message-Bubble");
    //     box.style.height = "75px";
    //     box.style.width = "75px";
    //     bubble.style.display = "block";
    //     $("#message-Box").removeClass('active');
    // });

    $("#doNothing").on("click", function() {

        $.when($("#messageSender").fadeOut(250)).done(function() {
            $("#messageSender").hide();
            $.when($("#sentDone").fadeIn(250)).done(function() {
                $("#sentDone").show();
            });
        });

    });

    $("#sendAnother").on("click", function() {

        $.when($("#sentDone").fadeOut(250)).done(function() {
            $("#sentDone").hide();
            $.when($("#messageSender").fadeIn(250)).done(function() {
                $("#messageSender").show();
            });
        });

    });



});

