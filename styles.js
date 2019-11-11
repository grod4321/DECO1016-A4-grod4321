// Below adapted from "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto"
// Creates the variables and functions
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  // Links slide variable to the myslides class
  var slides = document.getElementsByClassName("mySlides");
  // Links dots variable to the dot class
  var dots = document.getElementsByClassName("dot");
  // For loop increasing i as long as it's lower than the slides variable
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  // If statement reverting slide index back to 1 if it would exceed it's length
  if (slideIndex > slides.length) {slideIndex = 1}    
  // For loop editing the dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // Edits the display block by the slideIndex - 1
  slides[slideIndex-1].style.display = "block";  
  // Edits the active dot by the slideIndex - 1
  dots[slideIndex-1].className += " active";
  // Changes the image every 8 seconds
  setTimeout(showSlides, 8000);
}
// Above adapted from "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto"

// Below adapted from "https://www.tutorialspoint.com/javascript/javascript_form_validations.htm"
function validate() {
    // If statement for if the value of the input has nothing in it, making sure the user enters a value
    if( document.myForm.username.value == "" ) {
        // Creates an alert on the webpage
        alert( "Please enter a Username" );
        // Moves the text cursor on the input that had this value
        document.myForm.username.focus() ;
        // Returns the submission as false, meaning it doesn't submit and go to the next page
        return false;
    }
    if( document.myForm.password.value == "" ) {
        alert( "Please enter a Password" );
        document.myForm.password.focus() ;
        return false;
    }
    // Creates alert when the passwordconfirm value isn't the same as the password value, making sure the passwords match
    if( document.myForm.passwordconfirm.value !== document.myForm.password.value ) {
        alert( "Your Password doesn't match" );
        document.myForm.passwordconfirm.focus() ;
        return false;
    }
    
    // Returns the submission as true, meaning it was successfully submitted and the user can continue to the next page
    return( true );
 }

 function validate2() {
    if( document.myForm2.surname.value == "" ) {
        alert( "Please enter your Surname" );
        document.myForm2.surname.focus() ;
        return false;
    }
    if( document.myForm2.GN.value == "" ) {
        alert( "Please enter your Given Names" );
        document.myForm2.GN.focus() ;
        return false;
    }
    if( document.myForm2.address.value == "" ) {
        alert( "Please provide your Address" );
        document.myForm2.address.focus() ;
        return false;
    }
    if( document.myForm2.suburb.value == "" ) {
        alert( "Please enter your Suburb" );
        document.myForm2.suburb.focus() ;
        return false;
    }
    if( document.myForm2.postcode.value == "" ||
    // Creates alert when the value length of the postcode isn't 4 digits, making sure a correct postcode is entered
    document.myForm2.postcode.value.length != 4 ) {
        alert( "Please provide a valid Postcode" );
        document.myForm2.postcode.focus() ;
        return false;
    }

    return( true );
 }

 function validate3() {
    if( document.myForm3.email.value == "" ||
    // Creates alert when email value doesn't include "@" and ".", as all emails have these symbols
    !document.myForm3.email.value.includes("@"+".") ) {
        alert( "Please enter a valid email" );
        document.myForm3.email.focus() ;
        return false;
    }
    if( document.myForm3.phone.value == "" ||
    document.myForm3.phone.value.length < 8 ||
    document.myForm3.phone.value.length > 10 ||
    document.myForm3.phone.value.length == 9) {
        alert( "Please enter a valid Phone Number" );
        document.myForm3.phone.focus() ;
        return false;
    }
    if( document.myForm3.DOB.value == "" ) {
        alert( "Please enter your Date of Birth" );
        document.myForm3.DOB.focus() ;
        return false;
    }
    if( document.myForm3.TFN.value == "" ||
    document.myForm3.TFN.value.length != 9 ) {
        alert( "Please enter a valid Tax File Number" );
        document.myForm3.TFN.focus() ;
        return false;
    }

    return( true );
 }
 // Above adapted from "https://www.tutorialspoint.com/javascript/javascript_form_validations.htm"