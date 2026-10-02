const signup_form = document.querySelector("#signup-form");

const signup_name = document.querySelector("#signup-name");
const signup_email = document.querySelector("#signup-email");
const signup_password = document.querySelector("#signup-password");
const confirm_password = document.querySelector("#confirm-password");

const name_error = document.querySelector("#name-error");
const email_error = document.querySelector("#email-error");
const password_error = document.querySelector("#password-error");
const confirm_password_error = document.querySelector("#confirm-password-error");


// Password Show / Hide
const toggle_password = document.querySelector("#toggle-password");
toggle_password.addEventListener("click",()=>{
    if(signup_password.type === "password"){
        signup_password.type = "text";
        toggle_password.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }
    else{
        signup_password.type = "password";
        toggle_password.innerHTML =
            '<i class="fa-solid fa-eye"></i>';
    }
});

// Confirm Password Show / Hide
const toggle_confirm_password = document.querySelector("#toggle-confirm-password");
toggle_confirm_password.addEventListener("click",()=>{
    if(confirm_password.type === "password"){
        confirm_password.type = "text";
        toggle_confirm_password.innerHTML ='<i class="fa-solid fa-eye-slash"></i>';
    }
    else{
        confirm_password.type = "password";
        toggle_confirm_password.innerHTML ='<i class="fa-solid fa-eye"></i>';
    }
});


// Signup Validation
signup_form.addEventListener("submit",(event)=>{
    event.preventDefault();

    name_error.textContent = "";
    email_error.textContent = "";
    password_error.textContent = "";
    confirm_password_error.textContent = "";

    const name = signup_name.value.trim();
    const email = signup_email.value.trim();
    const password = signup_password.value.trim();
    const confirm = confirm_password.value.trim();
    let is_valid = true;

    // Name
    if(name === ""){
        name_error.textContent ="Please enter your name.";
        is_valid = false;
    }

    // Email
    if(email === ""){
        email_error.textContent ="Please enter your email.";
        is_valid = false;
    }
    else if(!email.includes("@")){
        email_error.textContent ="Please enter a valid email.";
        is_valid = false;
    }

    // Password
    if(password === ""){
        password_error.textContent ="Please create a password.";
        is_valid = false;
    }
    else if(password.length < 8){
        password_error.textContent ="Password must be at least 6 characters.";
        is_valid = false;
    }

    else if(!/[A-Z]/.test(password)){

        password_error.textContent =
            "Password must contain at least one uppercase letter.";

        is_valid = false;

    }
    else if(!/[a-z]/.test(password)){

        password_error.textContent =
            "Password must contain at least one lowercase letter.";

        is_valid = false;

    }
    else if(!/[0-9]/.test(password)){

        password_error.textContent =
            "Password must contain at least one number.";

        is_valid = false;

    }
    else if(!/[!@#$%^&*(),.?":{}|<>_\-]/.test(password)){

        password_error.textContent =
            "Password must contain at least one special character.";

        is_valid = false;

    }    

    // Confirm Password
    if(confirm === ""){
        confirm_password_error.textContent ="Please confirm your password.";
        is_valid = false;
    }
    else if(password !== confirm){
        confirm_password_error.textContent ="Passwords do not match.";
        is_valid = false;
    }

    // Success
    if(is_valid){
         const user = {
             name: name,
             email: email,
             password: password
         };

        localStorage.setItem("future_secure_user", JSON.stringify(user));
        alert("Account created successfully!");
        window.location.href = "login.html";
    }
});