import useQueryParams from '../index';

test('Check Query Params', () => {
  const { param1 } = useQueryParams();

  expect(param1).toBe('this is param 1');
});
