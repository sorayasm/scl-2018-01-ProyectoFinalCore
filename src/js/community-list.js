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
        //div.innerHTML = names + " " + dni + " " + company + " " + mail + " " + phone + " " + position;
        div.innerHTML = 
        `<div id="publicar">
            <div class="row">
                <div class="col-4 col-md-4 col-lg-4">
                    <div class="nombre">
                        <h5>Nombre Completo</h5>
                        <h5 class="font-weight-bold">${names}</h5>
                    </div>
                </div>
                <div class="col-4 col-md-4 col-lg-4">
                    <div class="correo">
                        <h5>Correo</h5>
                        <h5 class="font-weight-bold">${mail}</h5>
                    </div>
                </div>
                <div class="col-4 col-md-4 col-lg-4">
                    <div class="cargo">
                        <h5>Cargo</h5>
                        <h5 class="font-weight-bold">${position}</h5>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-4 col-md-4 col-lg-4">
                    <div class="rut">
                        <h5>Rut/DNI/Pasaporte</h5>
                        <h5 class="font-weight-bold">${dni}</h5>
                    </div>
                </div>
                <div class="col-4 col-md-4 col-lg-4">
                    <div class="empresa">
                        <h5>Empresa</h5>
                        <h5 class="font-weight-bold">${company}</h5>
                    </div>
                </div>
                <div class="col-4 col-md-4 col-lg-4">
                    <div class="teléfono">
                        <h5>Teléfono</h5>
                        <h5 class="font-weight-bold">${phone}</h5>
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