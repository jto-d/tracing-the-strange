import { Box } from "@mui/material";
import Image from "next/image";

export default function SelectorCard({ image }: { image: string }) {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '134px'}}>
      <Image src={image} alt="Selector Card" fill />
    </Box>
  );
}