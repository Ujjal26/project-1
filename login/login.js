let email = document.getElementById("email");
let password = document.getElementById("password");

function generateToken() { // function to generate a random token
    return Math.random(0-1000).toString();
}
document.getElementById("login").addEventListener("click", (e) => {
    e.preventDefault();
    if(email.value==="" || password.value===""){ // prevent form submission if the boxes are empty
        document.getElementById("error").innerText = "Please fill in all fields.";
        return;
    }
    else{ // check if the email and password match any user in localStorage
        let users = JSON.parse(localStorage.getItem("users") ?? "[]");
        if(users.length>0){
            let user =users.filter(user => user.email === email.value)
            if(user.length>0 && user[0].password === password.value){
                localStorage.setItem("currentUser", JSON.stringify({
                    email: user[0].email,
                    password: user[0].password,
                    token : generateToken() // generate a token for the current user
                })); // store the current user in localStorage
                window.location.href = "../SRSV/index.html"; // redirect to profile page if login is successful
            }
            else{
                document.getElementById("error").innerText = "Invalid email or password."; // display error message if email or password is incorrect
            }
        }
        else{
            document.getElementById("error").innerText = "No users found. Please sign up first.";// display error message if no users are found in localStorage
            window.location.href = "./signup.html"; // redirect to signup page if no users are found
        }
    }
});