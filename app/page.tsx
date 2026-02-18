'use client';

import { useEffect, useState } from 'react';
import FirstSection from '@/components/MainSection';
import Screen from '@/components/Screen';
import StatsSection from '@/components/StateSection';
import HowWorks from '@/components/HowWorks';
import PlatformFeatues from '@/components/platformFeatues';
import SecondScreen from '@/components/SecondScreen';
import Loader from '@/components/Loader/Loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fakeDataFetch();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <FirstSection />
      <Screen />
      <HowWorks />
      <SecondScreen />
      <PlatformFeatues />
    </div>
  );
}
