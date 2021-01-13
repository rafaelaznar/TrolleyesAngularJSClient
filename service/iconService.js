miModulo.factory("iconService", [
    function () {
        return {
            getIcon: function (icon) {
                switch (true) {

                    //Iconos de las entidades
                    case icon == "system":
                        return "fas fa-shopping-basket";
                        break;
                    case icon == "producto":
                        return "fas fa-gift";
                        break;
                    case icon == "tipoproducto":
                        return "fas fa-cubes";
                        break;
                    case icon == "usuario":
                        return "fas fa-user";
                        break;
                    case icon == "tipousuario":
                        return "fas fa-user-friends";
                        break;
                    case icon == "compra":
                        return "fas fa-cash-register";
                        break;
                    case icon == "factura":
                        return "fas fa-file-invoice-dollar";
                        break;
                    case icon == "carrito":
                        return "fas fa-shopping-cart";
                        break;

                    //Iconos de las operaciones
                    case icon == "view":
                        return "fas fa-eye";
                        break;
                    case icon == "plist":
                        return "fas fa-list";
                        break;
                    case icon == "remove":
                        return "fas fa-eraser";
                        break;
                    case icon == "new":
                        return "fas fa-plus";
                        break;
                    case icon == "edit":
                        return "fas fa-edit";
                        break;
                    case icon == "fill":
                        return "fas fa-random";
                        break;

                    //Iconos de los desplegables del menú
                    case icon == "aleatorioMenu":
                        return "fas fa-random";
                        break;
                    case icon == "listadoMenu":
                        return "fas fa-stream";
                        break;
                    case icon == "newMenu":
                        return "far fa-file";
                        break;

                    //Iconos de login/logout
                    case icon == "home":
                        return "fas fa-home";
                        break;
                    case icon == "login":
                        return "fas fa-user-friends";
                        break;
                    case icon == "logout":
                        return "fas fa-sign-out-alt";
                        break;
                    case icon == "accesoSistema":
                        return "fas fa-key";
                        break;
                    case icon == "entradaSistema":
                        return "fas fa-sign-in";
                        break;
                    case icon == "salidaSistema":
                        return "fas fa-sign-in";
                        break;
                    case icon == "resetLogin":
                        return "fas fa-brush";
                        break;
                    case icon == "carroImagenes":
                        return "fas fa-cart-plus";
                        break;

                    //Iconos del apartado de herramientas
                    case icon == "viewHerramientas":
                        return "fas fa-eye";
                        break;
                    case icon == "editHerramientas":
                        return "fas fa-edit";
                        break;
                    case icon == "removeHerramientas":
                        return "far fa-times";
                        break;
                    case icon == "printHerramientas":
                        return "fas fa-print";
                        break;

                    //Operación de búsqueda dentro de formulario
                    case icon == "buscar":
                        return "fas fa-search";
                        break;

                    //Flechas
                    case icon == "flechaUp":
                        return "fas fa-arrow-up";
                        break;
                    case icon == "flechaDown":
                        return "fas fa-arrow-down";
                        break;

                    //Checks en formulario (pagado/noPagado)
                    case icon == "ok":
                        return "fas fa-check-square";
                        break;
                    case icon == "reject":
                        return "fas fa-times-circle";
                        break;

                    //Selections
                    case icon == "check":
                        return "fas fa-check";
                        break;
                    case icon == "vista":
                        return "fas fa-eye";
                        break;

                    //Status
                    case icon == "success":
                        return "fas fa-check-circle";
                        break;
                    case icon == "fail":
                        return "fas fa-bomb";
                        break;

                    //GitHub footer
                    case icon == "footer":
                        return "fab fa-github";
                        break;

                    //Impresión
                    case icon.startsWith("report"):
                        return "fas fa-copy";
                        break;

                }
            }
        };
    },
]);