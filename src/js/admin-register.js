//Validar clave de Queltehue
function adminRegister() {
    const key = document.getElementById("key").value;
    if (key === "123456789") {
        registerWithFirebase();

    } else {
        alert("Revisa los datos.");
    };
    window.location = "index.html";
}

function registerWithFirebase() {
    const aname = adminName.value;
    const amail = adminMail.value;
    const acompany = adminCompany.value;
    const aphone = adminPhone.value;
    const apassword = adminPassword.value;

    firebase.auth().createUserWithEmailAndPassword(amail, apassword)
        .then((userData) => {
            firebase.database().ref(`administradores/${userData.user.uid}`).set({
                username: aname,
                mail: userData.user.email,
                company: acompany,
                phone: aphone,
                uid: userData.user.uid,
            });
            console.log("usuario se creo")
        })
        .catch((error) => {
            console.log("Error de Firebase > Codigo > " + error.code);
            console.log("Error de Firebase > Mensaje > " + error.message);

        });
}