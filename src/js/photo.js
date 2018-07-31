// variables
const video = document.querySelector("#camera-stream"),
    image = document.querySelector("#snap"),
    start_camera = document.querySelector("#start-camera"),
    controls = document.querySelector(".controls"),
    take_photo_btn = document.querySelector("#take-photo"),
    delete_photo_btn = document.querySelector("#delete-photo"),
    download_photo_btn = document.querySelector("#save-photo"),
    error_message = document.querySelector("#error-message");


//Activar camara
navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

if (!navigator.getMedia) {
    displayErrorMessage("Tu navegador no sosporta conexiones con la web cam.");
} else {
    // Solicitar activar camara
    navigator.getMedia({ video: true },
        function(stream) {
            //Respuesta exitosa, crear url para imagen
            video.src = window.URL.createObjectURL(stream);
            // activar el video
            //video.play();
            video.onplay = function() {
                showVideo();
            };
        },
        // Error 
        function(err) {
            displayErrorMessage("Error > " + err.name, err);
        }
    );

}

// Boton para activar la camara en mobile
start_camera.addEventListener("click", function(e) {
    e.preventDefault();
    //activar el video de forma manual
    video.play();
    showVideo();
});


take_photo_btn.addEventListener("click", function(e) {
    e.preventDefault();
    const snap = takeSnapshot();
    // Mostrar imagen
    image.setAttribute("src", snap);
    image.classList.add("visible");
    // Activar botones de guardar y borrar
    delete_photo_btn.classList.remove("disabled");
    download_photo_btn.classList.remove("disabled");
    // Stetear atributos para descargar
    download_photo_btn.href = snap;
    // Pausar video
    video.pause();
});

// Borrar foto
delete_photo_btn.addEventListener("click", function(e) {
    e.preventDefault();
    // Esconder imagen
    image.setAttribute("src", "");
    image.classList.remove("visible");
    // Desactivar botones
    delete_photo_btn.classList.add("disabled");
    download_photo_btn.classList.add("disabled");
    // Cerrar el video
    video.play();

});

// Mostrar video y sus controles
function showVideo() {
    hideUI();
    video.classList.add("visible");
    controls.classList.add("visible");
}

// Tomar foto con canvas escondido
function takeSnapshot() {
    const hidden_canvas = document.querySelector("canvas"),
        context = hidden_canvas.getContext("2d");
    const width = video.videoWidth,
        height = video.videoHeight;
    if (width && height) {
        hidden_canvas.width = width;
        hidden_canvas.height = height;
        context.drawImage(video, 0, 0, width, height); // hacer una copia
        // hacer src para descargar la imagen
        return hidden_canvas.toDataURL("image/png");
    }
}

// Errores
function displayErrorMessage(error_msg, error) {
    error = error || "";
    if (error) {
        console.log(error);
    }
    error_message.innerText = error_msg;
    hideUI();
    error_message.classList.add("visible");
}


function hideUI() {
    controls.classList.remove("visible");
    start_camera.classList.remove("visible");
    video.classList.remove("visible");
    snap.classList.remove("visible");
    error_message.classList.remove("visible");
}