import fetchData from '../http';
import { getLevel } from '../getLevel';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('check status = ok', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: '1',
  });

  const response = getLevel(1);
  const result = 'Ваш текущий уровень: 1';
  expect(response).toBe(result);
});

test('check status = error', () => {
  fetchData.mockReturnValue({
    status: 'error',
    level: '1',
  });

  const response = getLevel(1);
  const result = 'Информация об уровне временно недоступна';
  expect(response).toBe(result);
});
