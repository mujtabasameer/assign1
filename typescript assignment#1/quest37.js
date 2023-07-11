function make_shirt_new(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love typescript'; }
    console.log("Size of shirt is '".concat(size, "' and the message to be printed is '").concat(message, "'."));
}
make_shirt_new();
make_shirt_new('medium');
make_shirt_new('small', 'The shirt is made out of recycled materials');
