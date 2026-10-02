const login_form = document.querySelector("#login-form");
const login_email = document.querySelector("#login-email");
const login_password = document.querySelector("#login-password");

const email_error = document.querySelector("#email-error");
const password_error = document.querySelector("#password-error");

const toggle_password = document.querySelector("#toggle-password");


// Show / Hide Password
toggle_password.addEventListener("click",()=>{
    if(login_password.type === "password"){
        login_password.type = "text";
        toggle_password.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }
    else{
        login_password.type = "password";
        toggle_password.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
});


// Login Validation
login_form.addEventListener("submit",(event)=>{
    event.preventDefault();
    email_error.textContent = "";
    password_error.textContent = "";
    const email = login_email.value.trim();
    const password = login_password.value.trim();
    let is_valid = true;
    if(email === ""){
        email_error.textContent = "Please enter your email.";
        is_valid = false;
    }
    else if(!email.includes("@")){
        email_error.textContent = "Please enter a valid email.";
        is_valid = false;
    }
    if(password === ""){
        password_error.textContent = "Please enter your password.";
        is_valid = false;
    }

    if(is_valid){
    const saved_user = JSON.parse(localStorage.getItem("future_secure_user"));
    if(saved_user === null){
        alert("No account found. Please sign up first.");
        return;
    }

    if(email === saved_user.email && password === saved_user.password){      
       alert("Login successful!");
        window.location.href = "dashboard.html";
    }
    else{
        alert("Incorrect email or password.");
    }
}
});