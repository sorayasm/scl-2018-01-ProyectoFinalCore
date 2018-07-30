// Registrar visitas
function newVisit() {
    const vname = visitName.value;
    const vdni = visitDNI.value;
    const vmail = visitMail.value;
    const timestamp = new Date().getTime();
    //const vphoto = visitPhoto; //falta foto

    const rootRef = firebase.database().ref();
    const storesRef = rootRef.child('visitas');
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
}

function selectMotive(event) {
    const selectElement = event.target;
    const vmotive = selectElement.value;
    console.log(value);
}

function selectTime(event) {
    const selectElement = event.target;
    const vtime = selectElement.value;
    console.log(value);
}