function showDescription(languageId) {
    // Ocultar todas las descripciones
    const descriptions = document.querySelectorAll('.language-description');
    descriptions.forEach(desc => desc.classList.remove('active'));

    // Mostrar solo la descripción correspondiente
    const selectedDescription = document.getElementById(languageId);
    selectedDescription.classList.add('active');
}


showDescription('c-cpp');