let arrData = JSON.parse(localStorage.getItem("signup"));
let email = document.getElementById("email");
let password = document.getElementById("password");
let submitBtn = document.getElementById("register");

submitBtn.addEventListener("click", () => {
    let isThere = false;
  arrData.forEach((element) => {
    if (element.email === email.value && element.password === password.value) {
      isThere = true;
    }
  });
  if(isThere == true){
    alert("Login Successfully!");
    
  }else{
    alert("Email or Password Wrong!!")
  }
});
