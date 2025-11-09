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
  but = document.getElementById("PostButton");
  but.addEventListener("click", post, true);
}
function like(tag) {
  var value = document.getElementById("Balance " + tag.toString());
  value.innerHTML = values[tag - 1] + 1;
  value.setAttribute("class", "Liked");
  var likebtn = document.getElementById("Likes " + tag.toString());
  likebtn.setAttribute("class", "ActiveLike");
  var dislikebtn = document.getElementById("Dislikes " + tag.toString());
  dislikebtn.setAttribute("class", "DislikeBtn");
}
function dislike(tag) {
  var value = document.getElementById("Balance " + tag.toString());
  value.innerHTML = values[tag - 1] - 1;
  value.setAttribute("class", "Disliked");
  var likebtn = document.getElementById("Likes " + tag.toString());
  likebtn.setAttribute("class", "LikeBtn");
  var dislikebtn = document.getElementById("Dislikes " + tag.toString());
  dislikebtn.setAttribute("class", "ActiveDislike");
}
function feedback() {
  var Nickname = document.getElementById("Nickname");
  var Message = "";
  var agreeing = document.getElementById("Agreement");
  var checked = document.getElementById("Checked");
  if (checked.checked != true) {
    agreeing.setAttribute("class", "Error");
    return;
  }
  if (Nickname.value == "") {
    Message = "Thank you for filling out this form anonimously";
  } else {
    Message = `Thank you ${Nickname.value} for giving us feedback`;
  }
  var Field = document.getElementById("Feedback");
  Field.innerHTML = "<p>" + Message + "</p>";
}
function timestamp() {
  const now = new Date();
  return `${now.getDate()}.${now.getMonth()}.${now.getFullYear()} ${now.getHours()}:${parseInt(
    now.getMinutes() / 10
  )}${now.getMinutes() % 10}`;
}
function post(event) {
  var referenced = event.target;
  var accessedbox = document.getElementById("PostArea");
  var commentsList = document.getElementById("blogPost");
  var title = document.getElementById("PostTitle");
  if (title.value == "") {
    title.value = "Please write a title";
    return;
  }
  console.log(commentsList);
  if (accessedbox.value == "") {
    accessedbox.value = "Please write a post";
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
  var tekst = `<b>${ime} posted on  ${timestamp()}:</b> \n`;
  commentsList.appendChild(nov);
  komentar.innerHTML = tekst + `<h1>${title.value}</h1>` + accessedbox.value;
  var brisi = document.createElement("button");
  brisi.id = "delete " + referenced.id;
  brisi.setAttribute("class", "deleteButton");
  brisi.innerHTML = "X";
  brisi.addEventListener("click", deletepost, true);
  komentar.appendChild(brisi);
  nov.appendChild(komentar);
  accessedbox.value = "";
  title.value = "";
}
function deletepost(event) {
  var current = event.target;
  var todel = current.parentElement.parentElement;
  todel.parentElement.removeChild(todel);
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

  komentar.setAttribute("style", "display:inline");
  var tekst = `<b>${ime} commented on  ${timestamp()}:</b> \n`;
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
