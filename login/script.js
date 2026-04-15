let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

let error = document.getElementById("error");
let success = document.getElementById("success");

// Signup button event listener
document.getElementById("signup").addEventListener("click", (e) => { 
    // prevent form submission if the boxes are empty
    if(fname.value =="" || lname.value == "" || email.value == "" || password.value == "" || confirmPassword.value == ""){
        error.textContent =" All fields are required";
        e.preventDefault();
    }
    else if(password.value === confirmPassword.value){
        success.textContent = "Signup successful";
        error.textContent = "";
        let users = JSON.parse(localStorage.getItem("users") ?? "[]");
        let filteredusers = users.filter((user)=> user.email === email.value);
        if(filteredusers.length > 0){
            success.textContent = "Email already exists";
            e.preventDefault();
            window.location.href = "./login.html"; // redirect to login page if email already exists
        }
        else{// add the new user to the users array and store it in localStorage
            users.push({fname: fname.value, lname: lname.value, email: email.value, password: password.value});
            localStorage.setItem("users", JSON.stringify(users));
            form.reset();
            e.preventDefault();
            window.location.href = "./login.html";
        }
    }
    else{
        error.textContent = "Password and Confirm Password must be the same";
        e.preventDefault();
    }
});