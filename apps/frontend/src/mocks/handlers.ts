import { http, HttpResponse } from 'msw';
import { data } from './fixtures';

export const handlers = [
  http.get('http://localhost:4200/api', () => {
    return HttpResponse.json(data);
  }),
];
