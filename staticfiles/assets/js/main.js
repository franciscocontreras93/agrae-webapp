/*
Template Name: Massive
Author: GrayGrids
*/

(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }

    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }



        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // for menu scroll 
    var pageLink = document.querySelectorAll('.page-scroll');

    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

    //===== close navbar-collapse when a  clicked
    let navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".collapse");

    document.querySelectorAll(".page-scroll").forEach(e =>
        e.addEventListener("click", () => {
            navbarToggler.classList.remove("active");
            navbarCollapse.classList.remove('show')
        })
    );
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    })
    // WOW active
    new WOW().init();

    let filterButtons = document.querySelectorAll('.portfolio-btn-wrapper button');
    filterButtons.forEach(e =>
        e.addEventListener('click', () => {

            let filterValue = event.target.getAttribute('data-filter');
            iso.arrange({
                filter: filterValue
            });
        })
    );

    var elements = document.getElementsByClassName("portfolio-btn");
    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = function () {
            var el = elements[0];
            while (el) {
                if (el.tagName === "BUTTON") {
                    el.classList.remove("active");
                }
                el = el.nextSibling;
            }
            this.classList.add("active");
        };
    };

    //====== counter up 
    var cu = new counterUp({
        start: 0,
        duration: 2000,
        intvalues: true,
        interval: 100,
        append: " ",
    });
    cu.start();
})();


const typed = new Typed('.typed', {
    strings: [
        '<span class="word-change h1">aGricultura</span>',
        '<span class="word-change h1">Ganader??a</span>',
        '<span class="word-change h1">aGuas</span>',
        '<span class="word-change h1">tecnoloG??a</span>',
        '<span class="word-change h1">investiGaci??n</span>',
        '<span class="word-change h1">inGenier??a </span>',
        '<span class="word-change h1">alGas </span>',
    ],

    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 85, // Velocidad en mlisegundos para poner una letra,
    startDelay: 1000, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 60, // Velocidad en milisegundos para borrrar una letra,
    //smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1000, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: false, // Mostrar cursor palpitanto
    // cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
});