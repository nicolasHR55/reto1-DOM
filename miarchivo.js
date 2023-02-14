function cambiarTema(nombreTema) {
    document.body.className = nombreTema;
  }

  function setTheme(theme) {
    document.getElementById('hoja-vida').className = theme;
}
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.classList.contains('active')) {
        section.classList.remove('active');
    } else {
        section.classList.add('active');
    }
}