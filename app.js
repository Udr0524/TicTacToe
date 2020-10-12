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
var randomNumber2;

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
      $("button.infoPos.btn.btn-info.info").css("top","-183px");
      $("h3.text1.text2").css("top","460px").css("left", "-40px");
      $("h3.text1.text3").css("top","470px").css("left","20px").css("width","450px");
      $(".text2").text(returnPlayerType()+" Wins");
      $(".text2").show();
      $(".text3").text("Press The Button Or Refresh The Page To Play Again :)");
      $(".text3").show();
}

    if(gameOver === 3){
      $("button.infoPos.btn.btn-info.info").css("top","-183px");
      $("h3.text1.text2").css("top","600px").css("left", "100px");
      $("h3.text1.text3").css("top","470px").css("left","20px").css("width","450px");
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
    $("button.infoPos.btn.btn-info.info").css("top","-183px");
    $("h3.text1.text2").css("top","460px").css("left", "-40px");
    $("h3.text1.text3").css("top","470px").css("left","20px").css("width","450px");
    $(".text2").text(returnComputerType()+" Wins");
    $(".text2").show();
    $(".text3").text("Press The Button Or Refresh The Page To Play Again :)");
    $(".text3").show();


  if(playerArr.length === 5 && gameOver === 3){
    $("button.infoPos.btn.btn-info.info").css("top","-183px");
    $("h3.text1.text2").css("top","600px").css("left", "100px");
    $("h3.text1.text3").css("top","470px").css("left","20px").css("width","450px");
    $(".text2").text(returnPlayerType()+" Its a DRAW!"+returnComputerType());
    $(".text2").show();
    $(".text3").text("Press The Button Or Refresh The Page To Play Again :)");
    $(".text3").show();
  }

}

function randomNum(){
  randomNumber = Math.floor(Math.random()*9)+1;

  if( playerArr.includes(randomNumber) && playerArr.length < 5){
    randomNum();
  }
  else if(computerArr.includes(randomNumber) && computerArr.length < 4){
    randomNum();
  }
}

function doofusAI(){

        if(gameOver === 0){
          randomNum();
                switch (randomNumber) {
                  case 1:$(".b1").text(returnComputerType());buttonsUSED[0]=1;computerArr.push(1);whosTurn=0;whoWon();playerTurn();break;
                  case 2:$(".b2").text(returnComputerType());buttonsUSED[1]=1;computerArr.push(2);whosTurn=0;whoWon();playerTurn();break;
                  case 3:$(".b3").text(returnComputerType());buttonsUSED[2]=1;computerArr.push(3);whosTurn=0;whoWon();playerTurn();break;
                  case 4:$(".b4").text(returnComputerType());buttonsUSED[3]=1;computerArr.push(4);whosTurn=0;whoWon();playerTurn();break;
                  case 5:$(".b5").text(returnComputerType());buttonsUSED[4]=1;computerArr.push(5);whosTurn=0;whoWon();playerTurn();break;
                  case 6:$(".b6").text(returnComputerType());buttonsUSED[5]=1;computerArr.push(6);whosTurn=0;whoWon();playerTurn();break;
                  case 7:$(".b7").text(returnComputerType());buttonsUSED[6]=1;computerArr.push(7);whosTurn=0;whoWon();playerTurn();break;
                  case 8:$(".b8").text(returnComputerType());buttonsUSED[7]=1;computerArr.push(8);whosTurn=0;whoWon();playerTurn();break;
                  case 9:$(".b9").text(returnComputerType());buttonsUSED[8]=1;computerArr.push(9);whosTurn=0;whoWon();playerTurn();break;
                  default:
                }
        }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                        hard ai
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function hardAI(){
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////// Turn 3 /////////////////////////////////////////
var hardAiTesterT4 = [
  [3,4,5,8,1,6,7,1,2], [3,4,5,9,1,6,7,1,2], [1,3,8,9,2,5,7,5,6], [3,4,8,9,5,6,7,1,2], [1,3,6,8,2,5,7,8,9],
  [2,3,4,9,1,5,7,5,6], [2,3,4,9,1,5,6,6,7], [3,5,6,8,1,2,7,3,4], [5,6,7,9,1,3,4,7,8], [1,3,4,6,5,7,9,7,8],
  [3,4,5,9,1,2,7,5,6], [2,5,6,9,1,3,8,3,4], [1,6,7,8,3,5,9,3,4], [2,3,5,9,1,7,8,3,4], [2,3,4,5,1,7,8,8,9],
  [1,3,4,9,5,6,7,1,2], [1,3,4,8,1,5,7,7,8], [1,6,7,9,3,4,5,7,8], [2,4,8,9,1,5,7,2,3], [2,4,7,9,3,5,8,0,1],
  [2,4,7,9,1,5,8,2,3], [3,4,5,8,1,2,7,5,6], [3,4,7,9,1,5,6,7,8], [1,3,8,9,5,6,7,3,4], [3,4,8,9,1,5,6,6,7],
  [2,4,6,9,1,5,7,2,3], [1,4,6,8,3,5,9,6,7], [1,2,6,8,3,5,9,6,7], [2,4,6,7,1,3,5,8,9], [1,2,6,7,4,5,9,2,3],
  [3,4,6,7,1,5,8,8,9], [1,3,6,8,2,5,9,6,7], [1,3,4,8,5,7,9,1,2], [1,3,4,8,2,5,7,8,9], [1,3,4,8,2,5,9,6,7],
  [3,4,6,8,5,7,9,0,1], [2,3,4,8,5,7,9,0,1], [2,6,7,9,1,5,8,2,3], [2,3,7,9,1,5,8,5,6], [1,6,7,8,3,4,5,8,9],
  [1,2,6,7,3,4,5,8,9], [1,3,7,8,2,5,9,3,4], [2,6,7,9,3,5,8,0,1], [1,6,7,8,4,5,9,2,3], [2,3,8,9,5,6,7,3,4],
  [4,6,7,9,1,5,8,2,3], [2,6,7,9,1,3,5,7,8], [2,6,7,8,1,3,5,8,9], [3,5,8,9,1,6,7,1,2], [3,5,8,9,1,2,7,3,4],
  [4,5,7,8,1,3,6,1,2], [4,5,7,9,1,3,6,1,2], [2,4,5,7,1,3,6,7,8], [2,3,5,6,1,7,8,3,4], [2,3,5,9,1,6,8,6,7],
  [2,5,7,9,1,6,8,2,3], [2,5,7,9,1,3,8,5,6], [5,6,7,9,1,3,8,1,2], [4,5,7,9,1,3,8,1,2], [2,3,5,9,1,6,7,7,8],
  [2,4,5,7,1,6,8,2,3], [2,5,6,7,1,3,8,3,4], [4,5,7,8,1,2,6,2,3], [4,6,7,9,3,5,8,1,2], [1,2,7,8,3,4,5,5,6],
  [5,6,7,8,1,3,4,1,2], [2,4,5,9,1,6,8,2,3], [2,3,8,9,1,5,6,3,4], [2,6,7,8,3,5,9,0,1], [1,2,7,8,4,5,9,5,6],
  [1,2,7,9,3,4,5,5,6], [1,3,6,7,2,5,9,7,8], [1,3,4,6,2,5,9,7,8], [3,4,7,9,1,5,8,1,2], [2,3,6,7,1,5,8,8,9],
  [2,3,7,9,1,5,6,3,4], [1,6,7,9,3,5,8,1,2], [1,2,7,8,3,5,9,3,4], [2,3,4,5,1,6,7,7,8], [2,3,4,7,1,5,8,8,9],
  [2,3,4,6,5,7,9,0,1], [1,4,8,9,5,6,7,2,3], [1,2,4,9,5,6,7,2,3], [2,4,7,8,3,5,9,0,1], [1,3,6,7,4,5,9,1,2],
  [1,3,4,6,2,5,7,7,8], [5,6,8,9,1,3,4,6,7], [2,5,6,9,1,3,4,7,8], [4,5,8,9,1,3,6,6,7], [2,4,5,9,1,3,8,5,6],
  [2,3,4,5,1,6,8,6,7], [2,4,5,9,1,3,6,7,8], [2,5,6,9,1,4,8,2,3], [2,3,5,6,1,4,8,6,7], [2,5,6,7,1,4,8,2,3],
  [2,4,5,7,1,3,8,5,6], []
];


  for(var i=0;i<hardAiTesterT4.length;i++){
      if(playerArr.includes(hardAiTesterT4[i][0]) && playerArr.includes(hardAiTesterT4[i][1]) && playerArr.includes(hardAiTesterT4[i][2]) && playerArr.includes(hardAiTesterT4[i][3]) && computerArr.includes(hardAiTesterT4[i][4]) && computerArr.includes(hardAiTesterT4[i][5]) && computerArr.includes(hardAiTesterT4[i][6]) && buttonsUSED[hardAiTesterT4[i][7]] === 0 && whosTurn === 1 && playerArr.length === 4){
        var hardAiTemp = ".b"+hardAiTesterT4[i][8];
         $(hardAiTemp).text(returnComputerType());buttonsUSED[hardAiTesterT4[i][7]]=1;computerArr.push(hardAiTesterT4[i][8]);whosTurn=0;
         whoWon();
         playerTurn();
         console.log("t4 victory if to place triggered ,placing "+hardAiTesterT4[i][8]+" , and in array part "+i);
     }
  }


var hardAiTesterT3 = [
  [3,5,9,1,7,3,4], [5,7,9,1,3,1,2], [2,4,5,1,8,5,6], [2,4,5,1,6,7,8], [2,5,9,1,8,5,6], [4,5,9,1,6,2,3],
  [1,3,9,5,6,3,4], [3,7,9,5,6,3,4], [1,3,9,2,5,7,8], [1,7,9,5,8,1,2], [1,7,9,4,5,5,6], [3,6,7,5,9,0,1],
  [1,7,8,5,9,3,4], [1,8,9,5,7,2,3], [3,4,7,1,5,8,9], [1,2,9,3,5,6,7], [1,3,4,5,7,1,2], [2,3,9,1,5,5,6],
  [6,7,9,3,5,7,8], [1,4,9,5,6,6,7], [1,7,9,5,6,3,4], [1,3,7,4,5,5,6], [1,3,7,2,5,7,8], [3,7,9,5,8,1,2],
  [2,4,9,1,5,6,7], [2,6,7,3,5,0,1], [1,6,8,5,9,2,3], [3,4,8,5,7,8,9], [2,6,8,3,5,6,7], [4,6,8,5,9,0,1],
  [2,6,8,5,9,0,1], [4,6,8,5,7,2,3], [2,4,8,1,5,8,9], [2,4,8,5,7,2,3], [2,4,6,1,5,8,9], [2,4,6,3,5,6,7],
  [1,3,8,5,7,1,2], [1,3,8,2,5,6,7], [1,3,8,5,9,1,2], [3,4,9,5,6,0,1], [3,4,9,1,5,5,6], [2,7,9,5,8,0,1],
  [2,7,9,1,5,7,8], [2,7,9,3,5,7,8], [3,4,9,5,7,5,6], [1,6,7,4,5,2,3], [1,6,7,5,9,3,4], [1,6,7,3,5,3,4],
  [4,6,7,1,5,8,9], [1,4,6,5,7,2,3], [1,2,8,3,5,6,7], [1,2,8,5,7,2,3], [2,3,8,1,5,8,9], [2,3,8,5,9,0,1],
  [2,7,8,3,5,8,9], [3,4,6,5,7,8,9], [3,4,6,5,9,0,1], [4,6,9,3,5,6,7], [4,6,9,5,7,2,3], [2,8,9,5,7,2,3],
  [2,8,9,3,5,6,7], [2,7,8,5,9,0,1], [2,7,8,1,5,8,9], [4,5,8,1,6,1,2], [5,6,8,1,4,6,7], [5,6,8,1,2,2,3],
  [2,5,6,1,8,3,4], [2,5,6,1,4,6,7], [2,3,6,5,9,0,1], [2,3,6,1,5,8,9], [6,8,9,3,5,6,7], [6,8,9,5,7,2,3],
  [4,7,8,5,9,0,1], [4,7,8,1,5,8,9], [1,2,4,5,7,2,3], [1,2,4,3,5,6,7], [5,6,9,1,4,6,7], [5,6,9,1,2,2,3],
  [4,5,7,1,3,1,2], [4,5,7,1,6,2,3], [3,5,6,1,4,6,7], [3,5,6,1,7,3,4], [5,6,7,1,4,2,3], [5,6,7,1,3,1,2],
  [4,5,9,1,2,2,3], [5,7,9,1,2,2,3], [2,5,7,1,8,2,3], [2,5,7,1,3,7,8], [3,6,8,5,9,0,1], [4,8,9,5,7,2,3],
  [2,4,7,1,5,8,9], [1,2,6,3,5,6,7], [2,6,9,3,5,6,7], [2,3,4,1,5,8,9], [1,4,8,5,7,2,3], [6,7,8,5,9,0,1],
  [2,4,6,5,7,2,3], [1,3,6,2,5,7,8], [1,3,6,5,9,1,2], [3,8,9,5,7,5,6], [3,8,9,5,6,3,4], [4,7,9,1,5,7,8],
  [4,7,9,5,8,1,2], [1,2,7,3,5,3,4], [1,2,7,4,5,5,6], [1,6,8,3,5,6,7], [1,6,8,5,7,2,3], [3,4,8,1,5,8,9],
  [3,4,8,5,9,0,1], [2,4,9,3,5,6,7], [2,4,9,5,7,2,3], [2,6,7,5,9,0,1], [2,6,7,1,5,8,9], [1,3,7,5,8,1,2],
  [3,5,8,1,7,3,4], [3,5,8,1,2,6,7], [3,4,5,1,6,6,7], [3,4,5,1,7,5,6], [1,3,4,2,5,7,8], [3,4,6,1,5,8,9],
  [4,5,8,1,2,2,3], [3,5,9,1,2,6,7], [5,2,3,1,8,6,7], [2,3,7,5,8,0,1], [1,6,9,3,5,6,7], [2,3,7,1,5,8,9],
  [1,4,9,5,7,2,3], [3,7,8,5,9,0,1], [2,3,5,1,7,7,8], [6,7,9,5,8,1,2], [1,2,9,5,6,3,4], [1,8,9,5,6,3,4],
  [3,6,7,5,8,1,2], [3,4,7,5,8,1,2], [2,4,8,3,5,6,7], [4,6,7,5,9,0,1], [5,6,9,1,3,1,2], [4,5,9,1,3,1,2],
  [5,8,9,1,3,1,2], [2,5,9,1,3,7,8], []
];


  for(var i=0;i<hardAiTesterT3.length;i++){
      if(playerArr.includes(hardAiTesterT3[i][0]) && playerArr.includes(hardAiTesterT3[i][1]) && playerArr.includes(hardAiTesterT3[i][2]) && computerArr.includes(hardAiTesterT3[i][3]) && computerArr.includes(hardAiTesterT3[i][4]) && buttonsUSED[hardAiTesterT3[i][5]] === 0 && whosTurn === 1 && playerArr.length === 3){
        var hardAiTemp = ".b"+hardAiTesterT3[i][6];
         $(hardAiTemp).text(returnComputerType());buttonsUSED[hardAiTesterT3[i][5]]=1;computerArr.push(hardAiTesterT3[i][6]);whosTurn=0;
         whoWon();
         playerTurn();
         console.log("t3 victory if to place triggered and placed "+hardAiTesterT3[i][6]+" , and in array part "+i);
     }
  }
///////////////////////////////////////// Turn 2 /////////////////////////////////////////

  var hardAiTesterT2 = [
    //computer turn 2
    [3,2,0,1], [1,3,1,2], [1,2,2,3], [5,4,3,4], [4,6,4,5],
    [4,5,5,6], [9,8,6,7], [9,7,7,8], [7,8,8,9], [4,7,0,1],
    [1,7,3,4], [1,4,6,7], [5,8,1,2], [2,8,4,5], [2,5,7,8],
    [6,9,2,3], [3,9,5,6], [3,6,8,9], [5,9,0,1], [1,9,4,5],
    [1,5,8,9], [5,7,2,3], [3,7,4,5], [3,5,6,7], [5,6,3,4],
    [5,9,2,3], [2,4,0,1], [2,6,2,3], [6,8,8,9], [4,8,6,7],
    [2,8,2,3], [3,7,7,8], [4,6,6,7], [1,9,5,6], [3,4,0,1],
    [4,9,6,7], [2,7,0,1], [2,9,2,3], [6,1,2,3], [6,7,8,9],
    [8,3,8,9], [8,1,6,7], []
  ];

    for(var i=0;i<hardAiTesterT2.length;i++){
        if(playerArr.includes(hardAiTesterT2[i][0]) && playerArr.includes(hardAiTesterT2[i][1]) && buttonsUSED[hardAiTesterT2[i][2]] === 0 && whosTurn === 1 && playerArr.length === 2){
          var hardAiTemp = ".b"+hardAiTesterT2[i][3];
           $(hardAiTemp).text(returnComputerType());buttonsUSED[hardAiTesterT2[i][2]]=1;computerArr.push(hardAiTesterT2[i][3]);whosTurn=0;
           whoWon();
           playerTurn();
       }
    }
///////////////////////////////////////// Turn 1 /////////////////////////////////////////
    if(playerArr.length === 1 && buttonsUSED[4] === 0 && whosTurn === 1){
      $(".b5").text(returnComputerType());buttonsUSED[4]=1;computerArr.push(5);whoWon();playerTurn();
      whosTurn=0;
    }

    if(playerArr.length === 1 && playerArr[0] === 5 && whosTurn === 1){
      $(".b1").text(returnComputerType());buttonsUSED[0]=1;computerArr.push(1);whoWon();playerTurn();
      whosTurn=0;
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function computerTurn(){
////////////////////////////////////////////////////////////////////////////////////////////
//                                      EASY MODE AI
////////////////////////////////////////////////////////////////////////////////////////////
  if(difficulty === "Easy" && whosTurn===1 && gameOver === 0){
        doofusAI();
  }
  ////////////////////////////////////////////////////////////////////////////////////////////
  //                                      Medium MODE AI
  ////////////////////////////////////////////////////////////////////////////////////////////

    if(difficulty === "Medium" && whosTurn === 1 && gameOver === 0){

      var mediumRoll = Math.floor(Math.random()*2)+1;

            if(mediumRoll === 1){
              hardAI();
            }

            if(whosTurn === 1){
              doofusAI();
            }

    }
  ////////////////////////////////////////////////////////////////////////////////////////////
  //                                      HARD MODE AI
  ////////////////////////////////////////////////////////////////////////////////////////////
  if(difficulty === "Hard" && whosTurn === 1 && gameOver === 0){
    var mediumRoll = Math.floor(Math.random()*10)+1;

          if(mediumRoll <= 7){
            hardAI();
          }

          if(whosTurn === 1){
            doofusAI();
          }
  }
  ////////////////////////////////////////////////////////////////////////////////////////////
  //                                      Impossible MODE AI
  ////////////////////////////////////////////////////////////////////////////////////////////
  if(difficulty === "Impossible" && whosTurn === 1 && gameOver === 0){
      hardAI();
  }
  ////////////////////////////////////////////////////////////////////////////////////////////
  //                                      Co OP MODE AI
  ////////////////////////////////////////////////////////////////////////////////////////////
  if(difficulty === "Co OP" && whosTurn === 1 && gameOver === 0){
      coopPlayerTurn();
  }
////////////////////////////////////////////////////////////////////////////////////////////
}
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
function whoWon(){

    //player test if win
    for(var i=0;i<winArr.length;i++){
      if( playerArr.includes(winArr[i][0]) && playerArr.includes(winArr[i][1]) && playerArr.includes(winArr[i][2]) && gameOver === 0){
        gameOver=1;var cpuNon="win";
      }
    }

    //computer test if win
    for(var i=0;i<winArr.length;i++){
      if( computerArr.includes(winArr[i][0]) && computerArr.includes(winArr[i][1]) && computerArr.includes(winArr[i][2]) && gameOver === 0){
        gameOver=1;var cpu="win";
      }
    }

    //test if coop player won
    for(var i=0;i<winArr.length;i++){
      if( coopPlayerArr.includes(winArr[i][0]) && coopPlayerArr.includes(winArr[i][1]) && coopPlayerArr.includes(winArr[i][2]) && gameOver === 0){
        gameOver=1;var cpu="win";
      }
    }

    if(cpuNon === "win"){youWinText();whosTurn=1;$("button.restartBTN").show();}
    if(cpu === "win"){computerWinText();unbindALL();$("button.restartBTN").show();}


    if(playerArr.length === 5 && computerArr.length === 4 && gameOver === 0){
      gameOver=3;youWinText();unbindALL();$("button.restartBTN").show();
    }
}

function tOAC(){
  whosTurn=1;
  coopTextTurn();
  whoWon();
  computerTurn();
}

function turnOnAvailChoices(){
  if(gameOver === 0){
    if(buttonsUSED[0] === 0){
      $(buttonID[0]).on("click", function(e){
        unbindALL();
        $(e.currentTarget).text(returnPlayerType());
        buttonsUSED[0]=1;
        playerArr.push(1);
        tOAC();
      });
    }

    if(buttonsUSED[1] === 0){
      $(buttonID[1]).on("click", function(e){
        unbindALL();
        $(e.currentTarget).text(returnPlayerType());
        buttonsUSED[1]=1;
        playerArr.push(2);
        tOAC();
      });
    }

    if(buttonsUSED[2] === 0){
      $(buttonID[2]).on("click", function(e){
        unbindALL();
        $(e.currentTarget).text(returnPlayerType());
        buttonsUSED[2]=1;
        playerArr.push(3);
        tOAC();
      });
    }

    if(buttonsUSED[3] === 0){
      $(buttonID[3]).on("click", function(e){
        unbindALL();
        $(e.currentTarget).text(returnPlayerType());
        buttonsUSED[3]=1;
        playerArr.push(4);
        tOAC();
      });
    }

    if(buttonsUSED[4] === 0){
      $(buttonID[4]).on("click", function(e){
        unbindALL();
        $(e.currentTarget).text(returnPlayerType());
        buttonsUSED[4]=1;
        playerArr.push(5);
        tOAC();
      });
    }

    if(buttonsUSED[5] === 0){
      $(buttonID[5]).on("click", function(e){
        unbindALL();
        $(e.currentTarget).text(returnPlayerType());
        buttonsUSED[5]=1;
        playerArr.push(6);
        tOAC();
      });
    }

    if(buttonsUSED[6] === 0){
      $(buttonID[6]).on("click", function(e){
        unbindALL();
        $(e.currentTarget).text(returnPlayerType());
        buttonsUSED[6]=1;
        playerArr.push(7);
        tOAC();
      });
    }

    if(buttonsUSED[7] === 0){
      $(buttonID[7]).on("click", function(e){
        unbindALL();
        $(e.currentTarget).text(returnPlayerType());
        buttonsUSED[7]=1;
        playerArr.push(8);
        tOAC();
      });
    }

    if(buttonsUSED[8] === 0){
      $(buttonID[8]).on("click", function(e){
        unbindALL();
        $(e.currentTarget).text(returnPlayerType());
        buttonsUSED[8]=1;
        playerArr.push(9);
        tOAC();
      });
    }

  }

}

function coopTOAC(){
  whosTurn=1;
  playerTextTurn();
  whoWon();
  playerTurn();
}

function coopTurnOnAvailChoices(){
      if(gameOver === 0){
        if(buttonsUSED[0] === 0){
          $(buttonID[0]).on("click", function(e){
            unbindALL();
            $(e.currentTarget).text(returnComputerType());
            buttonsUSED[0]=1;
            coopPlayerArr.push(1);
            coopTOAC();
          });
        }

        if(buttonsUSED[1] === 0){
          $(buttonID[1]).on("click", function(e){
            unbindALL();
            $(e.currentTarget).text(returnComputerType());
            buttonsUSED[1]=1;
            coopPlayerArr.push(2);
            coopTOAC();
          });
        }

        if(buttonsUSED[2] === 0){
          $(buttonID[2]).on("click", function(e){
            unbindALL();
            $(e.currentTarget).text(returnComputerType());
            buttonsUSED[2]=1;
            coopPlayerArr.push(3);
            coopTOAC();
          });
        }

        if(buttonsUSED[3] === 0){
          $(buttonID[3]).on("click", function(e){
            unbindALL();
            $(e.currentTarget).text(returnComputerType());
            buttonsUSED[3]=1;
            coopPlayerArr.push(4);
            coopTOAC();
          });
        }

        if(buttonsUSED[4] === 0){
          $(buttonID[4]).on("click", function(e){
            unbindALL();
            $(e.currentTarget).text(returnComputerType());
            buttonsUSED[4]=1;
            coopPlayerArr.push(5);
            coopTOAC();
          });
        }

        if(buttonsUSED[5] === 0){
          $(buttonID[5]).on("click", function(e){
            unbindALL();
            $(e.currentTarget).text(returnComputerType());
            buttonsUSED[5]=1;
            coopPlayerArr.push(6);
            coopTOAC();
          });
        }

        if(buttonsUSED[6] === 0){
          $(buttonID[6]).on("click", function(e){
            unbindALL();
            $(e.currentTarget).text(returnComputerType());
            buttonsUSED[6]=1;
            coopPlayerArr.push(7);
            coopTOAC();
          });
        }

        if(buttonsUSED[7] === 0){
          $(buttonID[7]).on("click", function(e){
            unbindALL();
            $(e.currentTarget).text(returnComputerType());
            buttonsUSED[7]=1;
            coopPlayerArr.push(8);
            coopTOAC();
          });
        }

        if(buttonsUSED[8] === 0){
          $(buttonID[8]).on("click", function(e){
            unbindALL();
            $(e.currentTarget).text(returnComputerType());
            buttonsUSED[8]=1;
            coopPlayerArr.push(9);
            coopTOAC();
          });
        }
      }
}

function startThis(){
  $(".text1").css("top", "400px");

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

    //hard
    $("button.iBTN").on("click",function(e){
      difficulty="Impossible";
      $("button.info").text(difficulty);
      window.localStorage.setItem("difficulty","Impossible")
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
  $("button.infoPos.btn.btn-info.info").css("top","-109px");
  $(".text1").css("top", "460px");
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
