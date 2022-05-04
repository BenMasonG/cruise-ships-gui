const Port = require('../src/port');

describe('Port', () => {
    it('can be instantiated', () => {
     expect(new Port()).toBeInstanceOf(Object);
    });
  });

  describe('Port properties', () => {
    it('tests that I can create a new Port and give it a name', () => {
      const dover = new Port ('Dover')
      const porto = new Port ('Porto')
  
      expect(dover.name).toBe('Dover');
      expect(porto.name).toBe('Porto');
    });
  });

  describe('Port properties', () => {
    it('tests that a Port object is instantiated as expected', () => {
      const dover = new Port ('Dover')
  
      expect(dover).toEqual({name: 'Dover'});
      
    });
  });
