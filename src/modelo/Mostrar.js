class Mostrar {
    constructor() {
        this.botones = {};
    }

    registrarBoton(id, grupoId) {
        const grupo = new desplegar(grupoId);
        this.botones[id] = grupo;
        document.getElementById(id).addEventListener("click", () => {
            this.ocultarGrupos();
            grupo.mostrar();
        });
    }

    ocultarGrupos() {
        for (const botonId in this.botones) {
            if (this.botones.hasOwnProperty(botonId)) {
                this.botones[botonId].ocultar();
            }
        }
    }
}
