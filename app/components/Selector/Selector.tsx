'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Stack, Slide } from '@mui/material';
import SelectorCard from './SelectorCard';
import MotifDetail from './MotifDetail';

interface Motif {
  id: number;
  motifName: string;
  description: string | null;
  imagePath: string;
  backgroundImagePath: string;
  color: string;
}

interface SelectorProps {
  motifs: Motif[];
  onMotifSelect: (motifId: number | null) => void;
  selectedMotifId: number | null;
  motifToOpen: number | null;
  onMotifToOpenHandled: () => void;
}

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

function SelectorContent({ motifs, onMotifClick, selectedMotifId }: { motifs: Motif[]; onMotifClick: (motif: Motif) => void; selectedMotifId: number | null }) {
  return (
    <Stack
      direction="column"
      spacing={3}
      p="40px"
    >
      {motifs.map((motif) => (
        <SelectorCard 
          key={motif.id}
          image={motif.imagePath}
          onClick={() => onMotifClick(motif)}
          isSelected={selectedMotifId === motif.id}
        />
      ))}
    </Stack>
  )
}

export default function Selector({ motifs, onMotifSelect, selectedMotifId, motifToOpen, onMotifToOpenHandled }: SelectorProps) {
  const [selectedMotif, setSelectedMotif] = useState<Motif | null>(null);

  useEffect(() => {
    if (motifToOpen !== null) {
      const motif = motifs.find(m => m.id === motifToOpen);
      if (motif) {
        setSelectedMotif(motif);
      }
      onMotifToOpenHandled();
    }
  }, [motifToOpen, motifs, onMotifToOpenHandled]);

  const handleMotifClick = (motif: Motif) => {
    setSelectedMotif(motif);
    onMotifSelect(motif.id);
  };

  const handleBack = () => {
    setSelectedMotif(null);
    onMotifSelect(null);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <Slide direction="right" in={!selectedMotif} mountOnEnter unmountOnExit>
        <Box sx={{ 
          position: 'absolute', 
          width: '100%', 
          height: '100%', 
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}>
          <Stack direction="column">
            <SelectorHeader />
            <SelectorContent motifs={motifs} onMotifClick={handleMotifClick} selectedMotifId={selectedMotifId} />
          </Stack>
        </Box>
      </Slide>

      <Slide direction="left" in={!!selectedMotif} mountOnEnter unmountOnExit>
        <Box sx={{ 
          position: 'absolute', 
          width: '100%', 
          height: '100%', 
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}>
          {selectedMotif && <MotifDetail motif={selectedMotif} onBack={handleBack} />}
        </Box>
      </Slide>
    </Box>
  );
}