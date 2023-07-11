function sand_arr() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('summary :' + items);
}
sand_arr('cheese', 'chicken', 'olives');
sand_arr('tomato', 'salami', 'mustard');
sand_arr('lettuce', 'olives', 'tomato');
