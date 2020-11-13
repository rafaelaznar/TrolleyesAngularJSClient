miModulo.factory("ajaxService", [
  "$http",
  function ($http) {
    return {
      ajaxLogin: function (username, password) {
        var parameter = JSON.stringify({
          login: username,
          password: forge_sha256(password),
        });
        return $http.post("http://localhost:8082/session/", parameter);
      },
      ajaxLogout: function () {
        return $http.delete("http://localhost:8082/session/");
      },
      ajaxCheck: function () {
        return $http.get("http://localhost:8082/session/");
      },
      ajaxGet: function (entidad, id) {
        return $http.get("http://localhost:8082/" + entidad + "/" + id);
      },
      ajaxRemove: function (entidad, id) {
        return $http.delete("http://localhost:8082/" + entidad + "/" + id);
      },
      ajaxUpdate: function (entidad, id, data) {
        return $http.put("http://localhost:8082/" + entidad + "/" + id, data);
      },
    };
  },
]);
