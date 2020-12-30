miModulo.factory("regexService", [
    function () {
        return {
            spanishDni: "^[0-9]{8,8}[A-Z]$",
            spanishNombrePropio: "^(?=.{2,20}$)[A-ZÁÉÍÓÚÀÈÒÇÑ][a-zñáéíóúüèòà]+(?: [A-ZÁÉÍÓÚÀÈÒÇÑ][a-zñáéíóúüèòà]+){0,3}?$",
            email: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
            integerZeroTo99: "^[0-9]{1,2}$",
            integer: "^[1-9][0-9]*",
            login: "^[A-Za-z0-9_-]*$"
        }
    }
])