const rname = residentName.value;
const rdni = residentDNI.value;
const rposition = residentPosition.value;
const rcompany = residentCompany.value;
const rmail = residentMail.value;
//const rphone = residentPhone.value;

firebase.initializeApp(config);

function newResident() {

    const rootRef = firebase.database().ref();
    const storesRef = rootRef.child("residentes");
    const newStoreRef = storesRef.push();
    newStoreRef.set({
        name: rname,
        DNI: rdni,
        company: rcompany,
        position: rposition,
        mail: rmail,
        //photo: rphoto
    });
}

/*const newTextKey = firebase.database().ref().child("publicaciones").push().key;
const currentUser = firebase.auth().currentUser;

firebase.database().ref(`publicaciones/${newTextKey}`).set({*/