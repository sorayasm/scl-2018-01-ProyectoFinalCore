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
        const div = document.createElement("div")
        //div.innerHTML = names + " " + mail + " " + company + " " + phone;
        div.innerHTML = 
        `<div id="publicar">
            <div class="row">
                <div class="col-6 col-md-6 col-lg-6">
                    <div class="nombre">
                        <h5>Nombre Completo</h5>
                        <h5 class="font-weight-bold">${names}</h5>
                    </div>
                </div>
                <div class="col-6 col-md-6 col-lg-6">
                    <div class="correo">
                        <h5>Correo</h5>
                        <h5 class="font-weight-bold">${mail}</h5>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-6 col-md-6 col-lg-6">
                    <div class="empresa">
                        <h5>Empresa</h5>
                        <h5 class="font-weight-bold">${company}</h5>
                    </div>
                </div>
                <div class="col-6 col-md-6 col-lg-6">
                    <div class="teléfono">
                        <h5>Teléfono</h5>
                        <h5 class="font-weight-bold">${phone}</h5>
                    </div>
                </div>
            </div>
        </div>
        `
        
        
        
        appendingTo.appendChild(div);
    }

}

function errData(err) {
    console.log("Error!" + err);

}