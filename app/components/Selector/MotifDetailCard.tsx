import { Box, Stack, Typography } from "@mui/material";
import { Motif } from "@prisma/client";
import Image from "next/image";

export default function MotifDetailCard({ motif }: { motif: Motif }) {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#383838',
        padding: 4,
        borderRadius: '8px',
        position: 'absolute',
        width: '83%',
        zIndex: 2,
        height: '83%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Stack direction="column" spacing={4}>
        <Box sx={{ position: 'relative', width: '100%', aspectRatio: '1/1' }}>
          <Image 
            src={motif.backgroundImagePath} 
            alt={motif.motifName} 
            fill 
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Stack direction="column" spacing={2}>
          <Typography variant="h2">{motif.motifName}</Typography>
          <Typography fontSize="1rem" lineHeight="1.25">{motif.description}</Typography>
        </Stack>
      </Stack>

    </Box>
  )
}