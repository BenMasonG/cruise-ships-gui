const Port = require('../src/port');

describe('Port', () => { 
  describe ('Port and it\'s methods', () => {
    let dover;
    let porto;
    let ship;
    let ship2;
    let ship3;

    beforeEach(() => {
      dover = new Port ('Dover');
      porto = new Port ('Porto');
      ship = {};
      ship2 = {};
      ship3 = {};
   });

    it('can be instantiated', () => {
     expect(new Port()).toBeInstanceOf(Object);
    });

    it('tests that I can create a new Port and give it a name', () => {
      
      expect(dover.name).toBe('Dover');
      expect(porto.name).toBe('Porto');
    });
  

  
    it('can add a ship', () => {
      dover.addShip(ship);

      expect(dover.ships).toContain(ship);
    });
  
    it('can remove a ship', () => {
      dover.addShip(ship);
      dover.addShip(ship2);

      dover.removeShip(ship)

     expect(dover.ships).toEqual([ship2]);
     expect(()=> dover.removeShip(ship3)).toThrowError('The named ship is not currently at this port.');
    });
  });
});
