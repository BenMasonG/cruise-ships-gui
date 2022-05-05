const Ship = require('../src/ship');
const Passenger = require('../src/passengers');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ship', () => {
    it('can be instantiated', () => {
      const portPorto = new Port ('Porto') 
      const portLisbon = new Port ('Lisbon')
      const itinerary = new Itinerary ([portLisbon, portPorto])
      const ship = new Ship ('Ship 1', itinerary)

     expect(ship).toBeInstanceOf(Object);
    });
  });

describe('Ship properties', () => {
    it('tests that I can create a new Ship and give it a name', () => {
      const portPorto = new Port ('Porto') 
      const portLisbon = new Port ('Lisbon')
      const itinerary = new Itinerary ([portLisbon, portPorto])
      const ship = new Ship ('Ship 1', itinerary)
  
      expect(ship.name).toEqual('Ship 1');
      
    });
  });

  describe('Ship properties', () => {
    it('tests when a ship is instantiated the previousPort property is set to null', () => {
      const portPorto = new Port ('Porto') 
      const portLisbon = new Port ('Lisbon')
      const itinerary = new Itinerary ([portLisbon, portPorto])
      const ship = new Ship ('Ship 1', itinerary)
  
      expect(ship.previousPort).toBeNull();
    });
  });

  describe('Ship properties', () => {
    it('tests that I can create a new Ship and give it a currentPort from an Itinerary', () => {
      
      const portPorto = new Port ('Porto') 
      const portLisbon = new Port ('Lisbon')
      const itinerary = new Itinerary ([portLisbon, portPorto])
      const itinerary2 = new Itinerary ([portPorto, portLisbon])
      const ship = new Ship ('Ship 1', itinerary)
      const ship2 = new Ship ('Ship 2', itinerary2)

      expect(ship.currentPort).toEqual(portLisbon)
      expect(ship2.currentPort).toEqual(portPorto)
    });
  });

  describe('the getPassenger method', () => {
    it('tests that the function allows the Ship to get Passengers', () => {
      const portPorto = new Port ('Porto') 
      const portLisbon = new Port ('Lisbon')
      const itinerary = new Itinerary ([portLisbon, portPorto])
      const ship = new Ship ('Ship 1', itinerary)
    
      ship.getPassenger('Matt')
      ship.getPassenger('Tom')
    
      expect(ship.passengers[0]).toEqual({name: 'Matt'});
      expect(ship.passengers[1]).toEqual({name: 'Tom'});
    });
  });

  describe('the setSail method', () => {
    it('tests that the function allows the Ship to get set sail', () => {
      const portPorto = new Port ('Porto') 
      const portLisbon = new Port ('Lisbon')
      const itinerary = new Itinerary ([portLisbon, portPorto])
      const ship = new Ship ('Ship 1', itinerary)
      ship.setSail()

      expect(ship.currentPort).toEqual(`Ship 1 is currently at sea.`);
      expect(ship.previousPort).toEqual(portLisbon);
    });
  });

  describe('the dock method', () => {
    it('tests that the function allows the Ship to dock at a new port', () => {
      const portPorto = new Port ('Porto') 
      const portLisbon = new Port ('Lisbon')
      const itinerary = new Itinerary ([portLisbon, portPorto])
      const itinerary2 = new Itinerary ([portPorto, portLisbon])
      const ship = new Ship ('Ship 1', itinerary)
      const ship2 = new Ship ('Ship 2', itinerary2)
      ship.setSail()
      ship.dock()
      ship2.setSail()
      ship2.dock()

      expect(ship.currentPort).toEqual(portPorto);
      expect(ship2.currentPort).toEqual(portLisbon);
    });
  });