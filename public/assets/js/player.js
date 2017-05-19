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
                var tableName = $('<td><a href="#" class="btn btn-link btn-xs" data-toggle="modal" data-target=".modal">'+ apiInfo[i].name + '</a></td>');
                var tableScore = $("<td>" + apiInfo[i].fantasyPoints + "</td>");
                tableRow.append(tablePicture,tablePosition,tableName,tableScore);
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

    // $(".btn-reset").on("click", function() {
    //     $(this).attr("data-status", "active");
    //
    //     resetPlayer();
    // });
}

function populateNextBest(arrPlayers){
    console.log(arrPlayers);
    var newArr = [];
    for(var i = 0; i < arrPlayers; i++){
        if(arrPlayers[i].status === "active"){
            newArr.push(arrPlayers[i]);
        }
    }

    var buttons = '<a href="#" class="btn btn-warning btn-xs" data-key="'+ newArr[0].id +'">&#x2716</a> | <a href="#"class="btn btn-success btn-xs" data-key="{{player.0.id}}">&#x2713</a>';
    var playerImg = '<img class="headshot_large" src="assets/images/playerImgs/'+ newArr[0].imgPath +'"  alt="...">';
    var playerName = '<strong>'+ newArr[0].position +'</strong>';
    var age = '<strong>Age</strong>: '+ newArr[0].age+'<br><strong class="player-name"><a href="#" data-toggle="modal" data-target=".modal">'+ newArr[0].name +'</a></strong>';
    var age = '<strong>Age</strong>: '+ newArr[0].age;
    var gamesPlayed = '<strong>Games Played</strong>: '+newArr[0].gamesPlayed;
    var gamesStarted = '<strong>Games Started</strong>: '+ newArr[0].gamesStarted;
    var ptFantasy = '<strong> Potential Fantasy Points</strong>: '+ newArr[0].fantasyPoints;

    $("#btns").append(buttons);
    $("#img").append(playerImg);
    $("#name").append(playerName);
    $("#age").append(age);
    $("#gamesPlayed").append(gamesPlayed);
    $("#gamesStarted").append(gamesStarted);
    $("#fantasyPoints").append(ptFantasy);


};

//
// <div class="col-xs-5">
//
//     <img class="headshot_large" src="assets/images/playerImgs/{{player.0.imgPath}}"  alt="...">
//
//     </div>
//     <div class="col-xs-7">
//     <a href="#" class="btn btn-warning btn-xs" data-key="{{player.0.id}}">&#x2716</a> | <a href="#"
// class="btn btn-success btn-xs" data-key="{{player.0.id}}">&#x2713</a>
//
// <p>
// <strong>{{player.0.position}} &nbsp;&nbsp;</strong>
// <strong class="player-name"><a href="#" data-toggle="modal"
// data-target=".modal">{{player.0.name}}</a></strong>
// </p>
//
// <p>
// <strong>Age</strong>: {{player.0.age}} &nbsp;
//
//
// </p>
//
// <p>
// <strong>Games Played</strong>: {{player.0.gamesPlayed}} &nbsp;
// </p>
// <p>
// <strong>Games Started</strong>: {{player.0.gamesStarted}} &nbsp;
// </p>
// <p>
// <strong> Potential Fantasy Points</strong>: {{player.0.fantasyPoints}} &nbsp;
// </p>
// </div>

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