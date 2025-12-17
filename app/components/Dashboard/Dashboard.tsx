import { Stack, Typography, Grid } from "@mui/material";
import DashboardCard from "./DashboardCard";
import DashboardFilter from "./DashboardFilter";

function DashboardHeader() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" padding="40px" height="142px">
      <Typography variant="h1">Modern Portrayals</Typography>
      <DashboardFilter />
    </Stack>
  );
}

function DashboardContent() {
  return (
    <Grid container spacing={4} px="40px">
      {Array.from({ length: 40 }).map((_, index) => (
        <Grid key={index} size={{ xs: 12, md: 3 }}>
          <DashboardCard name="Ahri" media="League of Legends" mediaType="Game" />
        </Grid>
      ))}
    </Grid>
  );
}

export default function Dashboard() {
  return (
    <Stack direction="column">
      <DashboardHeader />
      <DashboardContent />
    </Stack>
  );
}