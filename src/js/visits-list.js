firebase.initializeApp(config);
firebase.database().ref("visitas").on("value", gotData, errData)

// Funciones para lista
function gotData(data) {
    visitas = data.val();
    const keys = Object.keys(visitas);
    //console.log(keys);
    for (i = 0; i < keys.length; i++) {
        const k = keys[i];
        const names = visitas[k].name;
        const dni = visitas[k].DNI;
        const enterTime = visitas[k].enterTime;
        const motive = visitas[k].motive;
        const patente = visitas[k].patente;
        const mail = visitas[k].mail;
        const time = visitas[k].visitTime;
        //console.log(names, dni, enterTime, motive, patente, time, mail)
        const appendingTo = document.getElementById("visitlist");
        const li = document.createElement("li")
        li.innerHTML = names + " " + dni + " " + enterTime + " " + motive + " " + patente + " " + time + " " + mail;
        appendingTo.appendChild(li);
    }

}

function errData(err) {
    console.log("Error!" + err);

}