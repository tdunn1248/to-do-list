$(document).ready(function() {

  $("#task").on("keydown", function(e) {
    if (e.keyCode == 13) {
      $("#task-list").prepend("<div class='row'>\n<div class='col-md-12'>\n<li class='expand list-group-item'>" + $("#task").val() + "</li>\n</div>\n</div>");
      $("#task").val("");
    }
  })




})
