let userNameInput = document.getElementById("userNameInput"),
    userEmailInput = document.getElementById("userEmailInput"),
    userPasswordInput = document.getElementById("userPasswordInput"),
    signUpSwithchBtn = document.getElementById("signUpSwithchBtn"),
    signInSwitchBtn = document.getElementById("signInSwitchBtn"),
    signUpBtn = document.getElementById("signUpBtn"),
    signInBtn = document.getElementById("signInBtn"),
    inUpHearder = document.getElementById("inUpHearder"),
    desabled = document.querySelector(".desable"),
    userNameField = document.querySelector(".user-name");


    function makeNameFieldAdjusted(){

        userNameField.style.maxHeight = "86px";
        userNameField.style.opacity = "1";
  
      }

      makeNameFieldAdjusted()
    

signInSwitchBtn.addEventListener("click" , ()=>{
    signInBtn.style.display = "block" ;
    signUpBtn.style.display = "none" ;
    userNameField.style.maxHeight = "0";
    userNameField.style.opacity = "0";
    signInSwitchBtn.classList.remove("desable");
    signUpSwithchBtn.classList.add("desable");
    inUpHearder.innerHTML = "Sign in";
})

signUpSwithchBtn.addEventListener("click" , ()=>{
    signInBtn.style.display = "none" ;
    signUpBtn.style.display = "block" ;
    userNameField.style.maxHeight = "86px";
    userNameField.style.opacity = "1";
    signInSwitchBtn.classList.add("desable");
    signUpSwithchBtn.classList.remove("desable");
    inUpHearder.innerHTML = "Sign up";
})
