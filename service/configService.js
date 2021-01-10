miModulo.factory("configService", [
    function () {
        return {
            getLanguage: function () {
                return "es";
            },
            getServerURL: function () {
                return "http://localhost:8082/";
            },
            neighbourhood: 2,
            defaultPage: 1,
            defaultRpp: 10,
            defaultOrderfield: "id",
            defaultOrderdirection: "asc",
            defaultFilter: ""
        };
    },
]);