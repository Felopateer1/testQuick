let name_id = document.getElementById("name");
name_id.innerHTML = localStorage.getItem("username");
let email = document.getElementById("email");
email.innerHTML = localStorage.getItem("email");