window.onload = () => {
    firebase.initializeApp(config);
    contenedor.innerHTML = "";
    firebase.database().ref("residentes")

    .on('child_added', (residentes) => {
        residentes.innerHTML += `
             <div class="col-6 myNameInpublications">
                <p>${residentes.val().name}</p>
            </div> 
            `;
    });
}