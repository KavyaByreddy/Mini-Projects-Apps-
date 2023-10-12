function phonenumber(inputtxt)
{
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno)) {
    alert("Valid Number")
      return true;
        }
      else
        {
        alert("Not a Valid Number");
        return false;
        }
}