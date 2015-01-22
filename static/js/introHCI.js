'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event

    
    var projectTitle = $(this).find("p").text();
    console.log(projectTitle);
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
      }
    }

function changeStuff(e) {

  console.log("In changeStuff");
  var project = $("#project").val();
  var width = $("#width").val();
  console.log(project);
  console.log(width);

  var toChange = $(project).animate({width: $('#width').val()});

  var newText = $('#description').val();
  $(project + " .project-description").text(newText); 
}
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Tr0gs & K00ks");
                $(".jumbotron p").toggleClass("active");
		});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(changeStuff);
}
