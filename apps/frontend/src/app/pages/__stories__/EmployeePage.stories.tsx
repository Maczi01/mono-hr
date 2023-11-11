import type { Meta, StoryObj } from '@storybook/react';

import { AboutPage } from '../AboutPage';
import { EmployeesPage } from '../EmployeesPage';
import { http, HttpResponse } from 'msw';
import { data } from '../../../mocks/fixtures';

const meta = {
  title: 'Pages/EmployeesPage',
  component: EmployeesPage,
} satisfies Meta<typeof EmployeesPage>;

export default meta;

type Story = StoryObj<typeof EmployeesPage>;

export const _EmployeesPage: Story = {};

_EmployeesPage.parameters = {
  msw: {
    handlers: [
      http.get('/api', () => {
        return HttpResponse.json(data);
      }),
    ],
  },
};
