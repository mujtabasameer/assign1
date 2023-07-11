var magician_name1 = ['Jhon', 'Nathan', 'Paul', 'Chris'];
var great_name = magician_name1.slice();
function make_great1(name1) {
    for (var i = 0; i < name1.length; i++) {
        name1[i] = 'Great ' + name1[i];
    }
}
function show_magicians1(name) {
    for (var _i = 0, name_1 = name; _i < name_1.length; _i++) {
        var namee = name_1[_i];
        console.log(namee);
    }
}
make_great1(great_name);
show_magicians1(great_name);
show_magicians1(magician_name1);
