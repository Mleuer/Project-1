
$("#getCardsBtn").on("click", function() {

    var playerIDs = [401, 15, 237, 115, 192, 274, 145, 246, 172, 278, 79, 472, 447, 228, 185, 189, 367, 322, 132, 268];

    var random = Math.floor(Math.random() * (playerIDs.length));
    console.log(random);

    var queryUrl = "https://www.balldontlie.io/api/v1/players/" + playerIDs[random];
    
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response) {

        console.log(response);

        var player = $("<div>");
        var playerName = $("<h2>").text(response.first_name + " " + response.last_name);
        player.append(playerName);
        $("body").append(player);
        

    })
})