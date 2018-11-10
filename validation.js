function validate(myForm) {
  var reg = /^[A-Z]\d[A-Z]\d[A-Z]\d$/;
  if (!reg.test(myForm.postal.value)) {
    alert("Error message");
    return false;
  } else{
      // return confirm("Continue submitting?");
      confirmSubmition(); //then if we gaet answer yes we have to return TRUE
  }
}
