import { Meta, StoryObj } from '@storybook/react';

import { Menu } from './Menu';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../../../pages/AboutPage';
import { EmployeesPage } from '../../../pages/EmployeesPage';

const meta = {
  title: 'Layout/Menu',
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof Menu>;

export const _Menu = () => (
  <MemoryRouter initialEntries={['/']}>
    <Routes>
      <Route path={'/'} element={<Menu />}></Route>
      <Route path={'/about'} element={<AboutPage />}></Route>
      <Route path={'/employees'} element={<EmployeesPage />}></Route>
    </Routes>
  </MemoryRouter>
);
