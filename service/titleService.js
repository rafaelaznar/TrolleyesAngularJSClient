miModulo.factory("titleService", [
    "configService",
    function (configService) {
        return {
            getTitle: function (operation, entity) {
                var language = configService.getLanguage();



                switch (entity) {
                    case "system":
                        switch (operation) {

                            case "login":
                                switch (language) {
                                    case "es":
                                        return "Entrada al sistema";
                                        break;
                                    case "en":
                                        return "Login to the system";
                                        break;
                                    case "va":
                                        return "Entrada al sistema";
                                        break;
                                }
                                break;
                            case "logout":
                                switch (language) {
                                    case "es":
                                        return "Salida del sistema";
                                        break;
                                    case "en":
                                        return "Logout the system";
                                        break;
                                    case "va":
                                        return "Eixida del sistema";
                                        break;
                                }
                                break;
                            case "home":
                                switch (language) {
                                    case "es":
                                        return "Bienvenidos a Trolleyes";
                                        break;
                                    case "en":
                                        return "Welcome to Trolleyes";
                                        break;
                                    case "va":
                                        return "Benvinguts a Trolleyes";
                                        break;
                                }
                                break;
                            case "reports":
                                switch (language) {
                                    case "es":
                                        return "Informes";
                                        break;
                                    case "en":
                                        return "Reports";
                                        break;
                                    case "va":
                                        return "Informes";
                                        break;
                                }
                                break;

                        }
                        break;
                    case "producto":
                        switch (operation) {
                            case "view":
                                switch (language) {
                                    case "es":
                                        return "Vista de producto";
                                        break;
                                    case "en":
                                        return "View of the product";
                                        break;
                                    case "va":
                                        return "Vista de producte";
                                        break;
                                }
                                break;
                            case "plist":
                                switch (language) {
                                    case "es":
                                        return "Listado de productos";
                                        break;
                                    case "en":
                                        return "List of the product";
                                        break;
                                    case "va":
                                        return "Llistat de producte";
                                        break;
                                }
                                break;
                            case "remove":
                                switch (language) {
                                    case "es":
                                        return "Borrado de un producto";
                                        break;
                                    case "en":
                                        return "Delete a product";
                                        break;
                                    case "va":
                                        return "Esborrat de producte";
                                        break;
                                }
                                break;
                            case "new":
                                switch (language) {
                                    case "es":
                                        return "Nuevo producto";
                                        break;
                                    case "en":
                                        return "New product";
                                        break;
                                    case "va":
                                        return "Nou producte";
                                        break;
                                }
                                break;
                            case "edit":
                                switch (language) {
                                    case "es":
                                        return "Edición de producto";
                                        break;
                                    case "en":
                                        return "Edit product";
                                        break;
                                    case "va":
                                        return "Edició de producte";
                                        break;
                                }
                                break;
                            case "fill":
                                switch (language) {
                                    case "es":
                                        return "Creación aleatoria de productos";
                                        break;
                                    case "en":
                                        return "Random products creation batch";
                                        break;
                                    case "va":
                                        return "Creació aleatòria de productes";
                                        break;
                                }
                                break;
                                break;
                        }
                        break;
                    case "tipoproducto":
                        switch (operation) {
                            case "view":
                                switch (language) {
                                    case "es":
                                        return "Vista de tipo de producto";
                                        break;
                                    case "en":
                                        return "View of the type of a product";
                                        break;
                                    case "va":
                                        return "Vista de tipus de producte";
                                        break;
                                }
                                break;
                            case "plist":
                                switch (language) {
                                    case "es":
                                        return "Listado de tipo de producto";
                                        break;
                                    case "en":
                                        return "List of the types of a product";
                                        break;
                                    case "va":
                                        return "Llistat de tipus de producte";
                                        break;
                                }
                                break;
                            case "remove":
                                switch (language) {
                                    case "es":
                                        return "Borrado de un tipo de producto";
                                        break;
                                    case "en":
                                        return "Delete a type of a product";
                                        break;
                                    case "va":
                                        return "Esborrat d'un tipus de producte";
                                        break;
                                }
                                break;
                            case "new":
                                switch (language) {
                                    case "es":
                                        return "Nuevo tipo de producto";
                                        break;
                                    case "en":
                                        return "New type of a product";
                                        break;
                                    case "va":
                                        return "Nou tipus de producte";
                                        break;
                                }
                                break;
                            case "edit":
                                switch (language) {
                                    case "es":
                                        return "Edición de tipo de producto";
                                        break;
                                    case "en":
                                        return "Edit type of a product";
                                        break;
                                    case "va":
                                        return "Edició de tipus de producte";
                                        break;
                                }
                                break;
                            case "fill":
                                switch (language) {
                                    case "es":
                                        return "Creación aleatoria de tipos de producto";
                                        break;
                                    case "en":
                                        return "Random product type creation batch";
                                        break;
                                    case "va":
                                        return "Creació aleatòria de tipus de producte";
                                        break;
                                }
                                break;
                        }
                        break;

                    case "usuario":
                        switch (operation) {
                            case "view":
                                switch (language) {
                                    case "es":
                                        return "Vista de usuario";
                                        break;
                                    case "en":
                                        return "View of the user";
                                        break;
                                    case "va":
                                        return "Vista d'usuari";
                                        break;
                                }
                                break;
                            case "plist":
                                switch (language) {
                                    case "es":
                                        return "Listado de usuarios";
                                        break;
                                    case "en":
                                        return "List of the users";
                                        break;
                                    case "va":
                                        return "Llistat d'usuaris";
                                        break;
                                }
                                break;
                            case "remove":
                                switch (language) {
                                    case "es":
                                        return "Borrado de un usuario";
                                        break;
                                    case "en":
                                        return "Delete a user";
                                        break;
                                    case "va":
                                        return "Esborrat d'un usuari";
                                        break;
                                }
                                break;
                            case "new":
                                switch (language) {
                                    case "es":
                                        return "Nuevo usuario";
                                        break;
                                    case "en":
                                        return "New user";
                                        break;
                                    case "va":
                                        return "Nou usuari";
                                        break;
                                }
                                break;
                            case "edit":
                                switch (language) {
                                    case "es":
                                        return "Edición de usuario";
                                        break;
                                    case "en":
                                        return "Edit user";
                                        break;
                                    case "va":
                                        return "Edició de usuari";
                                        break;
                                }
                                break;
                            case "fill":
                                switch (language) {
                                    case "es":
                                        return "Creación aleatoria de usuarios";
                                        break;
                                    case "en":
                                        return "Random users creation batch";
                                        break;
                                    case "va":
                                        return "Creació aleatòria de usuaris";
                                        break;
                                }
                                break;
                        }
                        break;

                    case "tipousuario":
                        switch (operation) {
                            case "view":
                                switch (language) {
                                    case "es":
                                        return "Vista de tipo de usuario";
                                        break;
                                    case "en":
                                        return "View of the type of a user";
                                        break;
                                    case "va":
                                        return "Vista de tipus d'usuari";
                                        break;
                                }
                                break;
                            case "plist":
                                switch (language) {
                                    case "es":
                                        return "Listado de tipo de usuario";
                                        break;
                                    case "en":
                                        return "List of the types of a user";
                                        break;
                                    case "va":
                                        return "Llistat dels tipus d'usuari";
                                        break;
                                }
                                break;
                            case "remove":
                                switch (language) {
                                    case "es":
                                        return "Borrado de un tipo de usuario";
                                        break;
                                    case "en":
                                        return "Deletion of one type of a user";
                                        break;
                                    case "va":
                                        return "Esborrat d'un tipus d'usuari";
                                        break;
                                }
                                break;
                            case "new":
                                switch (language) {
                                    case "es":
                                        return "Nuevo tipo de usuario";
                                        break;
                                    case "en":
                                        return "New type of a user";
                                        break;
                                    case "va":
                                        return "Nou tipus d'usuari";
                                        break;
                                }
                                break;
                            case "edit":
                                switch (language) {
                                    case "es":
                                        return "Edición de tipo de usuario";
                                        break;
                                    case "en":
                                        return "Edit type of a user";
                                        break;
                                    case "va":
                                        return "Edició de tipus d'usuari";
                                        break;
                                }
                                break;
                            case "fill":
                                break;
                        }
                        break;

                    case "compra":
                        switch (operation) {
                            case "view":
                                switch (language) {
                                    case "es":
                                        return "Vista de una compra";
                                        break;
                                    case "en":
                                        return "View of a purchase";
                                        break;
                                    case "va":
                                        return "Vista d'una compra";
                                        break;
                                }
                                break;
                            case "plist":
                                switch (language) {
                                    case "es":
                                        return "Listado de una compra";
                                        break;
                                    case "en":
                                        return "List of purchases";
                                        break;
                                    case "va":
                                        return "Llistat de compres";
                                        break;
                                }
                                break;
                            case "remove":
                                switch (language) {
                                    case "es":
                                        return "Borrado de una compra";
                                        break;
                                    case "en":
                                        return "Delete a purchase";
                                        break;
                                    case "va":
                                        return "Esborrat d'una compra";
                                        break;
                                }
                                break;
                            case "new":
                                switch (language) {
                                    case "es":
                                        return "Nueva compra";
                                        break;
                                    case "en":
                                        return "New purchase";
                                        break;
                                    case "va":
                                        return "Nova compra";
                                        break;
                                }
                                break;
                            case "edit":
                                switch (language) {
                                    case "es":
                                        return "Edición de compra";
                                        break;
                                    case "en":
                                        return "Edit purchase";
                                        break;
                                    case "va":
                                        return "Edició de compra";
                                        break;
                                }
                                break;
                            case "fill":
                                switch (language) {
                                    case "es":
                                        return "Creación aleatoria de compras";
                                        break;
                                    case "en":
                                        return "Random purchase creation batch";
                                        break;
                                    case "va":
                                        return "Creació aleatòria de compres";
                                        break;
                                }
                                break;
                        }
                        break;

                    case "factura":
                        switch (operation) {
                            case "view":
                                switch (language) {
                                    case "es":
                                        return "Vista de una factura";
                                        break;
                                    case "en":
                                        return "View of a invoice";
                                        break;
                                    case "va":
                                        return "Vista d'una factura";
                                        break;
                                }
                                break;
                            case "plist":
                                switch (language) {
                                    case "es":
                                        return "Listats de factures";
                                        break;
                                    case "en":
                                        return "List of a invoice";
                                        break;
                                    case "va":
                                        return "Llistat de factures";
                                        break;
                                }
                                break;
                            case "remove":
                                switch (language) {
                                    case "es":
                                        return "Borrado de factura";
                                        break;
                                    case "en":
                                        return "Deletion of an invoice";
                                        break;
                                    case "va":
                                        return "Esborrat de factura";
                                        break;
                                }
                                break;
                            case "new":
                                switch (language) {
                                    case "es":
                                        return "Nueva factura";
                                        break;
                                    case "en":
                                        return "New invoice";
                                        break;
                                    case "va":
                                        return "Nova factura";
                                        break;
                                }
                                break;
                            case "edit":
                                switch (language) {
                                    case "es":
                                        return "Edición de factura";
                                        break;
                                    case "en":
                                        return "Edit invoice";
                                        break;
                                    case "va":
                                        return "Edició de factura";
                                        break;
                                }
                                break;
                            case "fill":
                                switch (language) {
                                    case "es":
                                        return "Creación aleatoria de facturas";
                                        break;
                                    case "en":
                                        return "Random invoices creation batch";
                                        break;
                                    case "va":
                                        return "Creació  aleatòria de factures";
                                        break;
                                }
                                break;
                        }
                        break;

                    case "carrito":
                        switch (operation) {
                            case "view":
                                switch (language) {
                                    case "es":
                                        return "Vista de un producto en carrito";
                                        break;
                                    case "en":
                                        return "View of a product in shopping cart";
                                        break;
                                    case "va":
                                        return "Vista d'un producte en el carret";
                                        break;
                                }
                                break;
                            case "plist":
                                switch (language) {
                                    case "es":
                                        return "Listado de productos en carrito";
                                        break;
                                    case "en":
                                        return "List of products in shopping cart";
                                        break;
                                    case "va":
                                        return "Llistat de productes en carret";
                                        break;
                                }
                                break;
                            case "remove":
                                switch (language) {
                                    case "es":
                                        return "Borrado de producto en el carrito";
                                        break;
                                    case "en":
                                        return "Deletion of a product in shopping cart";
                                        break;
                                    case "va":
                                        return "Esborrat de producte en el carret";
                                        break;
                                }
                                break;
                            case "new":
                                switch (language) {
                                    case "es":
                                        return "Nuevo producto en el carrito";
                                        break;
                                    case "en":
                                        return "New product in shopping cart";
                                        break;
                                    case "va":
                                        return "Nou producte en el carret";
                                        break;
                                }
                                break;
                                break;
                            case "edit":
                                switch (language) {
                                    case "es":
                                        return "Edición de producto en el carrito";
                                        break;
                                    case "en":
                                        return "Edit product in shopping cart";
                                        break;
                                    case "va":
                                        return "Edició de producte en el carret";
                                        break;
                                }
                                break;
                            case "fill":

                                break;
                        }
                        break;
                }
            }
        }
    }

]);