var name1 = 'Eric jhonson';
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());
console.log(name1.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
