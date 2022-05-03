const Port = require('../src/cruise');

describe('Port', () => {
    it('can be instantiated', () => {
     expect(new Port()).toBeInstanceOf(Object);
    });
  });

  describe('Port properties', () => {
    it('tests that I can create a new Port and give it a name', () => {
      const dover = new Port ('Dover')
      const porto = new Port ('Porto')
  
      expect(dover.name).toEqual('Dover');
      expect(porto.name).toEqual('Porto');
    });
  });
