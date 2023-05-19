function bigger() {
  // Font size increased to 24pt
  document.getElementById("inputText").style.fontSize = "2em";

  // Styles text if FancyShmancy checked true.
  if (document.getElementById("fancy").checked == true) {
    document.getElementById("inputText").style.fontWeight = "bold";
    document.getElementById("inputText").style.color = "blue";
    document.getElementById("inputText").style.textDecoration = "underline";
  }

  // Removes styling when BoringBetty checked true.
  if (document.getElementById("boring").checked == true) {
    document.getElementById("inputText").style.fontWeight = "normal";
    document.getElementById("inputText").style.color = "black";
    document.getElementById("inputText").style.textDecoration = "none";
  }
}

function moo() {
  // Change text to uppercase.
  let str = document.getElementById("inputText").value;
  let strUppercase = str.toUpperCase();

  // Add "moo" to the last word of each sentence.
  // Consider that the sentence ends with a period character ".".
  let parts = strUppercase.split(".");
  let result = parts.join("Moo.");
  document.getElementById("inputText").value = result;
}
