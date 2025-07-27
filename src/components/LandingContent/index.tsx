import Wrapper from '../Wrapper';
import HeroInfoSection from './HeroInfoSection';
import { PhoneMockup } from './PhoneMockup';

function LandingContent() {
  return (
    <Wrapper>
      <section className="relative flex flex-col items-center lg:items-start pt-[42px] pb-[57px]">
        <HeroInfoSection />
        <PhoneMockup />
      </section>
    </Wrapper>
  );
}

export default LandingContent;
