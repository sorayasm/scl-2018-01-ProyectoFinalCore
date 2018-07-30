window.onload = () => {

    contenedor.innerHTML = "";
    firebase.database().ref("residentes")

    .on('child_added', (friendList) => {
        residentes.innerHTML += `
             <div class="col-6 myNameInpublications">
                <p>${friendList.val().username}</p>
            </div> 
            `;
    });
}