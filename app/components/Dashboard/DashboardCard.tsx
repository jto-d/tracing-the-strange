import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

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

export default function DashboardCard({ name, media, mediaType }: { name: string, media: string, mediaType: string }) {
  return (
    <Stack direction="column" spacing={1.5}>
      <Box sx={{ position: 'relative', width: '100%', aspectRatio: '1/1' }}>
        <Image src="/images/characters/ahri.jpg" alt="Dashboard Card" fill style={{ objectFit: 'cover' }} />
        <TypePill text="Fox-spirit" />
      </Box>
      <Stack direction="column" spacing={1}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="body1">{media} • {mediaType}</Typography>
      </Stack>
    </Stack>

  );
}