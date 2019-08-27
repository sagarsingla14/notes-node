console.log('Starting Functions');

var square = x => x*x;

console.log(square(10));


var user = {
  name: "Sagar",
  simpleFunction: () => {
    console.log(arguments);
    console.log(this.name);
  },
  aeroFunction () {
    console.log(arguments);
    console.log(this.name);
  }
};

user.simpleFunction(1,2,3);
user.aeroFunction(1,2,3);
