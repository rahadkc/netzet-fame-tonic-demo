import Header from '@/components/Header';
import HeroInfoSection from '@/components/HeroInfoSection';
import { PhoneMockup } from '@/components/PhoneMockup';
import PromoBanner from '@/components/PromoBanner';

export default function Home() {
  return (
    <>
      <PromoBanner />
      <Header />
      <HeroInfoSection />
      <PhoneMockup />
    </>
  );
}
