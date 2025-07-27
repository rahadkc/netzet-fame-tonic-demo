import Image from 'next/image';

export function PhoneMockup() {
  return (
    <div className="relative order-first lg:absolute lg:-right-[25px] xl:-right-[110px] lg:-z-[1] lg:-top-[35px]">
      {/* Small screen */}
      <Image
        src="/Influe_mobile_mockup_3_1_sm.png"
        alt="App mobile mockup"
        width={320}
        height={693}
        className="max-w-full object-contain lg:hidden"
      />

      <Image
        src="/Influe_mobile_mockup_3_1.png"
        alt="App desktop mockup"
        width={666}
        height={679}
        className="hidden lg:block w-[666px] h-[679px] object-contain"
      />
    </div>
  );
}
