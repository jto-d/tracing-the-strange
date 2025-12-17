'use client';

import { useEffect, useState } from 'react';
import AppLayout from './components/Layout/AppLayout';
import Selector from './components/Selector/Selector';
import Dashboard from './components/Dashboard/Dashboard';
import { getData } from '@/lib/api-client';

export default function Home() {
  const [data, setData] = useState<any>(null);

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

  return (
    <AppLayout sidebar={<Selector motifs={data?.motifs || []} />}>
      <Dashboard characters={data?.characters || []} />
    </AppLayout>
  );
}
