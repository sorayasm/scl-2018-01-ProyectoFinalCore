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
    const emailValue = email.value;
    const passwordValue = password.value;
    const name = adminName.value;
    const companyname = adminCompany.value;
    const contactPhone = adminPhone.value;
    const photo = adminPhoto.value;
    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .then((userData) => {
            firebase.database().ref(`administradores/${userData.user.uid}`).set({
                mail: userData.user.email,
                uid: userData.user.uid,
                username: name,
                company: companyname,
                phone: contactPhone,
                photoURL: photo
            });
            console.log("usuario se creo")
        })
        .catch((error) => {
            console.log("Error de Firebase > Codigo > " + error.code);
            console.log("Error de Firebase > Mensaje > " + error.message);

        });

    window.location = "index.html";
}