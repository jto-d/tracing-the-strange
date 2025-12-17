'use client';

import { Box, Stack, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MotifDetailCard from './MotifDetailCard';

interface Motif {
  id: number;
  motifName: string;
  description: string | null;
  imagePath: string;
  backgroundImagePath: string;
  color: string;
}

interface MotifDetailProps {
  motif: Motif;
  onBack: () => void;
}

function Card({ motif }: { motif: Motif }) {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '640px' }}>
      <Image 
        src={motif.backgroundImagePath} 
        alt={motif.motifName} 
        fill
      />
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1,
          height: '100%',
          backgroundColor: motif.color,
          opacity: 0.6,
        }}
      />
      <MotifDetailCard motif={motif} />

    </Box>
  )
}

export default function MotifDetail({ motif, onBack }: MotifDetailProps) {
  return (
    <Stack direction="column">
      <Box
        sx={{
          padding: '20px',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <IconButton onClick={onBack} sx={{ color: 'text.primary' }}>
          <ArrowBackIcon />
          <Typography variant="body1" sx={{ ml: 1 }}>
            Back
          </Typography>
        </IconButton>
      </Box>

      <Stack direction="column">
        <Card motif={motif} />
        
        <Stack direction="column" spacing={2} padding="40px">
          <Typography variant="h4">
            Description
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {motif.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
          </Typography>

          <Typography variant="h4">
            Story Appearances
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {motif.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
