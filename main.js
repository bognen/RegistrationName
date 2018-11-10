  //Span element (to close PopUp)
  var span = document.getElementsByClassName("close")[0];

  //Get Pop Up Window and Content
  var popupbox = document.getElementById('popupbox');
  var contenttext = document.getElementById('popuptext');

  //Get buttons
  var ybutton = document.getElementById("y-answer");
  var nbutton = document.getElementById("n-answer");

  function displayPopUp(btntype) {
    //alert(btntype);

    if (btntype=="submitbtn"){
      contenttext.innerHTML = "You are about to submit your application. Do you want to proceed?";
      ybutton.innerHTML = "Proceed";
      nbutton.innerHTML = "Cancel";

      ybutton.setAttribute("type","submit");
      ybutton.setAttribute("onclick","confirmFunc()");
      nbutton.setAttribute("onclick","closeFunction()");
      popupbox.style.display = "block";
    } else if (btntype=="resetbtn") {
      contenttext.innerHTML = "Do you really want to clear your application?";
      ybutton.innerHTML = "Clear";
      nbutton.innerHTML = "No";

      ybutton.setAttribute("onclick","clearForm()");
      nbutton.setAttribute("onclick","closeFunction()");
      popupbox.style.display = "block";
    }
  }


  // When the user clicks on <span> (x), close the PopUp
  function closeFunction() {
      popupbox.style.display = "none";
  }

  function clearForm() {
      document.getElementById("regForm").reset();
      closeFunction();
  }

  function confirmFunc(){
    return true;
    //document.getElementById("regForm").setAttribute("action","bouncer.php");
  }

/*****************************************************************************/
// Validation function
/*****************************************************************************/
function validate(myForm){
  var reg = /^[A-Z]\d[A-Z]\d[A-Z]\d$/;
  if (!reg.test(myForm.postal.value)){
    alert("invalid Postal Code");
    return false;
  } else{
    return true;
  }
}
