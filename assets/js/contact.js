function contact_submit() {
    console.log("contact_submit");
    let name = document.getElementById("name-1").value;
    let email = document.getElementById("email-1").value;
    let message = document.getElementById("message-1").value;
    let mail = "mailto:youupagence@gmail.com?subject=Etude de projet&body=Nom : " + name + " Email : " + email + " Message : " + message;
    console.log(mail);
    window.location.assign(mail);
}
