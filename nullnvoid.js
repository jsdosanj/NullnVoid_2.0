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
