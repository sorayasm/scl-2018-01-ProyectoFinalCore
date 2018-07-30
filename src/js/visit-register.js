// Registrar visitas
function newVisit() {
    const vname = visitName.value;
    const vdni = visitDNI.value;
    const vmail = visitMail.value;
    const timestamp = new Date().toUTCString();
    //const vphoto = visitPhoto; //falta foto

    const rootRef = firebase.database().ref();
    const storesRef = rootRef.child("visitas");
    const newStoreRef = storesRef.push();
    newStoreRef.set({
        name: vname,
        DNI: vdni,
        //company: vcompany,
        //position: vposition,
        mail: vmail,
        motive: vmotive,
        visitTime: vtime,
        enterTime: timestamp,
        //photo: vphoto
    });
    console.log("registro exitoso")
}

//Select Motivo

function handleClick(select) {
    vmotive = select;
    console.log(vmotive)
}

function handleClick2(select2) {
    vtime = select2;
    console.log(vtime)
}