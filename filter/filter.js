miModulo.filter('stringToDate', function () {
    return function (input) {
        if (!input)
            return null;

        var date = moment(input, "DD/MM/YYYY HH:mm");
        return date.isValid() ? date.toDate() : null;
    };
});

miModulo.filter('clipString', function ($filter) {
    return function (input) {
        if (input == null) {
            return "";
        }
        var max = 60;
        if (input.length > max) {
            return input.substr(0, max).trim() + " ...";

        } else {
            return input;
        }
    };
})