
function Computer(className, classUnit, classCapacity) {
  this.className = className;
  this.classUnit = classUnit;
  this.classCapacity = classCapacity;
}

const softEgineering = new Computer("softEngineering", 3, 22);
console.log(softEgineering);
softEgineering.project = true
console.log(softEgineering);


const network = new Computer('network',3,54)
console.log(network)
network.book = true
console.log(network)
