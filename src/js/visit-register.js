// Select residentes
window.onload = () => {
    firebase.database().ref(`residentes/${newResident.key}`)
        .on("child_added", (newResident) => {
            contenido.innerHTML = `
            <option name="select" value="${newResident.key.company} ${newResident.key.name}">${newResident.key.company} ${newResident.key.name},/option>` +
                contenido.innerHTML;
        });

};

// Registrar visitas
function newVisit() {
    const vname = visitName.value;
    const vdni = visitDNI.value;
    const vmail = visitMail.value;
    const timestamp = new Date().toUTCString();
    const vpatente = visitPatente.value;
    //const vphoto = visitPhoto; //falta foto

    const rootRef = firebase.database().ref();
    const storesRef = rootRef.child("visitas");
    const newStoreRef = storesRef.push();
    newStoreRef.set({
        name: vname,
        DNI: vdni,
        //company: vcompany,
        mail: vmail,
        motive: vmotive.value, // resolver tema de valor por defecto
        visitTime: vtime.value, // resolver tema de valor por defecto
        enterTime: timestamp,
        patente: vpatente,
        //photo: vphoto
    });
    console.log("registro exitoso")
}

//Select Motivo
function handleClick(select) {
    vmotive == select;
    console.log(vmotive)
}

// Select time
function handleClick2(select) {
    vtime = select;
    console.log(vtime)
}