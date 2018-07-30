// Registrar visitas
function newVisit() {
    const vname = visitName.value;
    const vdni = visitDNI.value;
    const vmail = visitMail.value;
    const timestamp = new Date().valueOf();
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

//Select Motivo

const vmotive = document.getElementById("motive");
vmotive.selectedIndex = elementSelected;
console.log(elementSelected)