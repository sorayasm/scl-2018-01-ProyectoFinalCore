// Select residentes

window.onload = () => {
    database = firebase.database()
    const ref = database.ref("residentes")
    ref.on("value", gotData, errData)
};

// Funciones para select
function gotData(data) {
    community = data.val();
    const keys = Object.keys(community);
    console.log(keys);
    for (i = 0; i < keys.length; i++) {
        const k = keys[i];
        const names = community[k].name;
        const mail = community[k].mail;
        console.log(names, mail)
    }

}

function errData(err) {
    console.log("Error!" + err);

}

let vtime = "Reunión o Evento";
let vmotive = "15 minutos";


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
        motive: JSON.stringify(vmotive), // resolver tema de valor por defecto
        visitTime: JSON.stringify(vtime), // resolver tema de valor por defecto
        enterTime: timestamp,
        patente: vpatente,
        //photo: vphoto
    });
    console.log("registro exitoso")
}

//Select Motivo
function motive(event) {
    vmotive = this.options[this.selectedIndex].value;
    console.log(vmotive)
}

// Select time
function time(event) {
    vtime = this.options[this.selectedIndex].value;
    console.log(vtime)
}