miModulo.component('tipousuarioselection', {
  templateUrl: 'app/tipousuario/selection.html',
  bindings: {
    obj: '=',
    form: '='
  },
  controllerAs: 'c',
  controller: addModalVarController
});

function addModalVarController(ajaxService, iconService, titleService, regexService, commonService) {
  var self = this;

  self.entity = "tipousuario";
  self.iconService = iconService;
  self.titleService = titleService;
  self.regexService = regexService;

  self.status = { success: "", error: "" };

  self.neighbourhood = 2;

  self.page = 1;
  self.rpp = 10;
  self.orderField = "id";
  self.orderDirection = "asc";

  self.recarga = function (page, rpp, orderField, orderDirection) {
    ajaxService.ajaxPlist(self.entity, page, rpp, orderField, orderDirection).then(function (response) {
      self.page = page;
      self.rpp = rpp;
      self.orderField = orderField;
      self.orderDirection = orderDirection;
      if (self.page > response.data.totalPages) {
        self.page = response.data.totalPages;
        ajaxService.ajaxPlist(self.entity, self.page, rpp, orderField, orderDirection).then(function (response) {
          self.entitiesData = response.data.content;
          self.pages = response.data.totalPages;
          self.registers = response.data.totalElements;
          self.botonera = commonService.pagination(self.pages, self.page);
        }).catch(function (error) {
          self.status.error = "Error de comunicación con el servidor.";
        });
      } else {
        self.entitiesData = response.data.content;
        self.pages = response.data.totalPages;
        self.registers = response.data.totalElements;
        self.botonera = commonService.pagination(self.pages, self.page);
      }
    }).catch(function (error) {
      self.status.error = "Error de comunicación con el servidor.";
    });
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
