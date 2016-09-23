var Robot = function (name) {
  this.name = name;

};

function add ( op1, op2 ) {
  this.name = this.name || "Humans";
  return this.name + " can count to " + (op1 + op2);
}

var voltron = new Robot("Voltron");
var bender = new Robot("Bender Rodriguez");
var optimus = new Robot("Optimus Prime");
var megaman = new Robot("Mega Man");
var bmo = new Robot("B-Mo");
var wall_e = new Robot("Wall-E");

// #1
console.log('invoke add: ',add(0,1) );

add(0,1);

//invoke the add function with 2 arguments, 0 and 1

// #2
console.log('invoke add.call: ',add.call(voltron,2,3));

add.call(voltron,2,3);

/*invoke the add function within the context of the object named voltron,
passing in 2 arguments, 2 and 3 (using call())*/

// #3
console.log('invoke add.apply: ',add.apply(optimus,[20,30]) );

add.apply(optimus,[20,30]);

/*invoke the add function within the context of the object named optimus,
in 2 arguments, 20 and 30 (using apply())*/

// #4
var calculate= add.bind(bender);
calculate('drinking','beer');

console.log(calculate('drinking ','beer'));

/*bind the function add to a new function named calculate
with the context of the object bender (using bind())
invoke the calculate passing in 2 arguments, "drinking " and "beer"*/
