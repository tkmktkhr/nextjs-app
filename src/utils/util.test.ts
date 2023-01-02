jest.setTimeout(30000);

describe('array test', () => {
  describe('Utility', () => {
    test.each([
      { name: 'name', expectedName: 'name' },
      { name: 'name2', expectedName: 'name2' },
      // { name: 'name3', expectedName: 'name3' },
    ])('parseNumber() : %p', ({ name, expectedName }) => {
      expect(name).toEqual(expectedName);
    });
  });
});
