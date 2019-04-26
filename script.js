'use strict';

const fs = require("fs");
const holder = document.getElementById("holder");
const fileText = document.getElementById("text");

document.ondragover = document.ondrop = function(e) {
  e.preventDefault();
}

/** hoverエリアにドロップされた */
holder.ondrop = function (e) {
  e.preventDefault();

  var file = e.dataTransfer.files[0];
  text.innerText = file.name + "\n" + file.path + "\n" + fs.statSync(file.path).isDirectory();
  return false;
};
