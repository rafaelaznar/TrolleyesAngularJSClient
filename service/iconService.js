miModulo.factory("iconService", [
    function () {
        return {
            getIcon: function (icon) {
                switch (icon) {

                    //Iconos de las entidades
                    case "producto":
                        return "fas fa-gift";
                        break;
                    case "tipoproducto":
                        return "fas fa-cubes";
                        break;
                    case "usuario":
                        return "fas fa-user";
                        break;
                    case "tipousuario":
                        return "fas fa-user-friends";
                        break;
                    case "compra":
                        return "fas fa-cash-register";
                        break;
                    case "factura":
                        return "fas fa-file-invoice-dollar";
                        break;
                    case "carrito":
                        return "fas fa-shopping-cart";
                        break;

                    //Iconos de las operaciones
                    case "view":
                        return "fas fa-eye";
                        break;
                    case "plist":
                        return "fas fa-edit";
                        break;
                    case "remove":
                        return "fas fa-eraser";
                        break;
                    case "new":
                        return "fas fa-plus";
                        break;
                    case "edit":
                        return "fas fa-edit";
                        break;

                    //Iconos de los desplegables del menú
                    case "aleatorioMenu":
                        return "fas fa-random";
                        break;
                    case "listadoMenu":
                        return "fas fa-stream";
                        break;
                    case "newMenu":
                        return "far fa-file";
                        break;

                    //Iconos de login/logout
                    case "home":
                        return "fas fa-home";
                        break;
                    case "login":
                        return "fas fa-user-friends";
                        break;
                    case "logout":
                        return "fas fa-sign-out-alt";
                        break;
                    case "accesoSistema":
                        return "fas fa-key";
                        break;
                    case "entradaSistema":
                        return "fas fa-sign-in";
                        break;
                    case "salidaSistema":
                        return "fas fa-sign-in";
                        break;
                    case "resetLogin":
                        return "fas fa-brush";
                        break;
                    case "carroImagenes":
                        return "fas fa-cart-plus";
                        break;

                    //Iconos del apartado de herramientas
                    case "viewHerramientas":
                        return "fas fa-eye";
                        break;
                    case "editHerramientas":
                        return "fas fa-edit";
                        break;
                    case "removeHerramientas":
                        return "far fa-times";
                        break;

                    //Operación de búsqueda dentro de formulario
                    case "buscar":
                        return "fas fa-search";
                        break;

                    //Flechas
                    case "flechaUp":
                        return "fas fa-arrow-up";
                        break;
                    case "flechaDown":
                        return "fas fa-arrow-down";
                        break;

                    //Checks en formulario (pagado/noPagado)
                    case "ok":
                        return "fas fa-check-square";
                        break;
                    case "reject":
                        return "fas fa-times-circle";
                        break;

                    //Selections
                    case "check":
                        return "fas fa-check";
                        break;
                    case "vista":
                        return "fas fa-eye";
                        break;

                    //Status
                    case "success":
                        return "fas fa-check-circle";
                        break;
                    case "fail":
                        return "fas fa-bomb";
                        break;

                    //GitHub footer
                    case "footer":
                        return "fab fa-github";
                        break;
                }
            }
        };
    },
]);