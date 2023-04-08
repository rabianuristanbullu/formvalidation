const password= document.getElementById("password")
const inputIcon= document.getElementById("inputIcon")
const username= document.getElementById("username")
const myForm= document.getElementById("myForm")
const usernameError= document.getElementById("usernameError")
const passwordError= document.getElementById("passwordError")




inputIcon.addEventListener("click",()=>{
    const type = password.attributes.type.value

    if(type === "password"){
        password.attributes.type.value="text"
        inputIcon.classList.replace("fa-eye","fa-eye-slash")
    }else{
        password.attributes.type.value="password"
        inputIcon.classList.replace("fa-eye-slash","fa-eye")
    }

})

myForm.addEventListener("submit",(event)=>{
    event.preventDefault()
   
    if(username.value===""){
        usernameError.innerText=("Email alanı boş bırakılamaz!!!")
        usernameError.style.visibility="visible"
        username.focus()
        return 
    }

    const emailFormat= 
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

   const isValidEmail= username.value.match(emailFormat)

   if(isValidEmail=== null){
    usernameError.innerText=("Email formatı yanlış!!!")
    usernameError.style.visibility="visible"
    username.focus()
    return
   }

   if(password.value===""){
    passwordError.innerText="Şifre boş kalamaz"
    passwordError.style.visibility="visible"
    password.focus()
    return
   }

   if(password.value.length < 6){
    passwordError.innerText="Şifre en az 6 karakterden oluşmalıdır"
    passwordError.style.visibility="visible"
    password.focus()
    return
   }
})

username.addEventListener("focusout",()=>{
    usernameError.style.visibility="hidden"
})

password.addEventListener("focusout",()=>{
    passwordError.style.visibility="hidden"
})