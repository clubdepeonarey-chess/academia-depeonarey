<script>
  let slideIndex = 1;
  showSlides(slideIndex);

  // Función para avanzar/retroceder diapositivas
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Función para ir a una diapositiva específica
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  // Función principal para mostrar las diapositivas
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("product-slide");
    let dots = document.getElementsByClassName("dot");

    // Asegurarse de que el índice esté dentro del rango
    if (n > slides.length) {
      slideIndex = 1; // Vuelve al principio si se pasa
    }
    if (n < 1) {
      slideIndex = slides.length; // Va al final si se retrocede desde el principio
    }

    // Ocultar todas las diapositivas
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Quitar la clase 'active' de todos los puntos
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    // Mostrar la diapositiva actual y aplicar la animación fade
    if (slides.length > 0 && slideIndex > 0 && slideIndex <= slides.length) {
        slides[slideIndex - 1].style.display = "block";
        // Asegurarse de que la clase 'fade' se aplique correctamente para la animación
        // Es posible que necesites remover y añadir la clase para que la animación se reinicie
        slides[slideIndex - 1].style.animation = "none"; // Resetea la animación
        setTimeout(() => { // Aplica la animación después de un breve retraso
            slides[slideIndex - 1].style.animation = "";
        }, 10);
    }


    // Añadir la clase 'active' al punto correspondiente
    if (dots.length > 0 && slideIndex > 0 && slideIndex <= dots.length) {
        dots[slideIndex - 1].className += " active";
    }
  }

  // Opcional: Autoplay (descomenta si lo necesitas)
  /*
  let slideInterval = setInterval(function() {
    plusSlides(1);
  }, 5000); // Cambia cada 5 segundos

  // Pausar autoplay al pasar el mouse sobre el contenedor
  let carouselContainer = document.querySelector('.product-carousel-container');
  carouselContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
  carouselContainer.addEventListener('mouseleave', () => {
    clearInterval(slideInterval); // Limpia el intervalo anterior
    slideInterval = setInterval(function() { plusSlides(1); }, 5000); // Reinicia el intervalo
  });
  */

</script>
