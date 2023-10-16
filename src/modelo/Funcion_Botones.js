class Funcion_Botones {

    constructor(buttonId, tarea) {
        this.input = document.getElementById("entrada");
        this.button = document.getElementById(buttonId);
        this.tarea = tarea;

        var _this = this;
        this.button.onclick = function() {
            _this.Tarea();
        };
    }

    Tarea() {
        var cursorPos = this.input.selectionStart;
        var textBefore = this.input.value.substring(0, cursorPos);
        var textAfter = this.input.value.substring(cursorPos);
        this.input.value = textBefore + this.tarea + textAfter;
    }

    initialize() {
        var _this = this;
        this.button.onclick = function() {
            _this.insertFraccion();
        };
    }
    

}