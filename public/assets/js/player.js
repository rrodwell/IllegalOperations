var myTeam = [];


$.ajax({

        url: "http://illegal-formation.herokuapp.com/api/players/all",
        method: "GET"
    })
    .done(function(response) {
        var playersArr =[];
        for(var i = 0; i < response.length; i++){
            response[i].status = "active";
            playersArr.push(response[i]);
        }
        //console.log(playersArr);
        buttonClicks(playersArr);

        //console.log(response);
    });



function buttonClicks(apiInfo) {

    $(".btn-success").on("click", function() {
        var playerId = $(this).attr("data-key");
        for (var i = 0; i < apiInfo.length; i++) {
            console.log(playerId);
            console.log(apiInfo[1].name);
            if (apiInfo[i].id == playerId) {
                apiInfo[i].status = "drafted";
                $("tr").attr("data-status", "drafted");
                //headshop, name, position, score
                var tableRow = $("<tr>");
                //tableRow.attr("data-status", childSnapshot.key);
                var tablePicture = $("<td class='td_headshot'> <img class='headshot_small' src='assets/images/playerImgs/" + apiInfo[i].imgPath + " ' alt=''></td>");
                var tablePosition = $("<td>" + apiInfo[i].position + "</td>");
                var tableName = $('<td><a href="#" class="btn btn-link btn-xs" data-toggle="modal" data-target=".modal">'+ apiInfo[i].name + '</a></td>');
                var tableScore = $("<td>" + apiInfo[i].fantasyPoints + "</td>");
                tableRow.append(tablePicture,tablePosition,tableName,tableScore);
                $("#team-roster").append(tableRow);

                populateNextBest();

            } else {

                console.log("error")
            }
        }

        //$("player-name").push(myTeam)
        // var status = $(this).attr("data-status");
        // status.attr("data-status", "drafted");

    });

    $(".btn-warning").on("click", function() {
        $(this).attr("data-status", "inactive");
        populateNextBest();
    });

    $(".btn-reset").on("click", function() {
        $(this).attr("data-status", "active");

        resetPlayer();
    });
}

function populateNextBest(){

};
