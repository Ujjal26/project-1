let curruser = localStorage.getItem("currentUser"); // get the current user from localStorage

if(curruser){

}
else{
    window.location.href = "./login.html"; // redirect to login page if no current user is found
}