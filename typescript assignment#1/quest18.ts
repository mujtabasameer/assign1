let city:string[]=['Paris','New York','London','Milan','Tokoyo'];
console.log('Orignal Order:'+city);

let city_sorted=city.slice().sort();
console.log('Alphabetical Order:'+city_sorted);
console.log('Orignal Order:'+city);

let reverse_sorted_city=city.slice().sort().reverse();
console.log('Reverse Alphabetical Order:'+reverse_sorted_city);
console.log('Orignal Order:'+city);

city.reverse();
console.log('Reverse Order:'+city);

city.reverse();
console.log('Orignal Order:'+city);

city.slice().sort();
console.log('Alphabetical Order:'+city);

city.slice().sort().reverse();
console.log('Reverse Alphabetical Order:'+city);