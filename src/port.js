(function exportPort() {
function Port (name) {
    this.name = name;
    this.ships = [];
};

Port.prototype.addShip = function (ship) {
    this.ships.push(ship) 
};

Port.prototype.removeShip = function (ship) {
    const index = this.ships.indexOf(ship);
    if (index > -1) {
        this.ships.splice(index, 1)
    } else
    throw new Error('The named ship is not currently at this port.');
};

 if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
 } else {
     window.Port = Port;
 }
}());