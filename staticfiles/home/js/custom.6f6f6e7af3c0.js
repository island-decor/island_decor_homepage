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

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

  //Removed js-scroll-trigger reference from navigation.html replaced w/below for functionality
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 810, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

})(jQuery); // End of use strict

  //Nav script for the 'Menu' button to make it an 'onclick' drop-down button instead of a hover based
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }

  }


/*
* -JavaScript for a modal but it works this time-
* What it does: it should make it so the modal can open and close properly
* AND Enable the user to close the modal in multiple ways :
*   1. Click on the (x symbol) exit symbol
*                    or
*   2. Click in the outside of the modal area
*
*/

// Get modal element
    var modal = document.getElementById('openModal-1');
// Get modal button
    var modalBtn = document.getElementById('modalBtn1');
// Get close button
    var closeBtn = document.getElementsByClassName('close-mod')[0];

// Listen for click
    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
// Listen for click outside of modal
    window.addEventListener('click', clickOutside);

// Function to open modal
    function openModal(){
        modal.style.display = 'block';
    }
// Function to close the modal
    function closeModal(){
        modal.style.display = 'none';
    }

// Function to closes modal if user clicks outside modal area
    function clickOutside(e){
        if(e.target == modal) {
            modal.style.display = 'none';
        }
    }

// Get modal element
    var modal2 = document.getElementById('openModal-2');
// Get modal button
    var modalBtn2 = document.getElementById('modalBtn2');
// Get close button
    var closeBtn2 = document.getElementsByClassName('close-mod2')[0];

// Listen for click
    modalBtn2.addEventListener('click', openModal2);
    closeBtn2.addEventListener('click', closeModal2);
// Listen for click outside of modal
    window.addEventListener('click', clickOutside2);

// Function to open modal
    function openModal2(){
        modal2.style.display = 'block';
    }
// Function to close the modal
    function closeModal2(){
        modal2.style.display = 'none';
    }

// Function to closes modal if user clicks outside modal area
    function clickOutside2(e){
        if(e.target == modal2) {
            modal2.style.display = 'none';
        }
    }





/*(03/27) add back in if new fix fails
function msFunction() {
    document.getElementById("msModal").showModal();
}


  var box = document.querySelector(".ms-overlay");

    // Detect all clicks on the document
    document.addEventListener("click", function(event) {

    // If user clicks inside the element, do nothing
    if (!event.target.closest(".ms-overlay")) return;

    // If user clicks outside the element, hide it!
        box.classList.add("js-is-hidden");

});


/*
* - Take One on (using native JS) to close modal when clicking off of...
* 'Our Mission' modal
*

  // Get the modal
    var modal = document.getElementById('msModal');

  // Get the button that opens the modal
    var btn = document.getElementById("msButton");


  // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
  }


  // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
      }
  }

 */