miModulo.factory("commonService", [
  "configService",
  function (configService) {
    return {
      pagination: function (pages, page) {
        botonera = [];
        for (i = 1; i <= pages; i++) {
          if (i == 1) {
            botonera.push(i);
          } else if (i > (page - configService.neighbourhood) && i < (page + configService.neighbourhood)) {
            botonera.push(i);
          } else if (i == pages) {
            botonera.push(i);
          } else if (i == (page - configService.neighbourhood) || i == (page + configService.neighbourhood)) {
            botonera.push('...');
          }
        }
        return botonera;
      },
      getPage: function (page) {
        if (page == undefined) {
          return configService.defaultPage;
        } else {
          return parseInt(page);
        }
      },
      getRpp: function (rpp) {
        if (rpp == undefined) {
          return configService.defaultRpp;
        } else {
          return parseInt(rpp);
        }
      },
      getOrderfield: function (orderfield) {
        if (orderfield == undefined) {
          return configService.defaultOrderfield;
        } else {
          return orderfield;
        }
      },
      getOrderdirection: function (orderdirection) {
        if (orderdirection == undefined) {
          return configService.defaultOrderdirection;
        } else {
          return orderdirection;
        }
      },
      getFilter: function (filter) {
        if (filter == undefined) {
          return configService.defaultFilter;
        } else {
          return filter;
        }
      }
    }
  }
])