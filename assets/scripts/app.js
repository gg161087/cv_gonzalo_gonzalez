const carouselImages = document.querySelector('#carousel-images');
const certificados = []

let currentIndex = 0;

const showCeretificate = () => {
    carouselImages.innerHTML = `
        <img src="${certificados[currentIndex].url}" alt="${certificados[currentIndex].name}">
        <div class="caption">
            <p>Certificado: ${certificados[currentIndex].name}</p>
            <p>Entidad: ${certificados[currentIndex].entidade}</p>            
        </div>
    `;
}

const nextImage = () => {
    currentIndex++;
    if (currentIndex === certificados.length) {
        currentIndex = 0;
    }
    showCeretificate();
}

const prevImage = () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = certificados.length - 1;
    }
    showCeretificate();
}

fetch('./assets/database/certificates.json')
    .then(res => res.json())
    .then(data => {
        for (const i of data) {        
            certificados.push(i);
        }
        showCeretificate();
    document.querySelector('#prevBtn').addEventListener('click', prevImage);
    document.querySelector('#nextBtn').addEventListener('click', nextImage);
    })
    .catch(error => console.error(error));