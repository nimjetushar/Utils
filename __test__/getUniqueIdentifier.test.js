import { getUiqueIdentifier } from "../build";

describe('getUniqueIdentifier', () => {
    it('should be defined', () => {
      expect(() => {
        getUiqueIdentifier;
      }).toBeDefined();
    });
  
    it('should return a value', () => {
      expect(() => {
        getUiqueIdentifier();
      }).toBeDefined();
    });
  
    it('should return random values', () => {
      const v1 = getUiqueIdentifier();
      const v2 = getUiqueIdentifier();
      const v3 = getUiqueIdentifier();
      const v4 = getUiqueIdentifier();
  
      expect(v1).not.toEqual(v2);
      expect(v1).not.toEqual(v3);
      expect(v1).not.toEqual(v4);
      expect(v2).not.toEqual(v3);
      expect(v3).not.toEqual(v4);
    });
  });