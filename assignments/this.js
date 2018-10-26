/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding looks to the left of the dot at call time
and that becomes the focus of the this keyword.
* 2. Explicit binding tells a function what the this keyword will be
* 3. New binding bounds the this keyword to new object being created
* 4. Window binding will tell the this keyword to default to the window if none of the other rules apply.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
//let myAge = function() {
//    console.log(this.age);
//};
//
//let peter = {
//    age: 42
//};
//
//myAge();
//window.age = 42;
//myAge();
// Principle 2

// code example for Implicit Binding
//let myCity = {
//    state: 'New york',
//    city: 'Staten Island',
//    homeTown: function() {
//        console.log(this.city);
//    }
//    
//};
//myCity.homeTown();

// Principle 3

// code example for New Binding
//let Animal = function(name, color, type) {
//    this.name = name;
//    this.color = color;
//    this.type = type;
//};
//
//let tiger = new Animal('bengal Tiger', 'White Tiger', 'Siberian Tiger')
//
//console.log(this.Animal);
// Principle 4

// code example for Explicit Binding
//let streetName = function() {
//    console.log('The city of ' + this.street + ' is the best');
//};
//
//let newBrighton = {
//    city: 'Staten Island',
//    street: 'New Brighton'
//};
//
//streetName.call(newBrighton);
//













