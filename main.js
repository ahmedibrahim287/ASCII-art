function getWord(h) {
  var s = "";
  var d = "";
  for (var i = 0; i < h; i += 1) {
    s += "L" + "<br/>";
  }
  for (var i = 0; i < h; i += 1) {
    d += "L" + " ";
  }

  document.getElementById("newLine").innerHTML = s;
  document.getElementById("oneLine").innerHTML = d;
}

function getVal() {
  var inputValue = document.getElementById("inputVal").value;
  getWord(inputValue);
}
