function Ship (name, startingPort) {
    this.name = name;
    this.startingPort = startingPort;
    this.previousPort = null;
    this.currentPort = startingPort;
    this.passengers = [];
};

function Port (name) {
    this.name = name;
};

function Passenger (name) {
    this.name = name;
};

function Itinerary (port, port2) {
    this.ports = [port, port2];
};

Ship.prototype.getPassenger = function (name) {
    const passenger = new Passenger (name)
    this.passengers.push(passenger)
};

Ship.prototype.setSail = function () {
    this.previousPort = this.currentPort;
    this.currentPort = `${this.name} is currently at sea.`;
};

Ship.prototype.dock = function (port) {
    this.currentPort = `${port.name}`
};

module.exports = Ship;