'use client';

import { Box, Stack, Typography, IconButton, Fade } from '@mui/material';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TypePill from './TypePill';
import { Motif } from '@prisma/client';

interface Character {
  id: number;
  name: string;
  media: string;
  franchise: string;
  description: string | null;
  imagePath: string;
  motifId: number;
  motif: Motif;
}

interface CharacterDetailProps {
  character: Character | null;
  open: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

export default function CharacterDetail({ character, open, onClose, onNext, onPrevious }: CharacterDetailProps) {
  if (!character || !open) return null;

  return (
    <Fade in={open}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 1300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(13, 13, 13, 0.8)',
          backdropFilter: 'blur(10px)',
        }}
        onClick={onClose}
      >
        <Box
          onClick={(e) => e.stopPropagation()}
          sx={{
            position: 'relative',
            width: '50%',
            maxWidth: '800px',
            backgroundColor: 'background.paper',
            borderRadius: '8px',
            overflow: 'hidden',
            outline: 'none',
          }}
        >
          <Stack 
            direction="row" 
            justifyContent="space-between" 
            alignItems="center" 
            padding="10px"
            sx={{
              backgroundColor: 'background.default',
            }}
          >
            <TypePill text={character.motif.motifName} color={character.motif.color} />
            <IconButton
              onClick={onClose}
              sx={{
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
          

          {onPrevious && (
            <IconButton
              onClick={onPrevious}
              sx={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          )}

          {onNext && (
            <IconButton
              onClick={onNext}
              sx={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          )}

          <Stack direction="column" sx={{ maxHeight: '90vh', overflow: 'auto' }}>
            <Box sx={{ position: 'relative', width: '100%', aspectRatio: '5/3' }}>
              <Image 
                src={"/images/characters/" + character.imagePath} 
                alt={character.name} 
                fill
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center 20%'
                }}
              />
            </Box>

            <Stack direction="column" spacing={2} padding={4}>
              <Typography variant="h1">{character.name}</Typography>
              
              <Stack direction="column" spacing={1}>
                <Typography variant="body1">
                  <strong>Source:</strong> {character.franchise}
                </Typography>
                <Typography variant="body1">
                  <strong>Media Type:</strong> {character.media}
                </Typography>
              </Stack>
              <Typography variant="body1">
                {character.description || 'No description available.'}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Fade>
  );
}
