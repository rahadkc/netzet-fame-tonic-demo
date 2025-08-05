function PromoBanner() {
  return (
    <section className="px-5 py-4 md:py-2.5 flex gap-2.5 justify-center items-center self-stretch relative bg-[linear-gradient(90deg,_#fc004e_0%,_#fc004e_20%,_#10cbe0_85%,_#10cbe0_100%)] ">
      <p className="text-center leading-[12px]  xl:text-[22px] xl:leading-[26px]">
        <span className="text-cyan-500 text-base text-[16px] xl:text-[22px] lg:text-[18px] font-extrabold">
          🚀 FRESH BEGINNINGS SALE:&nbsp;
        </span>
        <span className="text-white text-sm xl:text-[22px] lg:text-[18px] font-bold">
          Extra 25% OFF, Limited Spots - start your journey today!
        </span>
      </p>
    </section>
  );
}

export default PromoBanner;
