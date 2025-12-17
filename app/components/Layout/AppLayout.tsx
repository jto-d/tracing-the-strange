'use client';

import { Stack } from '@mui/material';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

interface AppLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function AppLayout({ sidebar, children }: AppLayoutProps) {
  return (
    <Stack direction="row" spacing={4}>
      <Sidebar>{sidebar}</Sidebar>
      <MainContent>{children}</MainContent>
    </Stack>
  );
}
