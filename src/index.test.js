import range from './index';

test('test range of 50 items', () => {
    expect(range(0).length).toBe(0);
});

test('test range of 5 items', () => {
    expect(range(5).length).toBe(5);
});

test('test range of 1000 items', () => {
    expect(range(1000).length).toBe(1000);
});