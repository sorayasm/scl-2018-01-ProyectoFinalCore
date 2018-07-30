firebase.initializeApp(config);

window.onload = () => {

    contenedor.innerHTML = "";
    firebase.database().ref("residentes")

    .on('child_added', (residentes) => {
        residentes.innerHTML += `
             <div class="">
                <p>${residentes.val().name}</p>
            </div> 
            `;
    });
}