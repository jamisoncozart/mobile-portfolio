var currentPage = 1;

$(document).ready(function() {
  $("#homeLink").click(function() {
    $("#homeLink").addClass("navActive");
    $("#projectsLink").removeClass();
    $("#aboutLink").removeClass();
    $("#contactLink").removeClass();
  })
  $("#projectsLink").click(function() {
    $("#projectsLink").addClass("navActive");
    $("#homeLink").removeClass();
    $("#aboutLink").removeClass();
    $("#contactLink").removeClass();
  });
  $("#aboutLink").click(function() {
    $("#aboutLink").addClass("navActive");
    $("#homeLink").removeClass();
    $("#projectsLink").removeClass();
    $("#contactLink").removeClass();
  });
  $("#contactLink").click(function() {
    $("#contactLink").addClass("navActive");
    $("#homeLink").removeClass();
    $("#aboutLink").removeClass();
    $("#projectsLink").removeClass();
  })
})

  //create current-page variable