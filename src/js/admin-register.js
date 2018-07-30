//Validar clave de Queltehue
function register() {
    const key = document.getElementById("key").value;
    if (key === "123456789") {
        registerWithFirebase();
    } else {
        alert("revisa los datos.");
    };
}

function registerWithFirebase() {
    const amail = adminMail.value;
    const apassword = adminPassword.value;
    const aname = adminName.value;
    const acompany = adminCompany.value;
    const aphone = adminPhone.value;
    const aphoto = adminPhoto.value;
    firebase.auth().createUserWithEmailAndPassword(amail, apassword)
        .then((userData) => {
            firebase.database().ref(`administradores/${userData.user.uid}`).set({
                mail: userData.user.email,
                uid: userData.user.uid,
                username: aname,
                company: acompany,
                phone: aphone,
                photoURL: aphoto
            });
            console.log("usuario se creo")
        })
        .catch((error) => {
            console.log("Error de Firebase > Codigo > " + error.code);
            console.log("Error de Firebase > Mensaje > " + error.message);

        });

    window.location = "index.html";
}