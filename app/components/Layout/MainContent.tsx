'use client';

import { Box } from '@mui/material';

interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <Box
      sx={{
        flex: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      {children}
    </Box>
  );
}
