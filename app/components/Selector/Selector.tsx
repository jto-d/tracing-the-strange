'use client';

import { Box, Typography, Stack } from '@mui/material';
import SelectorCard from './SelectorCard';

const motifCategories = [
  'Beasts',
  'Demons',
  'Dragons',
  'Fairies',
  'Fox Spirits',
  'Ghosts',
  'Giants',
  'Gods',
  'Insect Spirit',
  'Living Corpses',
  'Plant-Spirits',
  'Skin-Changers',
  'Snakes',
  'Trolls',
];

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
      spacing={3}
      p="40px"
    >
      {motifCategories.map((category) => (
        <SelectorCard 
          key={category}
          image={`/images/motifs/categories/${category}.png`} 
        />
      ))}
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