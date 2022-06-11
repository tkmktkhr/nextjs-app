jest.setTimeout(30000);

describe('array test', () => {
  describe('Utility', () => {
    test.each([
      { name: 'name', expectedName: 'name' },
      { name: 'name', expectedName: 'name' },
      { name: 'name', expectedName: 'name' },
    ])('parseNumber() : %p', ({ name, expectedName }) => {
      expect(name).toEqual(expectedName);
    });
  });
});
