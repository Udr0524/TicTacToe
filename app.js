const winArr =[
  [1,2,3],  [4,5,6],  [7,8,9],
  [1,4,7],  [2,5,8],  [3,6,9],
  [1,5,9],  [3,5,7]
];

const playerArr=[];
const coopPlayerArr=[];
const computerArr=[];
var playerType=0;//0=x 1=O
var turnChoice;
var buttonsUSED=[0,0,0, 0,0,0, 0,0,0];
var buttonID=[".b1",".b2",".b3", ".b4",".b5",".b6", ".b7",".b8",".b9",];
var difficulty="Easy";
var randomNumber=0;
var gameOver=0;
var whosTurn=0;//0=player 1=comp

function unbindALL(){
  buttonID.forEach(function(e){
    $(e).unbind("click");
  });
}

function returnPlayerType(){
  if(playerType === 0){
    return "❌";
  }else{
    return "⭕";
  }
}

function returnComputerType(){
  if(playerType === 0){
    return "⭕";
  }else{
    return "❌";
  }
}

function youWinText(){
  console.log("game over ="+gameOver);
if( gameOver === 1){
      $(".text2").text(returnPlayerType()+" Wins");
      $(".text2").show();
      $(".text3").text("Press The Button Or Refresh The Page To Play Again :)");
      $(".text3").show();
}

    if(playerArr.length === 5 && gameOver === 3){
      $(".text2").text(returnPlayerType()+" Its a DRAW!"+returnComputerType());
      $(".text2").show();
      $(".text3").text("Press The Button Or Refresh The Page To Play Again :)");
      $(".text3").show();
    }
}

function randomNum(){
  randomNumber = Math.floor(Math.random()*9)+1;

  if( playerArr.includes(randomNumber)){
    randomNum();
  }
  else if(computerArr.includes(randomNumber)){
    randomNum();
  }
}

function coopTextTurn(){
  $(".text2").text(returnComputerType()+" Turn");$(".text2").show();
}

function playerTextTurn(){
  $(".text2").text(returnPlayerType()+" Turn");$(".text2").show();
}

function computerWinText(){

    $(".text2").text(returnComputerType()+" Wins");
    $(".text2").show();
    $(".text3").text("Press The Button Or Refresh The Page To Play Again :)");
    $(".text3").show();


  if(playerArr.length === 5 && gameOver === 3){
    $(".text2").text(returnPlayerType()+" Its a DRAW!"+returnComputerType());
    $(".text2").show();
    $(".text3").text("Press The Button Or Refresh The Page To Play Again :)");
    $(".text3").show();
  }

}

function randomNum(){
  randomNumber = Math.floor(Math.random()*9)+1;

  if( playerArr.includes(randomNumber)){
    randomNum();
  }
  else if(computerArr.includes(randomNumber)){
    randomNum();
  }
}

function doofusAI(){
  randomNum();

      switch (randomNumber) {
        case 1:$(".b1").text(returnComputerType());buttonsUSED[0]=1;computerArr.push(1);whoWon();playerTurn();break;
        case 2:$(".b2").text(returnComputerType());buttonsUSED[1]=1;computerArr.push(2);whoWon();playerTurn();break;
        case 3:$(".b3").text(returnComputerType());buttonsUSED[2]=1;computerArr.push(3);whoWon();playerTurn();break;
        case 4:$(".b4").text(returnComputerType());buttonsUSED[3]=1;computerArr.push(4);whoWon();playerTurn();break;
        case 5:$(".b5").text(returnComputerType());buttonsUSED[4]=1;computerArr.push(5);whoWon();playerTurn();break;
        case 6:$(".b6").text(returnComputerType());buttonsUSED[5]=1;computerArr.push(6);whoWon();playerTurn();break;
        case 7:$(".b7").text(returnComputerType());buttonsUSED[6]=1;computerArr.push(7);whoWon();playerTurn();break;
        case 8:$(".b8").text(returnComputerType());buttonsUSED[7]=1;computerArr.push(8);whoWon();playerTurn();break;
        case 9:$(".b9").text(returnComputerType());buttonsUSED[8]=1;computerArr.push(9);whoWon();playerTurn();break;

        default:

      }
}

function hardAI(){
  // winArr 1 [1,2,3]
   if(playerArr.includes(3) && playerArr.includes(2) && buttonsUSED[0] === 0){
      $(".b1").text(returnComputerType());buttonsUSED[0]=1;computerArr.push(1);whoWon();playerTurn();whosTurn=0;
  }

  // winArr 1 [1,2,3]
   else if(playerArr.includes(1) && playerArr.includes(3) && buttonsUSED[1] === 0){
      $(".b2").text(returnComputerType());buttonsUSED[1]=1;computerArr.push(2);whoWon();playerTurn();whosTurn=0;
  }

  // winArr 1 [1,2,3]
   else if(playerArr.includes(1) && playerArr.includes(2) && buttonsUSED[2] === 0){
      $(".b3").text(returnComputerType());buttonsUSED[2]=1;computerArr.push(3);whoWon();playerTurn();whosTurn=0;
  }

  // winArr 2 [4,5,6]
 else if(playerArr.includes(6) && playerArr.includes(5) && buttonsUSED[3] === 0){
      $(".b4").text(returnComputerType());buttonsUSED[3]=1;computerArr.push(4);whoWon();playerTurn();whosTurn=0;
  }

  // winArr 2 [4,5,6]
   else if(playerArr.includes(4) && playerArr.includes(6) && buttonsUSED[4] === 0){
      $(".b5").text(returnComputerType());buttonsUSED[4]=1;computerArr.push(5);whoWon();playerTurn();whosTurn=0;
  }

  // winArr 2 [4,5,6]
   else if(playerArr.includes(4) && playerArr.includes(5) && buttonsUSED[5] === 0){
      $(".b6").text(returnComputerType());buttonsUSED[5]=1;computerArr.push(6);whoWon();playerTurn();whosTurn=0;
  }

  // winArr 3 [7,8,9]
   else if(playerArr.includes(9) && playerArr.includes(8) && buttonsUSED[6] === 0){
      $(".b7").text(returnComputerType());buttonsUSED[6]=1;computerArr.push(7);whoWon();playerTurn();whosTurn=0;
  }

  // winArr 3 [7,8,9]
   else if(playerArr.includes(9) && playerArr.includes(7) && buttonsUSED[7] === 0){
      $(".b8").text(returnComputerType());buttonsUSED[7]=1;computerArr.push(8);whoWon();playerTurn();whosTurn=0;
  }

  // winArr 3 [7,8,9]
   else if(playerArr.includes(7) && playerArr.includes(8) && buttonsUSED[8] === 0){
      $(".b9").text(returnComputerType());buttonsUSED[8]=1;computerArr.push(9);whoWon();playerTurn();whosTurn=0;
  }

  // winArr 4 [1,4,7]
   else if(playerArr.includes(4) && playerArr.includes(7) && buttonsUSED[0] === 0){
      $(".b1").text(returnComputerType());buttonsUSED[0]=1;computerArr.push(1);whoWon();playerTurn();whosTurn=0;
  }

  // winArr 4 [1,4,7]
   else if(playerArr.includes(1) && playerArr.includes(7) && buttonsUSED[3] === 0){
      $(".b4").text(returnComputerType());buttonsUSED[3]=1;computerArr.push(4);whoWon();playerTurn();whosTurn=0;
  }

  // winArr 4 [1,4,7]
   else if(playerArr.includes(1) && playerArr.includes(4) && buttonsUSED[6] === 0){
      $(".b7").text(returnComputerType());buttonsUSED[6]=1;computerArr.push(7);whoWon();playerTurn();whosTurn=0;
  }

    // winArr 5 [2,5,8]
    else  if(playerArr.includes(5) && playerArr.includes(8) && buttonsUSED[1] === 0){
        $(".b2").text(returnComputerType());buttonsUSED[1]=1;computerArr.push(2);whoWon();playerTurn();whosTurn=0;
    }

    // winArr 5 [2,5,8]
     else if(playerArr.includes(2) && playerArr.includes(8) && buttonsUSED[4] === 0){
        $(".b5").text(returnComputerType());buttonsUSED[4]=1;computerArr.push(5);whoWon();playerTurn();whosTurn=0;
    }

    // winArr 5 [2,5,8]
     else if(playerArr.includes(2) && playerArr.includes(5) && buttonsUSED[7] === 0){
        $(".b8").text(returnComputerType());buttonsUSED[7]=1;computerArr.push(8);whoWon();playerTurn();whosTurn=0;
    }

    // winArr 6 [3,6,9]
     else if(playerArr.includes(6) && playerArr.includes(9) && buttonsUSED[2] === 0){
        $(".b3").text(returnComputerType());buttonsUSED[2]=1;computerArr.push(3);whoWon();playerTurn();whosTurn=0;
    }

    // winArr 6 [3,6,9]
     else if(playerArr.includes(3) && playerArr.includes(9) && buttonsUSED[5] === 0){
        $(".b6").text(returnComputerType());buttonsUSED[5]=1;computerArr.push(6);whoWon();playerTurn();whosTurn=0;
    }

    // winArr 6 [3,6,9]
     else if(playerArr.includes(3) && playerArr.includes(6) && buttonsUSED[8] === 0){
        $(".b9").text(returnComputerType());buttonsUSED[8]=1;computerArr.push(9);whoWon();playerTurn();whosTurn=0;
    }

    // winArr 7 [1,5,9]
     else if(playerArr.includes(5) && playerArr.includes(9) && buttonsUSED[0] === 0){
        $(".b1").text(returnComputerType());buttonsUSED[0]=1;computerArr.push(1);whoWon();playerTurn();whosTurn=0;
    }

    // winArr 7 [1,5,9]
     else if(playerArr.includes(1) && playerArr.includes(9) && buttonsUSED[4] === 0){
        $(".b5").text(returnComputerType());buttonsUSED[4]=1;computerArr.push(5);whoWon();playerTurn();whosTurn=0;
    }

    // winArr 7 [1,5,9]
     else if(playerArr.includes(1) && playerArr.includes(5) && buttonsUSED[8] === 0){
        $(".b9").text(returnComputerType());buttonsUSED[8]=1;computerArr.push(9);whoWon();playerTurn();whosTurn=0;
    }

    // winArr 8 [3,5,7]
     else if(playerArr.includes(5) && playerArr.includes(7) && buttonsUSED[2] === 0){
        $(".b3").text(returnComputerType());buttonsUSED[2]=1;computerArr.push(3);whoWon();playerTurn();whosTurn=0;
    }

    // winArr 8 [3,5,7]
     else if(playerArr.includes(3) && playerArr.includes(7) && buttonsUSED[4] === 0){
        $(".b5").text(returnComputerType());buttonsUSED[4]=1;computerArr.push(5);whoWon();playerTurn();whosTurn=0;
    }

    // winArr 8 [3,5,7]
     else if(playerArr.includes(3) && playerArr.includes(5) && buttonsUSED[6] === 0){
        $(".b7").text(returnComputerType());buttonsUSED[6]=1;computerArr.push(7);whoWon();playerTurn();whosTurn=0;
    }

    else if(whosTurn===1){
      doofusAI();
    }
}
function computerTurn(){
  console.log("cpu turn started");
////////////////////////////////////////////////////////////////////////////////////////////
//                                      EASY MODE AI
////////////////////////////////////////////////////////////////////////////////////////////
  if(difficulty === "Easy" && whosTurn===1){
        doofusAI();
        whosTurn=0;
        playerTextTurn();
  }
  ////////////////////////////////////////////////////////////////////////////////////////////
  //                                      Medium MODE AI
  ////////////////////////////////////////////////////////////////////////////////////////////

    if(difficulty === "Medium" && whosTurn === 1){

      // first turn
      if(playerArr.length === 1){
        doofusAI();
      }else{
        var mediumToHardRoll = Math.floor(Math.random()*2);
      }
      console.log("mediumToHardRoll ="+mediumToHardRoll);
        if(mediumToHardRoll === 0){
          // second turn
          if(playerArr.length > 1 && gameOver === 0){
              hardAI();

                  whosTurn=0;
          }
        }

        else if(mediumToHardRoll === 1 && whosTurn===1){
          doofusAI();
        }
        whosTurn=0;


    }
  ////////////////////////////////////////////////////////////////////////////////////////////
  //                                      HARD MODE AI
  ////////////////////////////////////////////////////////////////////////////////////////////
  if(difficulty === "Hard" && whosTurn === 1){
    console.log("calling hardmode ai");

    // first turn
    if(playerArr.length === 1){

          if(buttonsUSED[4]===0){
            $(".b5").text(returnComputerType());buttonsUSED[4]=1;computerArr.push(5);whoWon();playerTurn();whosTurn=0;
          }else{

              doofusAI();
              whosTurn=0;
          }
    }

        // second turn
        else if(playerArr.length > 1 && gameOver === 0){
              hardAI();
              whosTurn=0;
        }

  }
  ////////////////////////////////////////////////////////////////////////////////////////////
  //                                      Co OP MODE AI
  ////////////////////////////////////////////////////////////////////////////////////////////
  if(difficulty === "Co OP" && whosTurn === 1){
      coopPlayerTurn();
  }

}
////////////////////////////////////////////////////////////////////////////////////////////


function whoWon(){
  //player test if win
    if( playerArr.includes(winArr[0][0]) && playerArr.includes(winArr[0][1]) && playerArr.includes(winArr[0][2]) ){
      gameOver=1;youWinText();whosTurn=1;$("button.restartBTN").show();
    }

    else if( playerArr.includes(winArr[1][0]) && playerArr.includes(winArr[1][1]) && playerArr.includes(winArr[1][2]) ){
      gameOver=1;youWinText();whosTurn=1;$("button.restartBTN").show();
    }

    else if( playerArr.includes(winArr[2][0]) && playerArr.includes(winArr[2][1]) && playerArr.includes(winArr[2][2]) ){
      gameOver=1;youWinText();whosTurn=1;$("button.restartBTN").show();
    }

    else if( playerArr.includes(winArr[3][0]) && playerArr.includes(winArr[3][1]) && playerArr.includes(winArr[3][2]) ){
      gameOver=1;youWinText();whosTurn=1;$("button.restartBTN").show();
    }

    else if( playerArr.includes(winArr[4][0]) && playerArr.includes(winArr[4][1]) && playerArr.includes(winArr[4][2]) ){
      gameOver=1;youWinText();whosTurn=1;$("button.restartBTN").show();
    }

    else if( playerArr.includes(winArr[5][0]) && playerArr.includes(winArr[5][1]) && playerArr.includes(winArr[5][2]) ){
      gameOver=1;youWinText();whosTurn=1;$("button.restartBTN").show();
    }

    else if( playerArr.includes(winArr[6][0]) && playerArr.includes(winArr[6][1]) && playerArr.includes(winArr[6][2]) ){
      gameOver=1;youWinText();whosTurn=1;$("button.restartBTN").show();
    }

    else if( playerArr.includes(winArr[7][0]) && playerArr.includes(winArr[7][1]) && playerArr.includes(winArr[7][2]) ){
      gameOver=1;youWinText();whosTurn=1;$("button.restartBTN").show();
    }

    //computer test if win
    else if( computerArr.includes(winArr[0][0]) && computerArr.includes(winArr[0][1]) && computerArr.includes(winArr[0][2]) ){
      gameOver=1;computerWinText();unbindALL();$("button.restartBTN").show();
    }

    else if( computerArr.includes(winArr[1][0]) && computerArr.includes(winArr[1][1]) && computerArr.includes(winArr[1][2]) ){
      gameOver=1;computerWinText();unbindALL();$("button.restartBTN").show();
    }

    else if( computerArr.includes(winArr[2][0]) && computerArr.includes(winArr[2][1]) && computerArr.includes(winArr[2][2]) ){
      gameOver=1;computerWinText();unbindALL();$("button.restartBTN").show();
    }

    else if( computerArr.includes(winArr[3][0]) && computerArr.includes(winArr[3][1]) && computerArr.includes(winArr[3][2]) ){
      gameOver=1;computerWinText();unbindALL();$("button.restartBTN").show();
    }

    else if( computerArr.includes(winArr[4][0]) && computerArr.includes(winArr[4][1]) && computerArr.includes(winArr[4][2]) ){
      gameOver=1;computerWinText();unbindALL();$("button.restartBTN").show();
    }

    else if( computerArr.includes(winArr[5][0]) && computerArr.includes(winArr[5][1]) && computerArr.includes(winArr[5][2]) ){
      gameOver=1;computerWinText();unbindALL();$("button.restartBTN").show();
    }

    else if( computerArr.includes(winArr[6][0]) && computerArr.includes(winArr[6][1]) && computerArr.includes(winArr[6][2]) ){
      gameOver=1;computerWinText();unbindALL();$("button.restartBTN").show();
    }

    else if( computerArr.includes(winArr[7][0]) && computerArr.includes(winArr[7][1]) && computerArr.includes(winArr[7][2]) ){
      gameOver=1;computerWinText();unbindALL();$("button.restartBTN").show();
    }

    else if(playerArr.length === 5 && gameOver === 0){
      gameOver=3;youWinText();unbindALL();$("button.restartBTN").show();
    }
}

function turnOnAvailChoices(){

    if(buttonsUSED[0] === 0){
      $(buttonID[0]).on("click", function(e){

        unbindALL();
        $(e.currentTarget).text(returnPlayerType());
        buttonsUSED[0]=1;
        playerArr.push(1);
        whosTurn=1;
        coopTextTurn();
        whoWon();
        playerTextTurn()
        computerTurn();
      });
    }

    if(buttonsUSED[1] === 0){
      $(buttonID[1]).on("click", function(e){

        unbindALL();
        $(e.currentTarget).text(returnPlayerType());
        buttonsUSED[1]=1;
        playerArr.push(2);
        whosTurn=1;
        coopTextTurn();
        whoWon();
        computerTurn();
      });
    }

    if(buttonsUSED[2] === 0){
      $(buttonID[2]).on("click", function(e){

        unbindALL();
        $(e.currentTarget).text(returnPlayerType());
        buttonsUSED[2]=1;
        playerArr.push(3);
        whosTurn=1;
        coopTextTurn();
        whoWon();
        computerTurn();
      });
    }

    if(buttonsUSED[3] === 0){
      $(buttonID[3]).on("click", function(e){

        unbindALL();
        $(e.currentTarget).text(returnPlayerType());
        buttonsUSED[3]=1;
        playerArr.push(4);
        whosTurn=1;
        coopTextTurn();
        whoWon();
        computerTurn();
      });
    }

    if(buttonsUSED[4] === 0){
      $(buttonID[4]).on("click", function(e){

        unbindALL();
        $(e.currentTarget).text(returnPlayerType());
        buttonsUSED[4]=1;
        playerArr.push(5);
        whosTurn=1;
        coopTextTurn();
        whoWon();
        computerTurn();
      });
    }

    if(buttonsUSED[5] === 0){
      $(buttonID[5]).on("click", function(e){

        unbindALL();
        $(e.currentTarget).text(returnPlayerType());
        buttonsUSED[5]=1;
        playerArr.push(6);
        whosTurn=1;
        coopTextTurn();
        whoWon();
        computerTurn();
      });
    }

    if(buttonsUSED[6] === 0){
      $(buttonID[6]).on("click", function(e){

        unbindALL();
        $(e.currentTarget).text(returnPlayerType());
        buttonsUSED[6]=1;
        playerArr.push(7);
        whosTurn=1;
        coopTextTurn();
        whoWon();
        computerTurn();
      });
    }

    if(buttonsUSED[7] === 0){
      $(buttonID[7]).on("click", function(e){

        unbindALL();
        $(e.currentTarget).text(returnPlayerType());
        buttonsUSED[7]=1;
        playerArr.push(8);
        whosTurn=1;
        coopTextTurn();
        whoWon();
        computerTurn();
      });
    }

    if(buttonsUSED[8] === 0){
      $(buttonID[8]).on("click", function(e){

        unbindALL();
        $(e.currentTarget).text(returnPlayerType());
        buttonsUSED[8]=1;
        playerArr.push(9);
        whosTurn=1;
        coopTextTurn();
        whoWon();
        computerTurn();
      });
    }

}

function coopTurnOnAvailChoices(){

    if(buttonsUSED[0] === 0){
      $(buttonID[0]).on("click", function(e){

        unbindALL();
        $(e.currentTarget).text(returnComputerType());
        buttonsUSED[0]=1;
        coopPlayerArr.push(1);
        whosTurn=1;
        playerTextTurn();
        whoWon();
        playerTurn();
      });
    }

    if(buttonsUSED[1] === 0){
      $(buttonID[1]).on("click", function(e){

        unbindALL();
        $(e.currentTarget).text(returnComputerType());
        buttonsUSED[1]=1;
        coopPlayerArr.push(2);
        whosTurn=1;
        playerTextTurn();
        whoWon();
        playerTurn();
      });
    }

    if(buttonsUSED[2] === 0){
      $(buttonID[2]).on("click", function(e){

        unbindALL();
        $(e.currentTarget).text(returnComputerType());
        buttonsUSED[2]=1;
        coopPlayerArr.push(3);
        whosTurn=1;
        playerTextTurn();
        whoWon();
        playerTurn();
      });
    }

    if(buttonsUSED[3] === 0){
      $(buttonID[3]).on("click", function(e){

        unbindALL();
        $(e.currentTarget).text(returnComputerType());
        buttonsUSED[3]=1;
        coopPlayerArr.push(4);
        whosTurn=1;
        playerTextTurn();
        whoWon();
        playerTurn();
      });
    }

    if(buttonsUSED[4] === 0){
      $(buttonID[4]).on("click", function(e){

        unbindALL();
        $(e.currentTarget).text(returnComputerType());
        buttonsUSED[4]=1;
        coopPlayerArr.push(5);
        whosTurn=1;
        playerTextTurn();
        whoWon();
        playerTurn();
      });
    }

    if(buttonsUSED[5] === 0){
      $(buttonID[5]).on("click", function(e){

        unbindALL();
        $(e.currentTarget).text(returnComputerType());
        buttonsUSED[5]=1;
        coopPlayerArr.push(6);
        whosTurn=1;
        playerTextTurn();
        whoWon();
        playerTurn();
      });
    }

    if(buttonsUSED[6] === 0){
      $(buttonID[6]).on("click", function(e){

        unbindALL();
        $(e.currentTarget).text(returnComputerType());
        buttonsUSED[6]=1;
        coopPlayerArr.push(7);
        whosTurn=1;
        playerTextTurn();
        whoWon();
        playerTurn();
      });
    }

    if(buttonsUSED[7] === 0){
      $(buttonID[7]).on("click", function(e){

        unbindALL();
        $(e.currentTarget).text(returnComputerType());
        buttonsUSED[7]=1;
        coopPlayerArr.push(8);
        whosTurn=1;
        playerTextTurn();
        whoWon();
        playerTurn();
      });
    }

    if(buttonsUSED[8] === 0){
      $(buttonID[8]).on("click", function(e){

        unbindALL();
        $(e.currentTarget).text(returnComputerType());
        buttonsUSED[8]=1;
        coopPlayerArr.push(9);
        whosTurn=1;
        playerTextTurn();
        whoWon();
        playerTurn();
      });
    }

}



function startThis(){

  difficulty=window.localStorage.difficulty;
  $("button.info").text(difficulty);

    if(difficulty === undefined){
      difficulty="Easy";
    }




  $("button.restartBTN").on("click",function(e){
    window.location.reload();
  });
    $("button.restartBTN").hide();

    // easy
    $("button.eBTN").on("click",function(e){
      difficulty="Easy";
      $("button.info").text(difficulty);
      window.localStorage.setItem("difficulty","Easy")
    });

    //medium
    $("button.mBTN").on("click",function(e){
      difficulty="Medium";
      $("button.info").text(difficulty);
      window.localStorage.setItem("difficulty","Medium")
    });

    //hard
    $("button.hBTN").on("click",function(e){
      difficulty="Hard";
      $("button.info").text(difficulty);
      window.localStorage.setItem("difficulty","Hard")
    });

    //co op
    $("button.cBTN").on("click",function(e){
      difficulty="Co OP";
      $("button.info").text(difficulty);
      window.localStorage.setItem("difficulty","Co OP")
    });

    $(".pb1").on("click",function(e){
      $(".pb2").unbind("click");
      $(".pb1").unbind("click");
      playerType=0;
      hideStuffNStart();
    });

    $(".pb2").on("click",function(e){
      $(".pb2").unbind("click");
      $(".pb1").unbind("click");
      playerType=1;
      hideStuffNStart();
    });

}

function hideStuffNStart(){
  $("#dropdownMenuButton").hide();
  $(".text1").hide();
  $(".pb1").hide();
  $(".pb2").hide();
  playerTurn();
  playerTextTurn();
}

function playerTurn(){
  console.log("player turn started");
  if(gameOver === 0){
    turnOnAvailChoices();
  }
}

function coopPlayerTurn(){
  console.log("player2 turn started");
  if(gameOver === 0){
    coopTurnOnAvailChoices();
  }
}
startThis();
