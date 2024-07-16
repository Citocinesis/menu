const services = {
    masaje: {
        title: "Masaje Relajante",
        description: "Disfruta de un masaje relajante que alivia el estrés y mejora tu bienestar.",
        image: "masaje.jpg"
    },
    facial: {
        title: "Tratamiento Facial",
        description: "Renueva tu piel con nuestro tratamiento facial completo.",
        image: "facial.jpg"
    },
    manicura: {
        title: "Manicura y Pedicura",
        description: "Cuida tus manos y pies con nuestros servicios de manicura y pedicura.",
        image: "manicura.jpg"
    }
};

function showServiceDetails(serviceKey) {
    const service = services[serviceKey];
    document.getElementById('serviceTitle').textContent = service.title;
    document.getElementById('serviceDescription').textContent = service.description;
    document.getElementById('serviceImage').src = service.image;
    document.getElementById('serviceDetails').style.display = 'block';
    document.getElementById('services').style.display = 'none';
}

function hideServiceDetails() {
    document.getElementById('serviceDetails').style.display = 'none';
    document.getElementById('services').style.display = 'block';
}
