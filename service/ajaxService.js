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
      ajaxNew: function (entidad, data) {
        return $http.post("http://localhost:8082/" + entidad + "/", data);
      },
      ajaxPlist: function (entidad, page, size, sortfield, sortdirection, filter) {
        strRequest = "http://localhost:8082/" + entidad + "/page/?";
        if (page) {
          strRequest += "page=" + (--page);
        } else {
          strRequest += "page=1";
        }
        if (size) {
          strRequest += "&size=" + size;
        } else {
          strRequest += "&size=10";
        }
        if (sortfield) {
          if (sortdirection) {
            strRequest += "&sort=" + sortfield + "," + sortdirection;
          } else {
            strRequest += "&sort=" + sortfield;
          }
        }
        if (filter) {
          strRequest += "&filter=" + filter;
        }
        return $http.get(strRequest);
      },
      ajaxPlistx: function (entidad, page, size, sortfield, sortdirection, campox, id) {
        strRequest = "http://localhost:8082/" + entidad + "/page/" + campox + "/" + id + "/?";
        if (page) {
          strRequest += "page=" + (--page);
        } else {
          strRequest += "page=1";
        }
        if (size) {
          strRequest += "&size=" + size;
        } else {
          strRequest += "&size=10";
        }
        if (sortfield) {
          if (sortdirection) {
            strRequest += "&sort=" + sortfield + "," + sortdirection;
          } else {
            strRequest += "&sort=" + sortfield;
          }
        }
        return $http.get(strRequest);
      },
      ajaxFill: function (entidad, numero) {
        return $http.post("http://localhost:8082/" + entidad + "/fill/" + numero);
      },
      ajaxCarritoAdd: function (producto, cantidad) {
        return $http.post("http://localhost:8082/carrito/" + producto + "/" + cantidad);
      },
      ajaxAllx: function (entidad, subentidad, id) {
        strRequest = "http://localhost:8082/" + entidad + "/all/" + subentidad + "/" + id;
        return $http.get(strRequest);
      },
    };
  },
]);
