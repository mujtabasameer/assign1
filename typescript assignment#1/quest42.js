var magician_namee = ['Jhon', 'Nathan', 'Paul', 'Chris'];
function make_great(name1) {
    for (var i = 0; i < name1.length; i++) {
        name1[i] = 'Great ' + name1[i];
    }
}
function show_magicianss(name) {
    for (var _i = 0, name_1 = name; _i < name_1.length; _i++) {
        var namee = name_1[_i];
        console.log(namee);
    }
}
show_magicianss(magician_namee);
make_great(magician_namee);
show_magicianss(magician_namee);
