var currentPage = 1;

$(document).ready(function() {
  $("#homeLink").click(function() {
    //add active/remove active class
    $("#homeLink").addClass("navActive");
    $("#projectsLink").removeClass();
    $("#aboutLink").removeClass();
    $("#contactLink").removeClass();
    //hide/show selected page
    $("#projects").hide();
    $("#about").hide();
    $("#contact").hide();
    $("#home").show();  
  })
  $("#projectsLink").click(function() {
    //add active/remove active class
    $("#projectsLink").addClass("navActive");
    $("#homeLink").removeClass();
    $("#aboutLink").removeClass();
    $("#contactLink").removeClass();
    //hide/show selected page
    $("#home").hide();
    $("#about").hide();
    $("#contact").hide();
    $("#projects").show();
  });
  $("#aboutLink").click(function() {
    //add active/remove active class
    $("#aboutLink").addClass("navActive");
    $("#homeLink").removeClass();
    $("#projectsLink").removeClass();
    $("#contactLink").removeClass();
    //hide/show selected page
    $("#home").hide();
    $("#projects").hide();
    $("#contact").hide();
    $("#about").show();
  });
  $("#contactLink").click(function() {
    //add active/remove active class
    $("#contactLink").addClass("navActive");
    $("#homeLink").removeClass();
    $("#aboutLink").removeClass();
    $("#projectsLink").removeClass();
    //hide/show selected page
    $("#home").hide();
    $("#about").hide();
    $("#projects").hide();
    $("#contact").show();
  })
})

  //create current-page variable