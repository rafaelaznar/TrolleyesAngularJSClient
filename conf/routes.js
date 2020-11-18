miModulo.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider.when("/", {
      templateUrl: "common/home.html",
      controller: "HomeController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/home", {
      templateUrl: "common/home.html",
      controller: "HomeController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/login", {
      templateUrl: "common/login.html",
      controller: "LoginController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/logout", {
      templateUrl: "common/logout.html",
      controller: "LogoutController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/logout", {
      templateUrl: "common/logout.html",
      controller: "LogoutController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      },
    });

    $routeProvider.when("/producto/view/:id", {
      templateUrl: "app/producto/view.html",
      controller: "productoViewController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/usuario/view/:id", {
      templateUrl: "app/usuario/view.html",
      controller: "usuarioViewController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/usuario/remove/:id", {
      templateUrl: "app/usuario/remove.html",
      controller: "usuarioRemoveController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/producto/remove/:id", {
      templateUrl: "app/producto/remove.html",
      controller: "productoRemoveController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/compra/remove/:id", {
      templateUrl: "app/compra/remove.html",
      controller: "compraRemoveController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/compra/edit/:id", {
      templateUrl: "app/compra/edit.html",
      controller: "compraEditController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/tipousuario/view/:id", {
      templateUrl: "app/tipousuario/view.html",
      controller: "tipousuarioViewController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/carrito/view/:id", {
      templateUrl: "app/carrito/view.html",
      controller: "carritoViewController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/tipoproducto/view/:id", {
      templateUrl: "app/tipoproducto/view.html",
      controller: "tipoproductoViewController",

      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/tipoproducto/remove/:id", {
      templateUrl: "app/tipoproducto/remove.html",
      controller: "tipoproductoRemoveController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/compra/view/:id", {
      templateUrl: "app/compra/view.html",
      controller: "compraViewController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/factura/remove/:id", {
      templateUrl: "app/factura/remove.html",
      controller: "facturaRemoveController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/tipousuario/remove/:id", {
      templateUrl: "app/tipousuario/remove.html",
      controller: "tipousuarioRemoveController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/factura/view/:id", {
      templateUrl: "app/factura/view.html",
      controller: "facturaViewController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/tipoproducto/edit/:id", {
      templateUrl: "app/tipoproducto/edit.html",
      controller: "tipoproductoEditController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/factura/edit/:id", {
      templateUrl: "app/factura/edit.html",
      controller: "facturaEditController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/carrito/remove/:id", {
      templateUrl: "app/carrito/remove.html",
      controller: "carritoRemoveController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/tipoproducto/plist/:page?/:rpp?/:orderfield?/:orderdirection?", {
      templateUrl: "app/tipoproducto/plist.html",
      controller: "tipoproductoPlistController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/carrito/new/:id", {
      templateUrl: "app/carrito/new.html",
      controller: "carritoNewController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        },
      },
    });

    $routeProvider.when("/usuario/edit/:id", {
      templateUrl: "app/usuario/edit.html",
      controller: "usuarioEditController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        },
      },
    });

    $routeProvider.when("/tipoproducto/new", {
      templateUrl: "app/tipoproducto/new.html",
      controller: "tipoproductoNewController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        },
      },
    });

    $routeProvider.when("/compra/new/", {
      templateUrl: "app/compra/new.html",
      controller: "compraNewController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/tipousuario/new", {
      templateUrl: "app/tipousuario/new.html",
      controller: "tipousuarioNewController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        },
      },
    });

    $routeProvider.when("/usuario/new/", {
      templateUrl: "app/usuario/new.html",
      controller: "usuarioNewController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });
    $routeProvider.when("/factura/new/", {
      templateUrl: "app/factura/new.html",
      controller: "facturaNewController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/tipousuario/edit/:id", {
      templateUrl: "app/tipousuario/edit.html",
      controller: "tipousuarioEditController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });
    $routeProvider.when("/producto/edit/:id", {
      templateUrl: "app/producto/edit.html",
      controller: "productoEditController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/carrito/edit/:id", {
      templateUrl: "app/carrito/edit.html",
      controller: "carritoEditController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/producto/plist/:page?/:rpp?/:orderfield?/:orderdirection?", {
      templateUrl: "app/producto/plist.html",
      controller: "productoPlistController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/tipousuario/plist/:page?/:rpp?/:orderfield?/:orderdirection?", {
      templateUrl: "app/tipousuario/plist.html",
      controller: "tipousuarioPlistController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/compra/fill", {
      templateUrl: "app/compra/fill.html",
      controller: "compraFillController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.when("/producto/new/", {
      templateUrl: "app/producto/new.html",
      controller: "productoNewController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });  
  
    $routeProvider.when("/tipoproducto/fill", {
      templateUrl: "app/tipoproducto/fill.html",
      controller: "tipoproductoFillController",
      resolve: {
        auth: function (ajaxService) {
          return ajaxService
            .ajaxCheck()
            .then(function (result) {
              return { data: result };
            })
            .catch(function (result) {
              return { data: result };
            });
        }
      }
    });

    $routeProvider.otherwise({ redirectTo: "/" });
  },
]);
