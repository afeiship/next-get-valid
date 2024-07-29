require('../src');

describe('nx.getValid', () => {
  test('normal get without isValid Function', function () {
    const obj = { name: 'fei' };
    const res1 = nx.getValid(obj, 'a.b.c');
    const res2 = nx.getValid(obj, 'a.b.c', 'defaults')
    expect(res1).toBe(undefined);
    expect(res2).toBe('defaults');
  });

  test('get valid use default valid hooks', () => {
    const obj = { name: 'fei', age: null };
    const res1 = nx.getValid(obj, 'a.b.c', 'defaults', 'valid');
    const res2 = nx.getValid(obj, 'age', 0, 'valid');
    expect(res1).toBe('defaults');
    expect(res2).toBe(0);
  });

  test('get valid use cutomize hooks with GET_VALID_HOOKS', () => {
    const obj = { name: 'fei', age: null, hobby: 'other' };
    nx.GET_VALID_HOOKS.special = (value) => value !== 'other';
    const res = nx.getValid(obj, 'hobby', 'basketball', 'special');
    expect(res).toBe('basketball');
  });

  test('get valid use custom valid function', () => {
    const obj1 = { score: 60, }
    const obj2 = { score: 50, }
    const obj3 = { score: 80, }

    const isValid = (value) => value > 60;
    const res1 = nx.getValid(obj1, 'score', 0, isValid);
    const res2 = nx.getValid(obj2, 'score', 0, isValid);
    const res3 = nx.getValid(obj3, 'score', 0, isValid);

    expect(res1).toBe(0);
    expect(res2).toBe(0);
    expect(res3).toBe(80);
  });
});
