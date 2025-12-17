import { Box, Typography } from "@mui/material";

export default function TypePill({ text, color, overlay = false }: { text: string, color: string, overlay?: boolean }) {
  return (
    <Box 
      sx={{ 
        backgroundColor: color,
        color: 'text.primary',
        textAlign: 'center',
        padding: '6px 10px',
        borderRadius: '16px',
        position: overlay ? 'absolute' : 'relative',
        top: overlay ? '10px' : '0',
        right: overlay ? '10px' : '0',
        zIndex: 1,
        width: 'fit-content',
      }}>
      <Typography fontSize="12px">{text}</Typography>
    </Box>
  );
}