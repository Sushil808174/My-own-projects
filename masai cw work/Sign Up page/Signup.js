let myForm=document.getElementById("myForm");
let arrData=JSON.parse(localStorage.getItem("signup")) || [];
let password=document.getElementById("password");
let Repassword=document.getElementById("Re-password");
let email=document.getElementById("email")
myForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    let obj={
        email:email.value,
        password:password.value,
        Repassword:Repassword.value
    }
    if(password.value==Repassword.value){
        arrData.push(obj)
        localStorage.setItem("signup" , JSON.stringify(arrData))
        alert("Sign Up Successful!!")
    }else{
        alert("Wrong Credencials!!, Please check again.")
    }
})

