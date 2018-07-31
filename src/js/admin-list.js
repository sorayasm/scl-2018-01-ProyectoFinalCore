firebase.initializeApp(config);
firebase.database().ref("administradores").on("value", gotData, errData)

// Funciones para lista
function gotData(data) {
    admin = data.val();
    const keys = Object.keys(admin);
    //console.log(keys);
    for (i = 0; i < keys.length; i++) {
        const k = keys[i];
        const names = admin[k].username;
        const mail = admin[k].mail;
        const company = admin[k].company;
        const phone = admin[k].phone;
        //console.log(names, dni, enterTime, motive, patente, time, mail)
        const appendingTo = document.getElementById("adminlist");
        const li = document.createElement("li")
        li.innerHTML = names + " " + mail + " " + company + " " + phone;
        appendingTo.appendChild(li);
    }

}

function errData(err) {
    console.log("Error!" + err);

}