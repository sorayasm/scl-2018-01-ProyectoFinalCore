firebase.initializeApp(config);

function newResident() {
    const rname = residentName.value;
    const rdni = residentDNI.value;
    const rcompany = residentCompany.value;
    const rmail = residentMail.value;

    const rootRef = firebase.database().ref();
    const storesRef = rootRef.child("residentes");
    const newStoreRef = storesRef.push();
    newStoreRef.set({
        name: rname,
        DNI: rdni,
        company: rcompany,
        position: rposition,
        mail: rmail,
        phone: rphone
    });

    alert("La persona se ha registrado con éxito");
    limpiar();


}

function limpiar() {
    //limpiar inputs
    document.getElementById("residentName").value = "";
    document.getElementById("residentDNI").value = "";
    document.getElementById("residentCompany").value = "";
    document.getElementById("residentMail").value = "";
}

module.exports = newResident;
module.exports = limpiar;