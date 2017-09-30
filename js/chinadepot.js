(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict

var completes = document.querySelectorAll(".complete");
var toggleButton = document.getElementById("toggleButton");

function toggleComplete(d) {
  var lastComplete = completes[completes.length - 1];
  lastComplete.classList.toggle('complete');
}

toggleButton.onclick = toggleComplete;

function HideContent(d) {
document.getElementById(d).style.display = "none";
}
function ShowContent(d) {
document.getElementById(d).style.display = "block";
}
function ReverseDisplay(d) {
if(document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = "block"; }
else { document.getElementById(d).style.display = "none"; }
}

function HideAllShowOne(d) {
// Between the quotation marks, list the id values of each div.

    var IDvaluesOfEachDiv = "displayText7 displayText8 displayText9 displayText10 displayText11 displayText12 displayText13 displayText displayText1 displayText2 displayText3 displayText4 displayText5 displayText6";

    //-------------------------------------------------------------
    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/[,\s"']/g," ");
    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/^\s*/,"");
    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/\s*$/,"");
    IDvaluesOfEachDiv = IDvaluesOfEachDiv.replace(/  +/g," ");
    var IDlist = IDvaluesOfEachDiv.split(" ");
    for(var i=0; i<IDlist.length; i++) { HideContent(IDlist[i]); }
    ShowContent(d);
    if(document.getElementById(d).style.display == "block")  { HideContent(d); }
}

function showonlyonev2(thechosenone) {
      var newboxes = document.getElementsByTagName("div");
      for(var x=0; x<newboxes.length; x++) {
            name = newboxes[x].getAttribute("class");
            if (name == 'newboxes-2') {
                  if (newboxes[x].id == thechosenone) {
                        if (newboxes[x].style.display == 'block') {
                              newboxes[x].style.display = 'none';
                        }
                        else {
                              newboxes[x].style.display = 'block';
                        }
                  }else {
                        newboxes[x].style.display = 'none';
                  }
            }
      }
}

function showonlyonev3(thechosenone) {
    var newboxes = document.getElementsByTagName("tr");
    for(var x=0; x<newboxes.length; x++) {
          name = newboxes[x].getAttribute("class");
          if (name == 'newboxes-2') {
                if (newboxes[x].id == thechosenone) {
                      if (newboxes[x].style.display == 'block') {
                            newboxes[x].style.display = 'none';
                      }
                      else {
                            newboxes[x].style.display = 'block';
                      }
                }else {
                      newboxes[x].style.display = 'none';
                }
          }
    }
}
