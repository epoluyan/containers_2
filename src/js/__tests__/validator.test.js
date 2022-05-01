import ErrorRepository from '../errorRepository ';

test('should return error 500', () => {
  const newError = new ErrorRepository(500, 'Internal Server Error');
  expect(newError.translate(500)).toEqual('Internal Server Error');
});

test('should return unknown error', () => {
  const newError = new ErrorRepository(500, 'Internal Server Error');
  expect(newError.translate(404)).toEqual('Unknown error');
});
