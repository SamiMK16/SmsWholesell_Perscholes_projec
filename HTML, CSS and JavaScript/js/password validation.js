function validateform() {
    var password = document.myform.password.value;

    var emailID = document.myform.Email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID")
        document.myform.Email.focus();
        return false;
    }

    else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
}  