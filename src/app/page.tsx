import Header from '@/components/Header';
import LandingContent from '@/components/LandingContent';
import PromoBanner from '@/components/PromoBanner';

export default function Home() {
  return (
    <>
      <PromoBanner />
      <Header />
      <LandingContent />
    </>
  );
}
