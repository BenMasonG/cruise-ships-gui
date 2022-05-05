const Port = require('../src/port');

describe('Port', () => {
    it('can be instantiated', () => {
     expect(new Port()).toBeInstanceOf(Object);
    });
  });

  describe('Port properties', () => {
    it('tests that I can create a new Port and give it a name', () => {
      const dover = new Port ('Dover');
      const porto = new Port ('Porto');
  
      expect(dover.name).toBe('Dover');
      expect(porto.name).toBe('Porto');
    });
  });

  describe('Port method addShip', () => {
    it('can add a ship', () => {
      const port = new Port ('Dover');
      const ship = {};

      port.addShip(ship);

     expect(port.ships).toContain(ship);
    });
  });

  describe('Port method removeShip', () => {
    it('can remove a ship', () => {
      const port = new Port ('Dover');
      const ship = {};
      const ship2 = {};
      const ship3 = {};
      port.addShip(ship);
      port.addShip(ship2);

      port.removeShip(ship)

     expect(port.ships).toEqual([ship2]);
     expect(()=> port.removeShip(ship3)).toThrowError('The named ship is not currently at this port.');
    });
  });
