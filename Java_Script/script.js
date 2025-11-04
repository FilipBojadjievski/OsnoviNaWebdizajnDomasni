var order = new Array(12);
var opened = new Array(12);
var prev = -1;
var obidi = 0;
var enableClick = true;
window.addEventListener("load", start, true);

function start() {
  order = orderd();
  obidi = 0;
  updateVoved();
  for (let x = 0; x < 12; x++) {
    console.log(x);
    var a = document.getElementById(x.toString());
    opened[x] = false;
    a.setAttribute("src", "Closed.png");
    a.addEventListener("click", openCard, true);
  }
  var starter = document.getElementById("Start");
  starter.addEventListener("click", start, true);
}
function closeCard(id) {
  var a = document.getElementById(id.toString());
  a.setAttribute("src", "Closed.png");
}
function getgroup(a) {
  var b = order[a];
  var c = parseInt(b) + parseInt(b % 2);
  return c;
}
function updateVoved() {
  var voved = document.getElementById("pocetok");
  voved.innerHTML = `Обиди: ${obidi}`;
}
function openCard(event) {
  var card = event.target;
  var id = event.target.id;
  if (opened[id] == true || enableClick == false) {
    return;
  } else {
    opened[id] = true;
    var value = order[id];
    var address = "img_" + value + ".png";

    card.setAttribute("src", address);

    if (prev != -1) {
      obidi++;
      updateVoved();
      if (getgroup(prev) == getgroup(id)) {
        prev = -1;
      } else {
        enableClick = false;
        setTimeout(function () {
          opened[prev] = false;
          opened[id] = false;
          closeCard(prev);
          closeCard(id);
          prev = -1;
          enableClick = true;
        }, 2500);
      }
      if (isOver() == true) {
        window.alert("Честитки победивте со " + obidi + " обиди");
      }
    } else {
      prev = id;
    }
  }
}
function wrongCards(a) {
  let id = parseInt(a);
}
function swap(x, y) {
  return [y, x];
}
function orderd() {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  for (let x = 0; x < 12; x++) {
    let temp = Math.random() * 12;
    temp = Math.floor(temp);
    [arr[x], arr[temp]] = swap(arr[x], arr[temp]);
  }
  return arr;
}
function isOver() {
  for (let x = 0; x < 12; x++) {
    if (opened[x] == false) {
      return false;
    }
  }
  return true;
}
