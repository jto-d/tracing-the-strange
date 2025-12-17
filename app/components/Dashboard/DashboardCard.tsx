import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface Character {
  id: number;
  name: string;
  media: string;
  franchise: string;
  description: string | null;
  imagePath: string;
  motifId: number;
}

function TypePill({ text }: { text: string }) {
  return (
    <Box 
      sx={{ 
        backgroundColor: 'primary.main',
        color: 'text.primary',
        textAlign: 'center',
        padding: '6px 10px',
        borderRadius: '16px',
        position: 'absolute',
        top: '10px',
        right: '10px',
        zIndex: 1,
        width: 'fit-content',
      }}>
      <Typography fontSize="12px">{text}</Typography>
    </Box>
  );
}

export default function DashboardCard({ character }: { character: Character }) {
  return (
    <Stack direction="column" spacing={1.5}>
      <Box sx={{ position: 'relative', width: '100%', aspectRatio: '1/1' }}>
        <Image src={character.imagePath} alt="Dashboard Card" fill style={{ objectFit: 'cover' }} />
        <TypePill text="Fox-spirit" />
      </Box>
      <Stack direction="column" spacing={1}>
        <Typography variant="h3">{character.name}</Typography>
        <Typography variant="body1">{character.franchise} • {character.media}</Typography>
      </Stack>
    </Stack>

  );
}