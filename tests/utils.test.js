const { validateInputs } = require('../src/utils/validator');

describe('Input Validation Tests', () => {

  test('should pass with valid inputs', () => {
    expect(() => {
      validateInputs({
        city: 'Indianapolis',
        user: 'torvalds',
        save: true
      });
    }).not.toThrow();
  });

  test('should fail when city is missing', () => {
    expect(() => {
      validateInputs({
        user: 'torvalds'
      });
    }).toThrow();
  });

  test('should fail when user is missing', () => {
    expect(() => {
      validateInputs({
        city: 'Chicago'
      });
    }).toThrow();
  });

  test('should fail with short city name', () => {
    expect(() => {
      validateInputs({
        city: 'A',
        user: 'test'
      });
    }).toThrow();
  });

  test('should fail with short username', () => {
    expect(() => {
      validateInputs({
        city: 'Miami',
        user: 'A'
      });
    }).toThrow();
  });

});