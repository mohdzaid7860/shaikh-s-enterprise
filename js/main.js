$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

console.log(w);

if (w<'560') {
  var amc = document.getElementById("myBtn");
  amc.onclick = function() {
    var link = document.createElement("a");
        link.download = 'Service Charges';
        link.href = "data/SERVICE CHARGES.pdf";
        link.click();
  }

}

// Get the modal
var r_modal = document.getElementById('myModalRecaptcha');
var s_modal = document.getElementById('myModalRecaptchas');
var email0 = document.getElementById('email0');
var email1 = document.getElementById('email1');
// Get the button that opens the modal
var r_btn = document.getElementById("recaptchaBtn");
var s_btn = document.getElementById("subscribeBtn");
var sub0 = document.getElementById("sub0");
var sub1 = document.getElementById("sub1");
var f0 = document.getElementsByTagName('form')[0];
var f1 = document.getElementsByTagName('form')[1];
var allowSubmit = false;
sub0.disabled=true;
sub1.disabled=true;
//Open Model on feedback form
r_btn.onclick = function() {
    console.log("Form"+ f1.checkValidity());    
      if (email1.validity.typeMismatch || email1.validity.valueMissing) {
        console.log('I rann');
        email1.reportValidity();
      } else {  
        if (!f1.checkValidity()) {   
          document.getElementById('feedback').reportValidity();
          document.getElementById('name').reportValidity();

        } else {   
          r_modal.style.display = "block";
          console.log("Modal Opened")        
          if (allowSubmit) {
            console.log("allowSubmit = "+allowSubmit);
            sub1.disabled=false;
          }
        }

      }
}

s_btn.onclick = function() {
  if (f0.checkValidity()) {
    s_modal.style.display = "block";
    console.log("Modal Opened")        
    if (allowSubmit) {
      console.log("allowSubmit = "+allowSubmit);
      sub0.disabled=false;
    }
  } else {
    email0.reportValidity();
  }
}

// When the user submits, close the modal
sub1.onclick = function() {
   r_modal.style.display = "none";
}


//When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == r_modal) {
        r_modal.style.display = "none";
    }
    if (event.target == s_modal) {
      s_modal.style.display = "none";
    }
}

function capcha_expired () {
    allowSubmit = false;
    sub1.disabled=true;
    sub0.disabled=true;
}

function capcha_filled () {
    allowSubmit = true;
    console.log("allowSubmit = "+allowSubmit);
    sub1.disabled=false;    
    sub0.disabled=false;
}
