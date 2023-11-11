import { http, HttpResponse } from 'msw';
import { data } from './fixtures';

export const handlers = [
  http.get('/api', () => {
    return HttpResponse.json(data);
  }),
];
