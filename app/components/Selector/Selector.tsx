'use client';

import { Box, Typography, Stack } from '@mui/material';

function SelectorHeader() {
  return (
    <Stack 
      direction="column"
      spacing={1} 
      padding="40px"
      height="142px"
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography variant="h2">Pu Songling's Strange Tales</Typography>
      <Typography variant="body1">Select a motif to learn more about its modern portrayals...</Typography>
    </Stack>
  );
}

function SelectorContent() {
  return (
    <Stack
      direction="column"
      spacing={2}
      px="40px"
      pt="40px"
    >
      <Typography variant="h3">Ghost</Typography>
      <Typography variant="h3">Ghost</Typography>
      <Typography variant="h3">Ghost</Typography>
      <Typography variant="h3">Ghost</Typography>
    </Stack>
  )
}

export default function Selector() {
  return (
    <Stack direction="column">
      <SelectorHeader />
      <SelectorContent />
    </Stack>
  );
}