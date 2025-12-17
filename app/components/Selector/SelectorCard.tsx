import { Box } from "@mui/material";
import Image from "next/image";

interface SelectorCardProps {
  image: string;
  onClick?: () => void;
  isSelected?: boolean;
}

export default function SelectorCard({ image, onClick, isSelected }: SelectorCardProps) {
  return (
    <Box 
      onClick={onClick}
      sx={{ 
        position: 'relative', 
        width: '100%', 
        height: '134px',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s, opacity 0.2s, box-shadow 0.2s',
        border: isSelected ? '3px solid' : 'none',
        borderColor: isSelected ? 'primary.main' : 'transparent',
        boxShadow: isSelected ? '0 0 20px rgba(255, 255, 255, 0.3)' : 'none',
        borderRadius: '4px',
        overflow: 'hidden',
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