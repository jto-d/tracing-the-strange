import { Stack, Typography, Grid } from "@mui/material";
import DashboardCard from "./DashboardCard";
import DashboardFilter from "./DashboardFilter";

interface Character {
  id: number;
  name: string;
  media: string;
  franchise: string;
  description: string | null;
  imagePath: string;
  motifId: number;
}

interface DashboardProps {
  characters: Character[];
}

function DashboardHeader() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" padding="40px" height="142px">
      <Typography variant="h1">Modern Portrayals</Typography>
      <DashboardFilter />
    </Stack>
  );
}

function DashboardContent({ characters }: { characters: Character[] }) {
  return (
    <Grid container spacing={4} px="40px">
      {characters.map((character) => (
        <Grid key={character.id} size={{ xs: 12, md: 3 }}>
          <DashboardCard character={character} />
        </Grid>
      ))}
    </Grid>
  );
}

export default function Dashboard({ characters }: DashboardProps) {
  return (
    <Stack direction="column">
      <DashboardHeader />
      <DashboardContent characters={characters} />
    </Stack>
  );
}