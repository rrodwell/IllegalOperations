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
                var tablePicture = $("<td class='td_headshot'> <img class='headshot_small' src='assets/images/playerImgs/" + apiInfo[i].imgPath + " ' alt=''></td>");
                var tablePosition = $("<td>" + apiInfo[i].position + "</td>");
                var tableName = $('<td><a href="#" class="btn btn-link btn-xs" data-toggle="modal" data-target=".modal">'+ apiInfo[i].name + '</a></td>');
                var tableScore = $("<td>" + apiInfo[i].fantasyPoints + "</td>");
                tableRow.append(tablePicture,tablePosition,tableName,tableScore);
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