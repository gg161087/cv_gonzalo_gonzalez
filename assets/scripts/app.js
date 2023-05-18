const carouselImages = document.querySelector('#carousel-images');
const certificados = []

let currentIndex = 0;

const showImage = () => {
    carouselImages.innerHTML = `
        <img src="${certificados[currentIndex].url}" alt="${certificados[currentIndex].name}">
        <div class="caption">
            <p>${certificados[currentIndex].name}</p>
            <p>${certificados[currentIndex].entidade}</p>            
        </div>
    `;
}

const nextImage = () => {
    currentIndex++;
    if (currentIndex === certificados.length) {
        currentIndex = 0;
    }
    showImage();
}

const prevImage = () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = certificados.length - 1;
    }
    showImage();
}

fetch('./assets/database/certificates.json')
    .then(res => res.json())
    .then(data => {
        for (const i of data) {        
            certificados.push(i);
        }
        showImage();
    document.querySelector('#prevBtn').addEventListener('click', prevImage);
    document.querySelector('#nextBtn').addEventListener('click', nextImage);
    })
    .catch(error => console.error(error));