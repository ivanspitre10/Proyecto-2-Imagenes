document.getElementById('loadImages').addEventListener('click', function() {
    const keywords = document.getElementById('imageSearch').value.trim();
    
    if (!keywords) {
        alert('Por favor, ingrese un término de búsqueda.');
        return;
    }

    const apiKey = '33084461-04b42eef307313caa2c0d41db';
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(keywords)}&image_type=photo`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const imagesContainer = document.getElementById('imagesContainer');
            imagesContainer.innerHTML = '';
            data.hits.forEach(hit => {
                const img = document.createElement('img');
                img.src = hit.webformatURL;
                img.style.width = '200px';
                img.style.height = '200px';
                img.style.margin = '5px';
                imagesContainer.appendChild(img);   
            });
        })
        .catch(error => console.error('Error fetching images:', error));
});