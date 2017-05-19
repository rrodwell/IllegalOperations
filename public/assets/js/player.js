var myTeam = [];


$.ajax({

        url: "http://illegal-formation.herokuapp.com/api/players/all",
        method: "GET"
    })
    .done(function(response) {
        var playersArr = [];
        for (var i = 0; i < response.length; i++) {
            response[i].status = "active";
            playersArr.push(response[i]);
        }
        populateNextBest(playersArr);
        buttonClicks(playersArr);

        //console.log(response);
    });



function buttonClicks(apiInfo) {

    $(".btn-success").on("click", function() {
        var playerId = $(this).attr("data-key");
        for (var i = 0; i < apiInfo.length; i++) {
            //console.log(playerId);
            //console.log(apiInfo[1].name);
            if (apiInfo[i].id == playerId) {
                apiInfo[i].status = "drafted";
                $(this).parents("tr").attr("data-status", "drafted");
                $('btn[data-key="' + playerId + '"]').attr("data-status", "drafted");
                //headshop, name, position, score
                var tableRow = $("<tr>");
                //tableRow.attr("data-status", childSnapshot.key);
                var tablePicture = $("<td class='td_headshot'> <img class='headshot_small' src='assets/images/playerImgs/" + apiInfo[i].imgPath + " ' alt=''></td>");
                var tablePosition = $("<td>" + apiInfo[i].position + "</td>");
                var tableName = $('<td><a href="#" class="btn btn-link btn-xs" data-toggle="modal" data-target=".modal">' + apiInfo[i].name + '</a></td>');
                var tableScore = $("<td>" + apiInfo[i].fantasyPoints + "</td>");
                tableRow.append(tablePicture, tablePosition, tableName, tableScore);
                $("#team-roster").append(tableRow);

                populateNextBest(apiInfo);
                return

            }
        }

        //$("player-name").push(myTeam)
        // var status = $(this).attr("data-status");
        // status.attr("data-status", "drafted");

    });

    $(".btn-warning").on("click", function() {
        var playerId = $(this).attr("data-key");
        for (var i = 0; i < apiInfo.length; i++) {
            //console.log(playerId);
            //console.log(apiInfo[1].name);
            if (apiInfo[i].id == playerId) {
                apiInfo[i].status = "inactive";
                $(this).parents("tr").attr("data-status", "inactive");
                $('btn[data-key="' + playerId + '"]').attr("data-status", "inactive");
            }
        }
        populateNextBest(apiInfo);

    });

    $(".btn-link").on("click", function() {
        var playerId = $(this).attr("data-key");
        for (var i = 0; i < apiInfo.length; i++) {
            if (apiInfo[i].id == playerId) {
                var modPosition = ' <span>' + apiInfo[i].position + ' &nbsp;&nbsp;</span>';
                var modName = '<strong class="player-name">' + apiInfo[i].name + '</strong>'
                var modImg = '<img class="img-responsive headshot_modal" src="assets/images/playerImgs/' + apiInfo[i].imgPath + ' " alt="...">'
                var modAge = '<strong>Age</strong>: ' + apiInfo[i].age + ' &nbsp;'
                var modGamesPlayed = '<strong>Games Played</strong>: ' + apiInfo[i].gamesPlayed + ' &nbsp;'
                var modGamesStarted = '<strong>Games Started</strong>: ' + apiInfo[i].gamesStarted + ' &nbsp;'
                var modReceptions = '<strong>Receptions</strong>: ' + apiInfo[i].receptions + ' &nbsp;'
                var modLongestReceptions = '<strong>Longest Reception</strong>: ' + apiInfo[i].longestReception + ' &nbsp;'
                var modLongestRushingAttempt = '<strong>Longest Rushing Attempt</strong>: ' + apiInfo[i].longestRushingAttempt + ' &nbsp;'
                var modYardSacked = '<strong>Yards Sacked</strong>: ' + apiInfo[i].ydsSkd + ' &nbsp;'
                $("#mode_position").html(modPosition);
                $("#mode_name").html(modName);
                $("#mode_img").html(modImg);
                $("#mode_age").html(modAge);
                $("#mode_gamesPlayed").html(modGamesPlayed);
                $("#mode_gamesStarted").html(modGamesStarted);
                $("#mode_receptions").html(modReceptions);
                $("#mode_longestReception").html(modLongestReceptions);
                $("#mode_longestRunningAttempt").html(modLongestRushingAttempt);
                $("#mode_yardsSackeds").html(modYardSacked);
            }
        }
    });
    // $(".btn-reset").on("click", function() {
    //     $(this).attr("data-status", "active");
    //
    //     resetPlayer();
    // });
}

function populateNextBest(arrPlayers) {
    var newArr = [];
    for (var i = 0; i < arrPlayers.length; i++) {
        if (arrPlayers[i].status === "active") {
            newArr.push(arrPlayers[i]);
        }
    }
    //writing buttons to dom may not have click handlers
    var buttons = '<a href="#" class="btn btn-warning btn-xs" data-key="' + newArr[0].id + '">&#x2716</a> | <a href="#"class="btn btn-success btn-xs" data-key="' + newArr[0].id + '">&#x2713</a>';
    var playerImg = '<img class="headshot_large" src="assets/images/playerImgs/' + newArr[0].imgPath + '"  alt="...">';
    var playerName = '<strong>' + newArr[0].position + '</strong> <strong class="player-name"><a href="#" class = "btn-link" data-key= "'+newArr[0].id+'"data-toggle="modal" data-target=".modal">' + newArr[0].name + '</a></strong>';
    var age = '<strong>Age</strong>: ' + newArr[0].age + '<br><strong class="player-name"><a href="#" data-toggle="modal" data-target=".modal">' + newArr[0].name + '</a></strong>';
    var age = '<strong>Age</strong>: ' + newArr[0].age;
    var gamesPlayed = '<strong>Games Played</strong>: ' + newArr[0].gamesPlayed;
    var gamesStarted = '<strong>Games Started</strong>: ' + newArr[0].gamesStarted;
    var ptFantasy = '<strong> Potential Fantasy Points</strong>: ' + newArr[0].fantasyPoints;

    $("#btns").html(buttons);
    $("#img").html(playerImg);
    $("#name").html(playerName);
    $("#age").html(age);
    $("#gamesPlayed").html(gamesPlayed);
    $("#gamesStarted").html(gamesStarted);
    $("#fantasyPoints").html(ptFantasy);


};


// modal
//
// <h4 class="modal-title">
//     <p>
//     <span>QB &nbsp;&nbsp;</span>
// <strong class="player-name">{{player.name}}</strong>
// </p>
// </h4>
// </div>
// <div class="modal-body">
//     <div class="row">
//     <div class="col-xs-6 col-md-4">
//
//     <img class="img-responsive headshot_modal" src="assets/images/blankHeadshot.png" alt="...">
//
//     </div>
//     <div class="col-xs-6 col-md-8">
//     <p>
//     <strong>Age</strong>: 23 &nbsp;
// <strong>Rank</strong>: 217 &nbsp;
//
// </p>
// <p>
// <strong>Games Played</strong>: 217 &nbsp;
// </p>
// <p>
// <strong>Games Started</strong>: 217 &nbsp;
// </p>
// <p>
// <strong>Receptions</strong>: 23 &nbsp;
// </p>
// <p>
// <strong>Longest Reception</strong>: 217 &nbsp;
// </p>
// <p>
// <strong>Longest Running Attempt</strong>: 217 &nbsp;
// </p>
// <p>
// <strong>Yards Sacked</strong>: 31 &nbsp;
//
// </p>
//
// </div>
// </div>
// </div>