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
console.log('invoke add: ',add(0,1) ); //invoke add
add(0,1);

// #2
console.log('invoke add.call: ',add.call(voltron,2,3));

add.call(voltron,2,3);


// #3
console.log('invoke add.apply: ',add.apply(optimus,[20,30]) );
add.apply(optimus,[20,30]);

// #4

var calculate= add.bind(bender);
calculate('drinking','beer');

console.log(calculate('drinking ','beer'));

/*While in the end you produced the correct result --
however documents say to bind add to calculate then invoke calculate with the arguments drinking and beer.
You should not be hardcoding values or arguments when you bind to other objects.*/