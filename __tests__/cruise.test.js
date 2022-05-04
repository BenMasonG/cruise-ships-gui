const Ship = require('../src/ship');
const Passenger = require('../src/passengers');
const Port = require('../src/port');

describe('Ship', () => {
    it('can be instantiated', () => {
     expect(new Ship()).toBeInstanceOf(Object);
    });
  });

describe('Passenger', () => {
    it('can be instantiated', () => {
     expect(new Passenger()).toBeInstanceOf(Object);
    });
  });

describe('Ship properties', () => {
    it('tests that I can create a new Ship and give it a name', () => {
      const ship = new Ship ('Ship 1')
      const ship2 = new Ship ('Ship 2')
  
      expect(ship.name).toEqual('Ship 1');
      expect(ship2.name).toEqual('Ship 2');
    });
  });

  describe('Ship properties', () => {
    it('tests that I can create a new Ship and give it a startingPort', () => {
      
      const portPorto = new Port ('Porto') 
      const portLisbon = new Port ('Lisbon')
      const ship = new Ship ('Ship 1', portPorto.name)
      const ship2 = new Ship ('Ship 2', portLisbon.name)

      expect(ship.startingPort).toEqual('Porto')
      expect(ship2.startingPort).toEqual('Lisbon')
    });
  });


  describe('Passenger properties', () => {
    it('tests that I can create a new Passenger and give them a name', () => {
      const passenger = new Passenger ('Tom')
      const passenger2 = new Passenger ('Matt')
  
      expect(passenger.name).toEqual('Tom');
      expect(passenger2.name).toEqual('Matt');
    });
  });

  describe('the getPassenger method', () => {
    it('tests that the function allows the Ship to get Passengers', () => {
      const ship = new Ship ('Ship 1')
      ship.getPassenger('Matt')
      ship.getPassenger('Tom')
    
      expect(ship.passengers[0]).toEqual({name: 'Matt'});
      expect(ship.passengers[1]).toEqual({name: 'Tom'});
    });
  });

  describe('the setSail method', () => {
    it('tests that the function allows the Ship to get set sail', () => {
      const ship = new Ship ('Ship 1', 'Lisbon')
      ship.setSail()

      expect(ship.currentPort).toEqual(`Ship 1 is currently at sea.`);
    });
  });

  describe('the dock method', () => {
    it('tests that the function allows the Ship to dock at a new port', () => {
      const portPorto = new Port ('Porto') 
      const portLisbon = new Port ('Lisbon')
      const ship = new Ship ('Ship 1', portPorto.name)
      const ship2 = new Ship ('Ship 2', portLisbon.name)
      ship.dock(portLisbon)
      ship2.dock(portPorto)

      expect(ship.currentPort).toEqual(`Lisbon`);
      expect(ship2.currentPort).toEqual(`Porto`);
    });
  });