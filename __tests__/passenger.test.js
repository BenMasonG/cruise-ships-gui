const Passenger = require('../src/passengers');

describe('Passenger', () => {
    it('can be instantiated', () => {
     expect(new Passenger()).toBeInstanceOf(Object);
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