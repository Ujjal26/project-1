function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target.classList.contains("modal-overlay")) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    try {
        let curruser = JSON.parse(localStorage.getItem("currentUser") ?? "[]");
        if(curruser.length === 0){
            window.location.href = "../login/signup.html";
        }
    } catch(e) {
        // Invalid JSON stored, redirect to login
        window.location.href = "../login/signup.html";
    }
});
