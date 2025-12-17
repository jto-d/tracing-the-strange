import { Box } from "@mui/material";
import Image from "next/image";

interface SelectorCardProps {
  image: string;
  onClick?: () => void;
}

export default function SelectorCard({ image, onClick }: SelectorCardProps) {
  return (
    <Box 
      onClick={onClick}
      sx={{ 
        position: 'relative', 
        width: '100%', 
        height: '134px',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s, opacity 0.2s',
        '&:hover': onClick ? {
          transform: 'scale(1.02)',
          opacity: 0.9,
        } : {},
      }}
    >
      <Image src={image} alt="Selector Card" fill />
    </Box>
  );
}