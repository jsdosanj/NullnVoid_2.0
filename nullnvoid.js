function inputWin(word) {
  $(".input-screen").html("<p style = 'order: 3'> &gt; " + word + "</p>")
  $(".input-screen").append("<p style = 'order:2'> &gt; Exact Match!</p>");
  $(".input-screen").append("<p style = 'order :1'> &gt; Please wait while system is accessed.</p>");
  $(".input-screen").append("<p id = 'dotting-win'></p>");
} 
function amtOfRightPlaces(word) {
	var resultantAmount = 0;
	var comparisonWord = correct_word.split("");
	word = word.split("");
	for (var x = 0;x<=word.length-1;x++) {
		if (word[x] == comparisonWord[x]) {
			resultantAmount++;
		}
	}
	return resultantAmount;
	} 
function dotsForfill (wordLength) {
  var l = "•";
  var res = "";
  for (var x = 0;x<=wordLength.length -1;x++) {
    res += l + " ";
  }
  return res;
}
  var verticalAlign = 1000;
$(".hacking-screen").on("click","#word",function() {
  if ($(this).text() == correct_word) { //if the player chose the correct word
    $("#pg")[0].play();
    inputWin($(this).text() );
    var dotts = "•",
        readings = "&gt; ";
    var goToWinScreen = setInterval(function() {
      readings += dotts.charAt(0);
      $("#dotting-win").html(readings);
      if (readings.length >=11) {
        clearInterval(goToWinScreen);
        $(".black-computer-framing").css("display","none");
        $(".win-screen").css("display","block");
      }
    },500);
  }
  else {//otherwise the player must have choosen an incorrect word
    $("#pb")[0].play();
    tries--;
    if (tries !== 0) {
      (function changeTries() {
      $(".title-screen").html("<p class = 'text-center' id = 'title'>NULL N VOID  (TM) TERMINAL</p>")//title-reading
      $(".title-screen").append("<p id = 'enter-password'>ENTER PASSWORD :</p>"); //enterpassword
      $(".title-screen").append("<p id = 'password-attempts'>Attempts remaining --> "+tries+ " " + dots(tries) +"</p><br>");  
      })();
      //Attempts remaining --> " + tries + " "+ dots(tries)
      (function inputChances(inputtedWord) {
        $(".input-screen").append("<p style = 'order:" + verticalAlign + "'>&gt; " + inputtedWord + "</p>");
        $(".input-screen").append("<p style = 'order:" + verticalAlign + "'>&gt; Entry Denied.  "+ amtOfRightPlaces( inputtedWord ) +"/"+correct_word.length+ "  correct.</p>");
      })( $(this).text() );
    }
    else {
      console.log(correct_word);
      $(".black-computer-framing").css("display","none");
      $(".failed-screen").css("display","block");
    }  
  }
  verticalAlign--;
})
  var falseWords = inGameWordsThatAreInActualGame;
$(".hacking-screen").on("click","#fill",function() {
  verticalAlign--;
  if (Math.random() >=0.2) {
    (function deleteARandomWord() {
      var wrd = $(".hacking-screen").find("[data-word = '" + falseWords[getRandomInt(0,falseWords.length-1)] + "']");
      wrd.text(dotsForfill(wrd.text()) );
      inGameWordsThatAreInActualGame.splice(inGameWordsThatAreInActualGame.indexOf(wrd.attr("data-word")),1);
      falseWords.splice(falseWords.indexOf(wrd.attr("data-word")),1)
      wrd.attr("data-word","null");
      $(".input-screen").append("<p order = '" + verticalAlign + "'>&gt; fill removed.</p>")
  })();
  }
  else {
    (function replenishAttempts() {
      tries = 20;
      $(".title-screen").html("<p class = 'text-center' id = 'title'>NULL N VOID (TM) TERMINAL</p>")//title-reading
      $(".title-screen").append("<p id = 'enter-password'>ENTER PASSWORD :</p>"); //enterpassword
      $(".title-screen").append("<p id = 'password-attempts'>Attempts remaining --> "+tries+ " " + dots(tries) +"</p><br>");
      $(".input-screen").append("<p order = '" + verticalAlign + "'>&gt; Allowance replinshed.</p>");
  })();  
  }
  $(this).attr("id","dead-fill");
})
