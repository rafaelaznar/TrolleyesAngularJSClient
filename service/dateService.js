miModulo.factory("dateService", [
    function () {
        return {
            getDate: function (initialDate) {
                //Dividimos la fecha primero utilizando el espacio para obtener solo la fecha y el tiempo por separado
                var splitDate = initialDate.split(" ");
                var date = splitDate[0].split("/");
                var time = splitDate[1].split(":");
                //Guardamos los datos de cada array por separado
                var dd = date[0];
                var mm = date[1];
                var yyyy = date[2];
                var hh = time[0];
                var min = time[1];
                return moment(new Date(yyyy, mm, dd, hh, min));
            },
        };
    },
]);