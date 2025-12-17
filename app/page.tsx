'use client';

import AppLayout from './components/Layout/AppLayout';
import Selector from './components/Selector/Selector';
import Dashboard from './components/Dashboard/Dashboard';

export default function Home() {
  return (
    <AppLayout sidebar={<Selector />}>
      <Dashboard />
    </AppLayout>
  );
}
