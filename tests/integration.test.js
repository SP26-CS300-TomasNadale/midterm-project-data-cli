describe('Integration Test', () => {

  test('basic math should work', () => {
    expect(2 + 2).toBe(4);
  });

  test('strings should match', () => {
    expect('project').toBe('project');
  });

  test('array should contain value', () => {
    expect(['node', 'jest']).toContain('jest');
  });

});