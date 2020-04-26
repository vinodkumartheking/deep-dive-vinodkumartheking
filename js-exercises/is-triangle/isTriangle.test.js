import { isTriangle } from './isTriangle';

describe('isTriangle', () => {
  it('should return true if triangle can be formed given three lines', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
  });

  it('should return false if triangle can not be formed given three lines', () => {
    expect(isTriangle(1, 4, 2)).toBe(false);
  });

  it('should return false if triangle can not be formed given three lines', () => {
    expect(()=>{isTriangle(1, 4, 2, 5)}).toThrow();
  });

  
  it('should return false if triangle can not be formed given three lines', () => {
    expect(()=>{isTriangle(1, 4, 2, a)}).toThrow();
  });

  it('should return false if triangle can not be formed given three lines', () => {
    expect(()=>{isTriangle(a, b, b)}).toThrow();
  });
  
});
