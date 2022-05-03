function Ship (name, startingPort) {
    this.name = name;
    this.startingPort = startingPort;
    this.currentPort = startingPort;
    this.passengers = [];
};

function Passenger (name) {
    this.name = name;
};

Ship.prototype.getPassenger = function (name) {
    const passenger = new Passenger (name)
    this.passengers.push(passenger)
};

Ship.prototype.setSail = function () {
    this.currentPort = `${this.name} is currently at sea.`
}

module.exports = Ship, Passenger;