miModulo.factory("configService", [
    function () {
        return {
            getLanguage: function () {
                return "es";
            },
            getServerURL: function () {
                return "http://localhost:8082/";
            },

        };
    },
]);