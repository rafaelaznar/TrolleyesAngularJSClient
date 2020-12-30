miModulo.factory("ajaxService", [
  "$http",
  "configService",
  function ($http, configService) {
    return {
      ajaxLogin: function (username, password) {
        var parameter = JSON.stringify({
          login: username,
          password: forge_sha256(password),
        });
        return $http.post(configService.getServerURL() + "session/", parameter);
      },
      ajaxLogout: function () {
        return $http.delete(configService.getServerURL() + "session/");
      },
      ajaxCheck: function () {
        return $http.get(configService.getServerURL() + "session/");
      },
      ajaxGet: function (entidad, id) {
        return $http.get(configService.getServerURL() + entidad + "/" + id);
      },
      ajaxRemove: function (entidad, id) {
        return $http.delete(configService.getServerURL() + entidad + "/" + id);
      },
      ajaxUpdate: function (entidad, id, data) {
        return $http.put(configService.getServerURL() + entidad + "/" + id, data);
      },
      ajaxNew: function (entidad, data) {
        return $http.post(configService.getServerURL() + entidad + "/", data);
      },
      ajaxPlist: function (entidad, page, size, sortfield, sortdirection, filter) {
        strRequest = configService.getServerURL() + entidad + "/page/?";
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
        strRequest = configService.getServerURL() + entidad + "/page/" + campox + "/" + id + "/?";
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
        return $http.post(configService.getServerURL() + entidad + "/fill/" + numero);
      },
      ajaxCarritoAdd: function (producto, cantidad) {
        return $http.post(configService.getServerURL() + "/carrito/" + producto + "/" + cantidad);
      },
      ajaxAllx: function (entidad, subentidad, id) {
        strRequest = configService.getServerURL() + entidad + "/all/" + subentidad + "/" + id;
        return $http.get(strRequest);
      },
    };
  },
]);
