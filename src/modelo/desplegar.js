class desplegar {
    constructor(id) {
        this.elemento = document.getElementById(id);
    }

    mostrar() {
        this.elemento.style.display = "block";
    }

    ocultar() {
        this.elemento.style.display = "none";
    }
}