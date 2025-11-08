window.addEventListener("load", init, true);
var ime = "User" + parseInt(Math.random() * 100000);
var values = [3, -2, 5];
function init() {
  console.log(ime);
  var but = document.getElementById("Login_button");
  but.addEventListener("click", login, true);
  but = document.getElementById("1");
  but.addEventListener("click", comment, true);
  but = document.getElementById("2");
  but.addEventListener("click", comment, true);
  but = document.getElementById("3");
  but.addEventListener("click", comment, true);
  but = document.getElementById("Like 1");
  but.addEventListener("click", like, true);
  but = document.getElementById("Dislike 1");
  but.addEventListener("click", comment, true);
}
function like(event) {
  var referenced = event.target;
  var value = referenced.parentElement.getElementById("Val");
  console.log(value.id);
}
function comment(event) {
  var referenced = event.target;
  var accessedbox = document.getElementById("Comment area " + referenced.id);
  var commentsList = document.getElementById("comments " + referenced.id);
  if (accessedbox.value == "") {
    accessedbox.value = "Please write a comment";
    return;
  }
  var nov = document.createElement("li");
  var korisnik = document.createElement("img");
  korisnik.src = "user.png";
  korisnik.setAttribute("style", "border-radius: 100%; max-height: 25px;");
  nov.appendChild(korisnik);
  var komentar = document.createElement("div");
  const now = new Date();
  komentar.setAttribute("style", "display:inline");
  var tekst = `<b>${ime} commented on  ${now.getDate()}.${now.getMonth()}.${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:</b>`;
  console.log(tekst);
  commentsList.appendChild(nov);
  komentar.innerHTML = tekst + accessedbox.value;
  var brisi = document.createElement("button");
  brisi.id = "delete " + referenced.id;
  brisi.setAttribute("class", "deleteButton");
  brisi.innerHTML = "X";
  brisi.addEventListener("click", deletecomment, true);
  komentar.appendChild(brisi);
  nov.appendChild(komentar);
  accessedbox.value = "";
}
function deletecomment(event) {
  var current = event.target;
  var todel = current.parentElement.parentElement;
  todel.parentElement.removeChild(todel);
}
function login() {
  var field = document.getElementById("login");
  ime = field.value;
  if (ime == "") {
    field.placeholder = "Wrong input";
    return;
  }
  var pole = document.getElementById("login_page");
  pole.innerHTML = "Welcome, " + ime;
  var button = document.createElement("button");
  button.id = "Logout_button";
  button.textContent = "Logout";
  pole.appendChild(button);
  button.addEventListener("click", logout, true);
  pole = document.getElementById("Text");
  pole.innerHTML = `Welcome to Zurich, ${ime}. Visit our
      blog and gallery and leave your feedback in the form.`;
}
function logout() {
  location.reload();
}
