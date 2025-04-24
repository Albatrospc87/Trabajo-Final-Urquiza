// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos con la clase 'animate-on-scroll'
    const elementosAnimables = document.querySelectorAll('.animate-on-scroll');
    
    // Crea un observador para detectar cuando los elementos son visibles
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        // Si el elemento es visible en la pantalla
        if (entry.isIntersecting) {
          // Añade la clase 'animated' para activar la animación
          entry.target.classList.add('animated');
        }
      });
    }, {
      threshold: 0.1 // Activa cuando el 10% del elemento es visible
    });
    
    // Observa cada elemento animable
    elementosAnimables.forEach(function(elemento) {
      observer.observe(elemento);
    });
  });