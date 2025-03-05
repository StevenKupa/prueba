document.addEventListener("DOMContentLoaded", function () {
    iniciarMenu();
    iniciarCarruselTestimonios();
    iniciarAnimaciones();
});

// === MENÚ RESPONSIVO ===
function iniciarMenu() {
    const nav = document.querySelector("nav ul");
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "☰ Menú";
    toggleBtn.classList.add("menu-toggle");
    document.querySelector("nav").prepend(toggleBtn);

    toggleBtn.addEventListener("click", () => {
        nav.classList.toggle("activo");
    });
}

// === CARRUSEL DE TESTIMONIOS ===
function iniciarCarruselTestimonios() {
    const testimonios = document.querySelectorAll(".testimonio");
    let indice = 0;

    function mostrarTestimonio() {
        testimonios.forEach((t, i) => {
            t.style.display = i === indice ? "block" : "none";
        });
        indice = (indice + 1) % testimonios.length;
    }

    mostrarTestimonio();
    setInterval(mostrarTestimonio, 5000);
}

// === EFECTOS ANIMADOS EN SECCIONES ===
function iniciarAnimaciones() {
    const secciones = document.querySelectorAll("section");
    
    function animarSecciones() {
        const alturaPantalla = window.innerHeight;
        secciones.forEach(sec => {
            const distanciaTop = sec.getBoundingClientRect().top;
            if (distanciaTop < alturaPantalla * 0.8) {
                sec.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", animarSecciones);
    animarSecciones();
}
