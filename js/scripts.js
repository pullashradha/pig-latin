
// business logic



// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var phrase = $("input#phrase").val();
    var result = phrase;
    var phraseSlice = phrase.slice(0, 1);

    if ((phrase[0] === "a") || (phrase[0] === "e") || (phrase[0] === "i") || (phrase[0] === "o") || (phrase[0] === "u")){
      result = phrase + "ay";
    } else if ((phrase[0] != "a") || (phrase[0] != "e") || (phrase[0] != "i") || (phrase[0] != "o") || (phrase[0] != "u")) {
      phrase = phrase.replace(phraseSlice,"");
      result = phrase + phraseSlice + "ay";
    } else {
      alert("Doesn't work!");
    };
    $(".phrase").text(result);
    $("#result").show();

  });
});
