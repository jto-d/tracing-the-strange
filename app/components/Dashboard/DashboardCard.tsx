import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import TypePill from "./TypePill";
import { Motif } from "@prisma/client";

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

export default function DashboardCard({ character, onClick }: { character: Character, onClick?: () => void }) {
  return (
    <Stack 
      direction="column" 
      spacing={1.5}
      sx={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      <Box sx={{ position: 'relative', width: '100%', aspectRatio: '1/1' }}>
        <Image src={"/images/characters/" + character.imagePath} alt="Dashboard Card" fill style={{ objectFit: 'cover' }} />
        <TypePill 
          text={character.motif.motifName || ''}
          color={character.motif.color} 
          overlay
        />
      </Box>
      <Stack direction="column" spacing={1}>
        <Typography variant="h3">{character.name}</Typography>
        <Typography variant="body1">{character.franchise} • {character.media}</Typography>
      </Stack>
    </Stack>

  );
}