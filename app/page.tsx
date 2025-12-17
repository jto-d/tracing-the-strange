'use client';

import { useEffect, useState } from 'react';
import AppLayout from './components/Layout/AppLayout';
import Selector from './components/Selector/Selector';
import Dashboard from './components/Dashboard/Dashboard';
import { getData } from '@/lib/api-client';

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [selectedMotifId, setSelectedMotifId] = useState<number | null>(null);
  const [selectedFranchises, setSelectedFranchises] = useState<string[]>([]);
  const [motifToOpen, setMotifToOpen] = useState<number | null>(null);

  useEffect(() => {
    getData()
      .then((data) => {
        console.log('Database dump:', data);
        setData(data);
      })
      .catch((error) => {
        console.error('Failed to fetch database dump:', error);
      });
  }, []);

  const filteredCharacters = (data?.characters || []).filter((character: any) => {
    const matchesMotif = !selectedMotifId || character.motifId === selectedMotifId;
    const matchesFranchise = selectedFranchises.length === 0 || 
      selectedFranchises.includes(character.franchise);
    return matchesMotif && matchesFranchise;
  });

  const handleMotifSelect = (motifId: number | null) => {
    setSelectedMotifId(motifId);
  };

  const handleFranchiseChange = (franchises: string[]) => {
    setSelectedFranchises(franchises);
  };

  const handleCharacterClick = (motifId: number) => {
    setMotifToOpen(motifId);
    setSelectedMotifId(motifId);
  };

  return (
    <AppLayout 
      sidebar={
        <Selector 
          motifs={data?.motifs || []} 
          onMotifSelect={handleMotifSelect}
          selectedMotifId={selectedMotifId}
          motifToOpen={motifToOpen}
          onMotifToOpenHandled={() => setMotifToOpen(null)}
        />
      }
    >
      <Dashboard 
        characters={filteredCharacters}
        selectedFranchises={selectedFranchises}
        onFranchiseChange={handleFranchiseChange}
        onCharacterDetailOpen={handleCharacterClick}
      />
    </AppLayout>
  );
}
