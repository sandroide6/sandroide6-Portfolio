'use client';

import dynamic from 'next/dynamic';

const LoadingScreen = dynamic(() => import('@/components/ui/LoadingScreen'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), { ssr: false });
const LenisProvider = dynamic(() => import('@/components/providers/LenisProvider'), { ssr: false });

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <LenisProvider>{children}</LenisProvider>
    </>
  );
}
