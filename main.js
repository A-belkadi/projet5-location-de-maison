var slideIndex = 1;
showDivs();

function plusDivs(n) {
    slideIndex = slideIndex + n;
    // 1 + (-1) => 0
    showDivs();
}

function showDivs() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    if (slideIndex < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}


function openForm() {
    document.getElementById("myForm").style.display = "block"; 
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


var password_regex = /.{8}/;
var error_password = document.getElementsByClassName("error_password");
var error_confirmpassword = document.getElementsByClassName("error_confirmpassword");

function inscription(){
var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;

  if (password_regex.test(password)==false) 
  {
    error_password[0].innerHTML = "Le mot de passe doit contenir au moins 8 caractères";
  } 
  else error_password[0].innerHTML = "";
  if (password != confirmpassword) {
    error_confirmpassword[0].innerHTML = "Le mot de passe n'est pas correct!";
  }
   else error_confirmpassword[0].innerHTML = "";
}

var nom=document.getElementById("nom");
var prenom=document.getElementById("prenom");
var date1=document.getElementById("date1");
var date2=document.getElementById("date2");
var nombre=document.getElementById("nombre");
var btn_now = document.getElementsByClassName("Now");
btn_now[0].addEventListener("click",()=>{
    alert("Nom :"+nom.value+"\n"+"Prenom :"+prenom.value+"\n"+"date naissance:"+date1.value+"\n"+"date reservation:"+date2.value+"\n"+"nombre de personne:"+nombre.value)
})
         
                
       