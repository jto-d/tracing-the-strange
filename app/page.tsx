'use client';

import { Typography } from '@mui/material';
import AppLayout from './components/Layout/AppLayout';
import Selector from './components/Selector/Selector';

export default function Home() {
  return (
    <AppLayout sidebar={<Selector />}>
      <Typography variant="h1">Tracing the Strange</Typography>
    </AppLayout>
  );
}
