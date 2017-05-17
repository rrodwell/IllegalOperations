var myTeam = [];


$.ajax({

        url: "http://illegal-formation.herokuapp.com/api/all",
        method: "GET"
    })
    .done(function(response) {
        myfunction(response);

        //console.log(response);
    })



function myfunction(apiInfo) {

    $(".btn-success").on("click", function() {
        var playerName = $(this).attr("data-key");
        for (var i = 0; i < apiInfo.length; i++) {
            console.log(playerName);
            console.log(apiInfo[1].name);
            if (apiInfo[i].name == playerName) {

                //headshop, name, position, score
                var tableRow = $("<tr>");
                //tableRow.attr("data-status", childSnapshot.key);
                var tablePicture = $("<td class='td_headshot'> <img class='headshot_small' src='assets/images/playerImgs" + apiInfo[i].imgPath + "alt=''></td>");
                // var tablePosition = $("<td>" + childSnapshot.val().destinationName + "</td>");
                // var tableName = $("<td>" + childSnapshot.val().frequencyMin + "</td>");
                // var tableScore = $("<td>" + nextArrival + "</td>");
                tableRow.append(tablePicture);
                $("#team-roster").append(tableRow);
                return

            } else {

                console.log("error")
            };
        };

        //$("player-name").push(myTeam)
        // var status = $(this).attr("data-status");
        // status.attr("data-status", "drafted");
    });

    $(".btn-warning").on("click", function() {
        $(this).attr("data-status", "inactive");
    });

}