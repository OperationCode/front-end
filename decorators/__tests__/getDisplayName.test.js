import getDisplayName from '../getDisplayName';

describe('getDisplayName', () => {
  it("should return displayName if it's all component has", () => {
    const componentWithDisplayName = {
      displayName: 'Test',
    };

    expect(getDisplayName(componentWithDisplayName)).toStrictEqual(
      componentWithDisplayName.displayName,
    );
  });

  it('should return displayName even if it has name as well', () => {
    const componentWithDisplayNameAndName = {
      displayName: 'Test1',
      name: 'Yo',
    };

    expect(getDisplayName(componentWithDisplayNameAndName)).toStrictEqual(
      componentWithDisplayNameAndName.displayName,
    );
  });

  it("should return name if it's all component has", () => {
    const componentWithName = {
      name: 'Yo',
    };

    expect(getDisplayName(componentWithName)).toStrictEqual(componentWithName.name);
  });

  it("should return 'Component' if no name or displayName exists", () => {
    const componentWithoutName = {};

    expect(getDisplayName(componentWithoutName)).toStrictEqual('Component');
  });
});
