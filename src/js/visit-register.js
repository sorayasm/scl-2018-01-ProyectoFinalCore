const vname = visitName.value;
const vdni = visitDNI.value;
const vcompany = visitCompany.value;
const vposition = visitPosition.value;
const vmail = visitMail.value;
const vmotive = visitMotive.value;
const vtime = visitTime.value;
const timestamp = new Date().getTime();
const vphoto = visitPhoto; //falta foto

function newVisit() {
    const rootRef = firebase.database().ref();
    const storesRef = rootRef.child('visitas');
    const newStoreRef = storesRef.push();
    newStoreRef.set({
        name: vname,
        DNI: vdni,
        company: vcompany,
        position: vposition,
        mail: vmail,
        motive: vmotive,
        visitTime: vtime,
        enterTime: timestamp,
        photo: vphoto
    });
}