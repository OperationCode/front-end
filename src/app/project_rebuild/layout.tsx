import type { ReactNode } from 'react';
import HeroBanner from '@/components/HeroBanner/HeroBanner';

export default function ProjectRebuildLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeroBanner
        title="Project Rebuild"
        backgroundImageSource="https://operation-code-assets.s3.us-east-2.amazonaws.com/heroBanners/project_rebuild_hero.jpg"
        className="min-h-[60dvh]"
      />

      {children}
    </>
  );
}
