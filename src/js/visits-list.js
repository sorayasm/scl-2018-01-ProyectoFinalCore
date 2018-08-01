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
        const visitTo = visitas[k].visitTo;
        //console.log(names, dni, enterTime, motive, patente, time, mail, visitTo)
        const appendingTo = document.getElementById("visitlist");
        const div = document.createElement("div")
        //div.innerHTML = names + " " + dni + " " + enterTime + " " + motive + " " + patente + " " + time + " " + mail + "" + visitTo;
        div.innerHTML = `
        <div id="publicar">
            <div class="row">
                <div class="col-3 col-md-3 col-lg-3">
                    <div class="nombre">
                        <h5>Nombre Completo</h5>
                        <h5 class="font-weight-bold">${names}</h5>
                    </div>
                </div>
                <div class="col-3 col-md-3 col-lg-3">
                    <div class="rut">
                        <h5>Rut/DNI/Pasaporte</h5>
                        <h5 class="font-weight-bold">${dni}</h5>
                    </div>
                </div>
                <div class="col-3 col-md-3 col-lg-3">
                    <div class="horaEntrada">
                        <h5>Hora Entrada</h5>
                        <h5 class="font-weight-bold">${enterTime}</h5>
                    </div>
                </div>
                <div class="col-3 col-md-3 col-lg-3">
                    <div class="motivoVisita">
                        <h5>Motivo Visita</h5>
                        <h5 class="font-weight-bold">${motive}</h5>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-3 col-md-3 col-lg-3">
                    <div class="patente">
                        <h5>Patente</h5>
                        <h5 class="font-weight-bold">${patente}</h5>
                    </div>
                </div>
                <div class="col-3 col-md-3 col-lg-3">
                    <div class="duracionEstadia">
                        <h5>Duración Estadía</h5>
                        <h5 class="font-weight-bold">${time}</h5>
                    </div>
                </div>
                <div class="col-3 col-md-3 col-lg-3">
                    <div class="correo">
                        <h5>Correo</h5>
                        <h5 class="font-weight-bold">${mail}</h5>
                    </div>
                </div>
                <div class="col-3 col-md-3 col-lg-3">
                    <div class="visita">
                        <h5>Visita a</h5>
                        <h5 class="font-weight-bold">${visitTo}</h5>
                    </div>
                </div>
            </div>
        </div>
        `+ div.innerHTML;
        
        appendingTo.appendChild(div);
    }

}

function errData(err) {
    console.log("Error!" + err);

}