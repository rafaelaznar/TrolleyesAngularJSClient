miModulo.factory("ajaxService", [
  "$http",
  function ($http) {
    return {
      ajaxLogin: function (username, password) {
        return $http.get(
          "http://localhost:8082/session/" +
            username +
            "/" +
            forge_sha256(password)
        );
      },
      ajaxLogout: function () {
        return $http.delete("http://localhost:8082/session/");
      },
      ajaxCheck: function () {
        return $http.get("http://localhost:8082/session/");
      },
      ajaxGet: function () {
        return $http.get("http://localhost:8082/session/privado");
      },
    };
  },
]);
