function submitEmail(){
    var f = document.getElementsByTagName('form')[0];
    var error = document.getElementById("error");
    var input = document.getElementById("email");
    var error2 = document.getElementById("error2");
     if(f.reportValidity()) {
      f.submit();
    }
     if(input.value == '') {
        input.style.borderColor = "hsl(354, 100%, 66%)";
        error.style.display = "block";
    }
     else {
        input.style.borderColor = "hsl(354, 100%, 66%)";
        error2.style.display = "block";
   }
    
}