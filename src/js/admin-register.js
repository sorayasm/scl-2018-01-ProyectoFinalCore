//Validar clave de Queltehue
function register() {
    const key = document.getElementById("key").value;
    if (key === "123456789") {
        registerWithFirebase();
    } else {
        alert("revisa los datos.");
    };
}

//Registar con Firebase
function registerWithFirebase() {
    const emailValue = email.value;
    const passwordValue = password.value;
    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .then((userData) => {
            firebase.database().ref(`administradores/${userData.user.uid}`).set({
                mail: userData.user.email,
                uid: userData.user.uid,
            });
            console.log("usuario se creo");
            window.location = "index.html";
        })
        .catch((error) => {
            console.log("Error de Firebase > Codigo > " + error.code);
            console.log("Error de Firebase > Mensaje > " + error.message);

        });
}