import useQueryParams from '../index';

test('Check Query Params', () => {
  const { param1, param2 } = useQueryParams();

  expect(param1).toBe('this is param 1');
  expect(param2).toBe('this is param 2');
});
