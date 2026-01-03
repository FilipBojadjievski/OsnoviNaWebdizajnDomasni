$(function () {
  $("input").on("keyup", function () {
    filtering($(this).val(), $(this).attr("id").split("Input"));
  });
});

function filtering(text, title) {
  var column = parseInt(title[1]);
  console.log(text);
  $("#myTable tr").filter(function () {
    $(this).toggle(
      $(this)
        .children(`:nth-child(${column})`)
        .text()
        .toLowerCase()
        .indexOf(text.toLowerCase()) > -1
    );
  });
}
