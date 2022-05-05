const Ship = require('../src/ship');

describe('Ship', () => {
  describe ('Ship, it\'s properties and it\'s methods', () => {
    let portPorto 
    let portLisbon 
    let itinerary 
    let itinerary2
    let ship 
    let ship2
    let ship3

    beforeEach(() => {
      portPorto = {name: 'Porto', ships: [], addShip: jest.fn(), removeShip: jest.fn()};
      portLisbon = {name: 'Lisbon', ships: [], addShip: jest.fn(), removeShip: jest.fn()};
      itinerary = {ports: [portLisbon, portPorto]};
      itinerary2 = {ports: [portPorto, portLisbon]};
      ship = new Ship ('Ship 1', itinerary);
      ship2 = new Ship ('Ship 2', itinerary2);
      ship3 = new Ship ('Ship 3', itinerary);
    });


    it('can be instantiated', () => {
     expect(ship).toBeInstanceOf(Object);
    });
  

    it('is added to port on instantiation', () => {
     expect(portLisbon.addShip).toHaveBeenCalledWith(ship);
    });
  

    it('tests that I can create a new Ship and give it a name', () => {
      expect(ship.name).toEqual('Ship 1');
    });
  

    it('tests when a ship is instantiated the previousPort property is set to null', () => {
      expect(ship.previousPort).toBeNull();
    });
  

    it('tests that I can create a new Ship and give it a currentPort from an Itinerary', () => {
      expect(ship.currentPort).toEqual(portLisbon)
      expect(ship2.currentPort).toEqual(portPorto)
    });
  

    it('tests that the function allows the Ship to get Passengers', () => {
      ship.getPassenger('Matt')
      ship.getPassenger('Tom')
    
      expect(ship.passengers[0]).toEqual({name: 'Matt'});
      expect(ship.passengers[1]).toEqual({name: 'Tom'});
    });
  

    it('tests that the function allows the Ship to get Passengers will throw an error if the ship is not docked', () => {
      ship.docked = false;
    
      expect(() => ship.getPassenger()).toThrowError("The ship is currently at sea so cannot get passengers.");
    });
  

    it('tests that the function allows the Ship to set sail and alters the correct properties', () => {
      ship.setSail();

      expect(ship.currentPort).toEqual(`Ship 1 is currently at sea.`);
      expect(ship.previousPort).toEqual(portLisbon);
      expect(ship.docked).toEqual(false);
      expect(ship.portsVisited).toEqual(1);
      expect(ship.previousPort.removeShip).toHaveBeenCalledWith(ship);
    });
  

    it('tests that the ship cannot set sail if it is at the last port in the itinerary', () => {
      ship.setSail()
      ship.dock()

      expect(() => ship.setSail()).toThrowError("All ports in Itinerary visited so the ship cannot set sail.");
    });
  

    it('tests that the ship cannot set sail if it is not docked', () => {
      ship.docked = false
      
      expect(() => ship.setSail()).toThrowError("The ship has already set sail.");
    });
  

    it('tests that the function allows the Ship to dock at a new port and alters the correct ship properties', () => {
      ship.setSail()
      ship.dock()
      ship2.setSail()
      ship2.dock()

      expect(ship.currentPort).toEqual(portPorto);
      expect(ship2.currentPort).toEqual(portLisbon);
      expect(ship.docked).toEqual(true);
      expect(ship2.docked).toEqual(true);
      expect(ship.currentPort.addShip).toHaveBeenCalledWith(ship);
      expect(ship2.currentPort.addShip).toHaveBeenCalledWith(ship2);
    });
  

    it('tests that the function will throw an error if the ship is already docked', () => {
      expect(() => ship.dock()).toThrowError("The ship is already docked.");
    });
  });
});