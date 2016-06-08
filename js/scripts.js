$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var phraseInput = $("input#phrase").val();
    var results = phraseInput.split("");
    var phraseSlice = phraseInput.slice(0,1);
    var phraseQ = phraseInput.slice(0, 2);
    var newPhrase = "";

    if ((phrase[0] !== "a") || (phrase[0] !== "e") || (phrase[0] !== "i") || (phrase[0] !== "o") || (phrase[0] !== "u")) {
      results.forEach(function(phrase) {
        if ((phrase === "a") || (phrase === "e") || (phrase === "i") || (phrase === "o") || (phrase === "u")) {
          var vowelIndex = results.indexOf(phrase);
          phraseSlice = phraseInput.slice(0,vowelIndex);
          var endSlice = phraseInput.slice(vowelIndex, phraseInput.length);
          result = endSlice + phraseSlice + "ay";
        } else {
        }
// Above statement meets third and fourth and fifth specifications
      });
    } else if ((phrase[0] === "a") || (phrase[0] === "e") || (phrase[0] === "i") || (phrase[0] === "o") || (phrase[0] === "u")) {
      result = phrase + "ay";
// Above statement meets first specification
    } else if ((phrase[0] === "q") && (phrase[1] === "u")) {
      phrase = phraseInput.replace(phraseQ,"");
      result = phrase + phraseQ + "ay";
// Above statement meets second specification
    } else {
        alert("Error");
    }
      $(".phrase").text(result);
      $("#result").show();
  });
});






// Older Code
// $(document).ready(function() {
//   $("form#pig-latin").submit(function(event) {
//     event.preventDefault();
//     var phrase = $("input#phrase").val();
//     var result = phrase;
//     var phraseSlice = phrase.slice(0,1);
//     var phraseQ = phrase.slice(0, 2);
//     var newPhrase = "";
//
//     if ((phrase[0] === "a") || (phrase[0] === "e") || (phrase[0] === "i") || (phrase[0] === "o") || (phrase[0] === "u")) {
//       result = phrase + "ay";
// // Above statement meets first specification
//     } else if ((phrase[0] === "q") && (phrase[1] === "u")) {
//       phrase = phrase.replace(phraseQ,"");
//       result = phrase + phraseQ + "ay";
// // Above statement meets second specification
//     } else if ((phrase[0] != "a") || (phrase[0] != "e") || (phrase[0] != "i") || (phrase[0] != "o") || (phrase[0] != "u")) {
//       phrase = phrase.replace(phraseSlice,"");
//       result = phrase + phraseSlice + "ay";
//       }
//     // Above statement meets third and fourth specifications
//       $(".phrase").text(result);
//       $("#result").show();
//   });
// });
