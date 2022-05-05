function Ship (name, itinerary) {
    this.name = name;
    this.itinerary = itinerary;
    this.previousPort = null;
    this.currentPort = itinerary.ports[0];
    this.passengers = [];
    this.portsVisited = 0;
    this.docked = true;
};

function Port (name) {
    this.name = name;
};

function Passenger (name) {
    this.name = name;
};

function Itinerary (port) {
    this.ports = port;
};

Ship.prototype.getPassenger = function (name) {
    const passenger = new Passenger (name)
    this.passengers.push(passenger)
};

Ship.prototype.setSail = function () {
    if (this.docked === false) {
        throw new Error ("The ship has already set sail.")
    } else if (this.portsVisited === this.itinerary.ports.length - 1) {
        throw new Error ("All ports in Itinerary visited so the ship cannot set sail.")
    } else {
    this.docked = false;
    this.previousPort = this.currentPort;
    this.currentPort = `${this.name} is currently at sea.`;
    this.portsVisited += 1;
    };
};

Ship.prototype.dock = function () {
    if (this.docked === true) {
        throw new Error("The ship is already docked.")
    } else {
    this.docked = true;
    this.currentPort = this.itinerary.ports[this.portsVisited];
    };
};

module.exports = Ship;