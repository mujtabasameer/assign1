function carr(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car_info = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var op = options_1[_a];
        var name_1 = op[0], value = op[1];
        car_info[name_1] = value;
    }
    return car_info;
}
console.log(carr('toyota', 'corolla', ['Model', '2022']));
