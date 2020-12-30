miModulo.component('tipousuarioselection', {
  templateUrl: 'app/tipousuario/selection.html',
  bindings: {
    obj: '=',
    form: '='
  },
  controllerAs: 'c',
  controller: addModalVarController
});

function addModalVarController(ajaxService, iconService, titleService, regexService) {
  var self = this;

  self.entity = "tipousuario";
  self.iconService = iconService;
  self.titleService = titleService;
  self.regexService = regexService;

  self.status = {};
  self.status.success = "";
  self.status.error = "";

  self.neighbourhood = 2;

  self.page = 1;
  self.rpp = 10;
  self.orderField = "id";
  self.orderDirection = "asc";

  self.recarga = function (page, rpp, orderField, orderDirection) {
    ajaxService.ajaxPlist(self.entity, page, rpp, orderField, orderDirection).then(function (response) {
      self.entities = response.data.content;
      self.pages = response.data.totalPages;
      self.page = page;
      self.rpp = rpp;
      self.orderField = orderField;
      self.orderDirection = orderDirection;
      paginacion();
    }).catch(function (error) {
      self.status.error = "ERROR: Los " + self.entity + " con id " + self.id + " NO se ha podido leer.";
    });
  }

  function paginacion() {
    self.botonera = [];
    for (i = 1; i <= self.pages; i++) {
      if (i == 1) {
        self.botonera.push(i);
      } else if (i > (self.page - self.neighbourhood) && i < (self.page + self.neighbourhood)) {
        self.botonera.push(i);
      } else if (i == self.pages) {
        self.botonera.push(i);
      } else if (i == (self.page - self.neighbourhood) || i == (self.page + self.neighbourhood)) {
        self.botonera.push('...');
      }
    }
  }

  self.seleccionar = function (identificator) {
    ajaxService.ajaxGet(self.entity, identificator).then(function (response) {
      self.obj = response.data;
      self.form.inputIdTipousuario.$setDirty();
    }).catch(function (error) {
      self.obj = { id: "", nombre: "???" };
      self.form.inputIdTipousuario.$setInvalid();
    });
  }

  self.recarga(self.page, self.rpp, self.orderField, self.orderDirection);

}
