function Ship (name, startingPort) {
    this.name = name;
    this.startingPort = startingPort;
    this.passengers = [];
};

function Passenger (name) {
    this.name = name;
};

Ship.prototype.getPassenger = function (name) {
    const passenger = new Passenger (name)
    this.passengers.push(passenger)
};

module.exports = Ship, Passenger;