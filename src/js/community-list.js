firebase.initializeApp(config);
firebase.database().ref("residentes").on("value", gotData, errData)

// Funciones para lista
function gotData(data) {
    community = data.val();
    const keys = Object.keys(community);
    //console.log(keys);
    for (i = 0; i < keys.length; i++) {
        const k = keys[i];
        const names = community[k].name;
        const dni = community[k].DNI;
        const company = community[k].company;
        const mail = community[k].mail;
        const phone = community[k].phone;
        const position = community[k].position;
        //console.log(names, dni, enterTime, motive, patente, time, mail)
        const appendingTo = document.getElementById("residentlist");
        const div = document.createElement("div")
        div.innerHTML = names + " " + dni + " " + company + " " + mail + " " + phone + " " + position;
        appendingTo.appendChild(div);
    }

}

function errData(err) {
    console.log("Error!" + err);

}