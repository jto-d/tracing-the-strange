'use client';

import { useState } from "react";
import { Stack, Typography, Grid } from "@mui/material";
import DashboardCard from "./DashboardCard";
import DashboardFilter from "./DashboardFilter";
import CharacterDetail from "./CharacterDetail";

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

function DashboardContent({ characters, onCharacterClick }: { characters: Character[], onCharacterClick: (character: Character) => void }) {
  return (
    <Grid container spacing={4} px="40px">
      {characters.map((character) => (
        <Grid key={character.id} size={{ xs: 12, md: 3 }}>
          <DashboardCard character={character} onClick={() => onCharacterClick(character)} />
        </Grid>
      ))}
    </Grid>
  );
}

export default function Dashboard({ characters }: DashboardProps) {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleNext = () => {
    if (!selectedCharacter) return;
    const currentIndex = characters.findIndex(c => c.id === selectedCharacter.id);
    const nextIndex = (currentIndex + 1) % characters.length;
    setSelectedCharacter(characters[nextIndex]);
  };

  const handlePrevious = () => {
    if (!selectedCharacter) return;
    const currentIndex = characters.findIndex(c => c.id === selectedCharacter.id);
    const previousIndex = (currentIndex - 1 + characters.length) % characters.length;
    setSelectedCharacter(characters[previousIndex]);
  };

  return (
    <Stack direction="column">
      <DashboardHeader />
      <DashboardContent characters={characters} onCharacterClick={handleCharacterClick} />
      <CharacterDetail 
        character={selectedCharacter} 
        open={modalOpen} 
        onClose={handleModalClose}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </Stack>
  );
}