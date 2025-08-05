import Image from 'next/image';

export function PhoneMockup() {
  return (
    <div className="relative order-first lg:absolute lg:-right-[25px] xl:-right-[110px] -z-[1] -top-[119px] lg:-top-[35px]">
      <Image
        src="/Influe_mobile_mockup_3_1_sm.png"
        alt="Small App mobile mockup"
        width={390}
        height={427}
        className="max-w-full object-contain lg:hidden sm:block-- ---hidden"
      />

      <Image
        src="/Influe_mobile_mockup_3_1.png"
        alt="Large App desktop mockup"
        width={666}
        height={679}
        className="lg:block sm:hidden hidden w-[666px] lg:h-[679px] object-contain"
      />
    </div>
  );
}
