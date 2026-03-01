// Obtener elementos del menú
const btnMenu = document.getElementById('btn-menu');
const menuDesplegable = document.getElementById('menu-desplegable');
const itemsMenu = document.querySelectorAll('.menu-item');

const seccionPeliculas = document.getElementById('seccion-peliculas');
const seccionDirectores = document.getElementById('seccion-directores');
const filtrosPeliculas = document.getElementById('filtros-peliculas');
const filtrosDirectores = document.getElementById('filtros-directores');

const botonesGenero = document.querySelectorAll('#filtros-peliculas .btn');
const botonesPais = document.querySelectorAll('#filtros-directores .btn');

const peliculas = document.querySelectorAll('.pelicula');
const directores = document.querySelectorAll('.director');

// Evento para abrir/cerrar menú
btnMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuDesplegable.classList.toggle('activo');
}

// Cerrar menú cuando se hace click en un item
itemsMenu.forEach(item => {
    item.addEventListener('click', seleccionarCategoria);
});

function seleccionarCategoria(e) {
    const categoria = e.target.dataset.categoria;
    
    if (categoria === 'peliculas') {
        seccionPeliculas.style.display = 'block';
        seccionDirectores.style.display = 'none';
        filtrosPeliculas.style.display = 'block';
        filtrosDirectores.style.display = 'none';
    } else {
        seccionPeliculas.style.display = 'none';
        seccionDirectores.style.display = 'block';
        filtrosPeliculas.style.display = 'none';
        filtrosDirectores.style.display = 'block';
    }
    
    menuDesplegable.classList.remove('activo');
}

// Cerrar menú cuando se hace click fuera de él
document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-categoria') && !e.target.closest('#btn-menu')) {
        menuDesplegable.classList.remove('activo');
    }
});

// Eventos para filtrar películas
botonesGenero.forEach(boton => {
    boton.addEventListener('click', filtrarPeliculas);
});

// Función para filtrar películas
function filtrarPeliculas(e) {
    const generoSeleccionado = e.target.dataset.genero;

    // Actualizar estado del botón activo
    botonesGenero.forEach(boton => {
        boton.classList.remove('btn-activo');
    });
    e.target.classList.add('btn-activo');

    // Filtrar y mostrar/ocultar películas
    peliculas.forEach(pelicula => {
        const generoPelicula = pelicula.dataset.genero;

        if (generoSeleccionado === 'todos' || generoPelicula === generoSeleccionado) {
            pelicula.classList.remove('oculta');
            pelicula.style.animation = 'none';
            setTimeout(() => {
                pelicula.style.animation = 'fadeIn 0.6s ease-out';
            }, 10);
        } else {
            pelicula.classList.add('oculta');
        }
    });
}

// Eventos para filtrar directores
botonesPais.forEach(boton => {
    boton.addEventListener('click', filtrarDirectores);
});

// Función para filtrar directores
function filtrarDirectores(e) {
    const paisSeleccionado = e.target.dataset.pais;

    // Actualizar estado del botón activo
    botonesPais.forEach(boton => {
        boton.classList.remove('btn-activo');
    });
    e.target.classList.add('btn-activo');

    // Filtrar y mostrar/ocultar directores
    directores.forEach(director => {
        const paisDirector = director.dataset.pais;

        if (paisSeleccionado === 'todos' || paisDirector === paisSeleccionado) {
            director.classList.remove('oculta');
            director.style.animation = 'none';
            setTimeout(() => {
                director.style.animation = 'fadeIn 0.6s ease-out';
            }, 10);
        } else {
            director.classList.add('oculta');
        }
    });
}

// Efecto de carga inicial
window.addEventListener('load', () => {
    peliculas.forEach((pelicula, index) => {
        pelicula.style.animationDelay = `${index * 0.1}s`;
    });

    directores.forEach((director, index) => {
        director.style.animationDelay = `${index * 0.1}s`;
    });
});
